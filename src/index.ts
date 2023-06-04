import "./components/index";
import"./screens/dashboard";
import { Screens } from "./types/navigation";
import { appState } from "./store";

class AppContainer extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
   // addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    
    if(this.shadowRoot) this.shadowRoot.innerHTML=`
      <link rel="stylesheet" href="../src/index.css">
        `;
        switch (appState.screen) {
            case Screens.DASHBOARD:
              const dashboard = this.ownerDocument.createElement("my-dashboard");
              this.shadowRoot?.appendChild(dashboard);
              break;
      
            default:
              break;
        }
  }
}

customElements.define("app-container", AppContainer);
