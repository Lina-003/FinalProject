
import "../components/index";
import styles from "./login.css";
import {navigate} from "../store/actions";
import {addObserver, dispatch} from "../store";
import {Screens} from "../types/navigation";
//import Firebase from ".firebase";

const userFields = {
    username: "",
    email: "",
    password: ""
};

export default class SignUp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    /*async handleLoginButton() {
        Firebase.loginUser(userPass);
      }*/

    render() {
        const title = this.ownerDocument.createElement("h1");
        title.innerText = "Welcome! Please sign in";
        this.shadowRoot?.appendChild(title);

        const email = this.ownerDocument.createElement("input");
        email.placeholder = "email";
        email.type = "email";
        email.addEventListener(
            "change",
            (e: any) => (userFields.email = e.target.value)
        );
        this.shadowRoot?.appendChild(email);

        const username = this.ownerDocument.createElement("input");
        username.placeholder = "Username";
        username.type = "text";
        username.addEventListener(
            "change",
            (e: any) => (userFields.username = e.target.value)
        );
        this.shadowRoot?.appendChild(username);

        const password = this.ownerDocument.createElement("input");
        password.placeholder = "*********";
        password.type = "password";
        password.addEventListener(
            "change",
            (e: any) => (userFields.password = e.target.value)
        );
        this.shadowRoot?.appendChild(password);
        const passwordConfirm = this.ownerDocument.createElement("input");
        passwordConfirm.placeholder = "*********";
        passwordConfirm.type = "password";
        passwordConfirm.addEventListener(
            "change",
            (e: any) => {
                if (userFields.password !== e.target.value) {
                    console.log("Passwords do not match");
                }
            }
        );
        this.shadowRoot?.appendChild(passwordConfirm);

        const submit = this.ownerDocument.createElement("button");
        submit.innerText = "Submit";
        submit.addEventListener("click", () => {
            //Firebase.loginUser(userFields);
        });
        console.log("submit")
        this.shadowRoot?.appendChild(submit);

        const logInBtn = this.ownerDocument.createElement("a");
        logInBtn.innerText = "I already have an account";
        logInBtn.addEventListener(
            "click",
            (e: any) => {
                dispatch(navigate(Screens.LOGIN));
            });
        this.shadowRoot?.appendChild(logInBtn);
    }
}

customElements.define("app-signup", SignUp);
