import "./components/index2.js";
class AppContainer2 extends HTMLElement {
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
        <app-info></app-info>
        `;
    }
}
customElements.define("app-container2", AppContainer2);
