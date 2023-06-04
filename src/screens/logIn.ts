import "../components/index";
import styles from "./login.css";
import { navigate } from "../store/actions";
//import Firebase from ".firebase";

const userPass = { email: "", password: "" };

export default class LogIn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
  }
}

customElements.define("app-login", LogIn);
