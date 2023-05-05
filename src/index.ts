import "./components/index.js";
import * as components from "./components/index.js";
import AppInfo from "./components/movie/alice.js";
import Header from "./components/Header/header.js";
import Home from "./components/home/home.js";

class AppContainer extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot)
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css"/>
        <my-header></my-header>
        <app-home></app-home>
        `;
  }
}

customElements.define("app-container", AppContainer);
