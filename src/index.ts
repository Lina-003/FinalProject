import "./components/index";
import "./screens/dashboard";
import "./screens/logIn";
import "./screens/signUp";
import "./components/movie/movieCharacter/movieCharacter"
import {Screens} from "./types/navigation";
import {addObserver, appState} from "./store";
import {Attribute3} from "./components/movie/alice";
import {Attribute4} from "./components/movie/movieCharacter/movieCharacter";

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"});

        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../src/index.css">
        `;
        switch (appState.screen) {
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement("my-dashboard");
                this.shadowRoot?.appendChild(dashboard);
                break;
            case Screens.LOGIN:
                const login = this.ownerDocument.createElement("app-login");
                this.shadowRoot?.appendChild(login);
                break;
            case Screens.SIGNUP:
                const signup = this.ownerDocument.createElement("app-signup");
                this.shadowRoot?.appendChild(signup);
                break;
            case Screens.ALICE:
                const alice = this.ownerDocument.createElement("app-info");
                this.shadowRoot?.appendChild(alice);
                break;
            case Screens.ANN:
                const ann = this.ownerDocument.createElement("character-info")
                ann.setAttribute(Attribute4.name,"Yuzuha Usagi")
                ann.setAttribute(Attribute4.description,"A female mountain climber who was transported to the empty city of Tokyo shortly after her father's death. Usagi joins Arisu shortly after the death of his friends.")
                ann.setAttribute(Attribute4.character_status,"Char status")
                ann.setAttribute(Attribute4.character_gender,"Female")
                ann.setAttribute(Attribute4.character_age,"20 years old")
                ann.setAttribute(Attribute4.affiliation_squad,"Pilote")
                ann.setAttribute(Attribute4.debut_episode,"First Season, chapter 1 (20-august-2020)")
                this.shadowRoot?.appendChild(ann)
                break;
            case Screens.CARO:
                const caro = this.ownerDocument.createElement("character-info")
                caro.setAttribute(Attribute4.name,"Ryohei Arisu")
                caro.setAttribute(Attribute4.description,"A 24-year-old man obsessed with video games who feels he does not fit in with his family")
                caro.setAttribute(Attribute4.character_status,"Char status")
                caro.setAttribute(Attribute4.character_gender,"Male")
                caro.setAttribute(Attribute4.character_age,"24 years old")
                caro.setAttribute(Attribute4.affiliation_squad,"Pilote")
                caro.setAttribute(Attribute4.debut_episode,"First Season, chapter 1 (1-august-2020)")
                this.shadowRoot?.appendChild(caro)
                break;
            default:
                break;
        }
    }
}

customElements.define("app-container", AppContainer);
