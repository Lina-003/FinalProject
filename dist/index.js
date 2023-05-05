import "./components/index.js";
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
