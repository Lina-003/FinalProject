import "../components/index";
import styles from "./login.css";
import {navigate} from "../store/actions";
import {addObserver, dispatch} from "../store";
import {Screens} from "../types/navigation";
import Firebase from "../utils/firebase";

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

    async handleSignUpButton() {
        const response = await Firebase.registerUser(userFields)
        if (response === undefined || response === null){
            alert("Can't register, try again!")
        } else if (response){
            alert("Correctly registered!")
            dispatch(navigate(Screens.LOGIN));
        }
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/src/screens/signup.css">`;
        }

        const el = this.ownerDocument.createElement("div")
        el.setAttribute("class", "signup-box")
        let firstChildEl = this.ownerDocument.createElement("h2")
        firstChildEl.textContent = "SIGN UP"
        el.appendChild(firstChildEl)

        const formEl = this.ownerDocument.createElement("form")
        formEl.addEventListener("submit", (e) => {
            e.preventDefault()
        })
        let childFormEl = this.ownerDocument.createElement("div")
        childFormEl.setAttribute("class", "user-box")
        let secondChildFormEl = this.ownerDocument.createElement("input")
        secondChildFormEl.setAttribute("type", "text")
        secondChildFormEl.setAttribute("name", "username")
        secondChildFormEl.setAttribute("required", "true")
        secondChildFormEl.addEventListener(
            "change",
            (e: any) => (userFields.username = e.target.value)
        );
        childFormEl.appendChild(secondChildFormEl)
        let labelEl = this.ownerDocument.createElement("label")
        labelEl.textContent = "Username"
        childFormEl.appendChild(labelEl)
        formEl.appendChild(childFormEl)

        childFormEl = this.ownerDocument.createElement("div")
        childFormEl.setAttribute("class", "user-box")
        secondChildFormEl = this.ownerDocument.createElement("input")
        secondChildFormEl.setAttribute("type", "text")
        secondChildFormEl.setAttribute("name", "email")
        secondChildFormEl.setAttribute("required", "true")
        secondChildFormEl.addEventListener(
            "change",
            (e: any) => (userFields.email = e.target.value)
        );
        childFormEl.appendChild(secondChildFormEl)
        labelEl = this.ownerDocument.createElement("label")
        labelEl.textContent = "Email"
        childFormEl.appendChild(labelEl)
        formEl.appendChild(childFormEl)

        childFormEl = this.ownerDocument.createElement("div")
        childFormEl.setAttribute("class", "user-box")
        secondChildFormEl = this.ownerDocument.createElement("input")
        secondChildFormEl.setAttribute("type", "password")
        secondChildFormEl.setAttribute("name", "password")
        secondChildFormEl.setAttribute("required", "true")
        secondChildFormEl.addEventListener(
            "change",
            (e: any) => (userFields.password = e.target.value)
        );
        childFormEl.appendChild(secondChildFormEl)
        labelEl = this.ownerDocument.createElement("label")
        labelEl.textContent = "Password"
        childFormEl.appendChild(labelEl)
        formEl.appendChild(childFormEl)

        childFormEl = this.ownerDocument.createElement("div")
        childFormEl.setAttribute("class", "user-box")
        secondChildFormEl = this.ownerDocument.createElement("input")
        secondChildFormEl.setAttribute("type", "password")
        secondChildFormEl.setAttribute("required", "true")
        secondChildFormEl.addEventListener(
            "change",
            (e: any) => {
                if(userFields.password !== e.target.value){
                    console.log("Password do not match :(")
                    alert("The passwords aren't the same")
                }
            }
        );
        childFormEl.appendChild(secondChildFormEl)
        labelEl = this.ownerDocument.createElement("label")
        labelEl.textContent = "Confirm your password"
        childFormEl.appendChild(labelEl)
        formEl.appendChild(childFormEl)

        const loginButton = this.ownerDocument.createElement("a");
        loginButton.innerText = "Sign up";
        loginButton.setAttribute("class", "signup-btn")
        loginButton.addEventListener("click", () => {
            this.handleSignUpButton()
        });

        const divEl = this.ownerDocument.createElement("div")
        divEl.setAttribute("class", "btn-container")
        divEl.appendChild(loginButton)
        formEl.appendChild(divEl)

        const signUpButton = this.ownerDocument.createElement("a");
        signUpButton.setAttribute("class", "login-btn")
        signUpButton.innerText = "I already have an account";
        signUpButton.addEventListener(
            "click",
            (e: any) => {
                dispatch(navigate(Screens.LOGIN));
            });
        formEl.appendChild(signUpButton)

        el.appendChild(formEl)

        this.shadowRoot?.appendChild(el);
    }
}

customElements.define("app-signup", SignUp);
