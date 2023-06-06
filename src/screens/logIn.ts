import "../components/index";
import styles from "./login.css";
import {navigate} from "../store/actions";
import {addObserver, dispatch} from "../store";
import {Screens} from "../types/navigation";
//import firebase from "firebase/compat";
//import Firebase from ".firebase";

const userPass = {email: "", password: ""};

export default class LogIn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    async handleLoginButton() {
        console.log("handleLoginButton");
        // Firebase.loginUser(userPass);
    }

    render() {
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/logIn.css">
        `;

        const title = this.ownerDocument.createElement("h1");
        title.innerText = "Welcome! Please sign in";
        this.shadowRoot?.appendChild(title);

        const email = this.ownerDocument.createElement("input");
        email.placeholder = "email";
        email.type = "email";
        email.addEventListener(
            "change",
            (e: any) => (userPass.email = e.target.value)
        );
        this.shadowRoot?.appendChild(email);

        const password = this.ownerDocument.createElement("input");
        password.placeholder = "*********";
        password.type = "password";
        password.addEventListener(
            "change",
            (e: any) => (userPass.password = e.target.value)
        );
        this.shadowRoot?.appendChild(password);

        const loginButton = this.ownerDocument.createElement("button");
        loginButton.innerText = "Log In";
        loginButton.addEventListener("click", () => {
            this.handleLoginButton().then( ()=>{
                dispatch(navigate(Screens.DASHBOARD));
            }).catch((error) => {

            })
        });
        this.shadowRoot?.appendChild(loginButton);

        const signUpButton = this.ownerDocument.createElement("a");
        signUpButton.innerText = "Create an account";
        signUpButton.addEventListener(
            "click",
            (e: any) => {
                dispatch(navigate(Screens.SIGNUP));
            });
        this.shadowRoot?.appendChild(signUpButton);
    }
}

customElements.define("app-login", LogIn);
