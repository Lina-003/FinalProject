import {dispatch} from "../../../store";
import {navigate} from "../../../store/actions";
import {Screens} from "../../../types/navigation";
import {addObserver, appState} from "../../../store";

export enum Attribute4 {
    "b_alice" = "b_alice",
    "back" = "back",
    "search" = "search",
    "log_perfil" = "log_perfil",
    "character" = "character",
    "name" = "name",
    "description" = "description",
    "character_status" = "character_status",
    "character_gender" = "character_gender",
    "character_age" = "character_age",
    "affiliation_squad" = "affiliation_squad",
    "debut_episode" = "debut_episode"
}

class MovieCharacter extends HTMLElement {
    b_alice?: string;
    back?: string;
    search?: string;
    log_perfil?: string;
    character?: string;
    name?: string;
    description?: string;
    character_status?: string;
    character_gender?: string;
    character_age?: string;
    affiliation_squad?: string;
    debut_episode?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute4, null> = {
            b_alice: null,
            back: null,
            search: null,
            log_perfil: null,
            character: null,
            name: null,
            description: null,
            character_status: null,
            character_gender: null,
            character_age: null,
            affiliation_squad: null,
            debut_episode: null
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.b_alice = "../src/components/imageMS/alice-banner.png";
        this.back = "../src/components/imageHeader/arrow.png";
        this.search = "../src/components/imageHeader/search.png";
        this.log_perfil = "../src/components/imageMS/perfil.png";
        this.character = "..src/components/imageCharacters/alice/Ann.png";
        this.name = ""
        this.description = ""
        this.character_status = ""
        this.character_gender = ""
        this.character_age = ""
        this.affiliation_squad = ""
        this.debut_episode = ""
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute4,
        oldValue: string | undefined,
        newValue: string | undefined
    ) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/movie/movieCharacter/movieCharacter.css">`;
        }

        console.log(appState.movies)

        //section
        let el = this.ownerDocument.createElement("section")
        el.setAttribute("class", "container")
        //section
        let firstChildEl = this.ownerDocument.createElement("section")
        firstChildEl.setAttribute("class", "banner-container")
        //nav
        let secondChildEl = this.ownerDocument.createElement("nav")
        //first div
        let thirdChildEl = this.ownerDocument.createElement("div")
        thirdChildEl.setAttribute("class", "left-nav")
        //img
        let forthChildEl = this.ownerDocument.createElement("img")
        forthChildEl.setAttribute("src", this.back ?? "")
        forthChildEl.setAttribute("height", "30np")
        forthChildEl.setAttribute("alt", "")
        thirdChildEl.addEventListener("click", () => {
            dispatch(navigate(Screens.ALICE));
        })
        thirdChildEl.appendChild(forthChildEl)
        secondChildEl.appendChild(thirdChildEl)
        //second div
        thirdChildEl = this.ownerDocument.createElement("div")
        thirdChildEl.setAttribute("class", "right-nav")
        //first img
        forthChildEl = this.ownerDocument.createElement("img")
        forthChildEl.setAttribute("src", this.search ?? "")
        forthChildEl.setAttribute("height", "30np")
        forthChildEl.setAttribute("alt", "")
        thirdChildEl.appendChild(forthChildEl)
        //second img
        forthChildEl = this.ownerDocument.createElement("img")
        forthChildEl.setAttribute("src", this.log_perfil ?? "")
        forthChildEl.setAttribute("height", "30np")
        forthChildEl.setAttribute("alt", "")
        thirdChildEl.appendChild(forthChildEl)
        secondChildEl.appendChild(thirdChildEl)
        firstChildEl.appendChild(secondChildEl)
        //div
        secondChildEl = this.ownerDocument.createElement("div")
        secondChildEl.setAttribute("class", "banner-alice")
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.b_alice ?? "")
        thirdChildEl.setAttribute("height", "480np")
        thirdChildEl.setAttribute("alt", "")
        secondChildEl.appendChild(thirdChildEl)
        firstChildEl.appendChild(secondChildEl)
        //section
        secondChildEl = this.ownerDocument.createElement("section")
        secondChildEl.setAttribute("class", "full-container")
        //div
        thirdChildEl = this.ownerDocument.createElement("div")
        thirdChildEl.setAttribute("class", "info-container")
        //h1
        let h2El = this.ownerDocument.createElement("h2")
        h2El.setAttribute("class", "character-name")
        h2El.textContent = this.name ?? "name"
        thirdChildEl.appendChild(h2El)
        //p
        let pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "description")
        pEl.textContent = this.description ?? "description"
       
        thirdChildEl.appendChild(pEl)
        // thirdChildEl.appendChild(anchorEl)
        secondChildEl.appendChild(thirdChildEl)
        //div
        thirdChildEl = this.ownerDocument.createElement("div")
        thirdChildEl.setAttribute("class", "side-container")
        
        //img
        forthChildEl = this.ownerDocument.createElement("img")
        forthChildEl.setAttribute("src", this.character ?? "")
        forthChildEl.setAttribute("height", "140np")
        forthChildEl.setAttribute("alt", "")
        thirdChildEl.appendChild(forthChildEl)
       
        //card
        let divElement = this.ownerDocument.createElement("div")
        divElement.setAttribute("class", "card top")
        let fifthChildEl = this.ownerDocument.createElement("div")
        fifthChildEl.setAttribute("class", "card-header")
        fifthChildEl.textContent = "CHARACTER INFORMATION"

        let sixthChildEl = this.ownerDocument.createElement("div")
        sixthChildEl.setAttribute("class", "body")
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "character-attribute")
        pEl.textContent = "Status: "
        let spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = this.character_status ?? "status"
        pEl.appendChild(spanEl)
        sixthChildEl.appendChild(pEl)
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "character-attribute")
        pEl.textContent = "Gender: "
        spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = this.character_gender ?? "gender"
        pEl.appendChild(spanEl)
        sixthChildEl.appendChild(pEl)
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "character-attribute")
        pEl.textContent = "Age: "
        spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = this.character_age ?? "age"
        pEl.appendChild(spanEl)
        sixthChildEl.appendChild(pEl)
        let cardContentDiv = this.ownerDocument.createElement("div")
        cardContentDiv.setAttribute("class", "card-content")
        cardContentDiv.appendChild(fifthChildEl)
        cardContentDiv.appendChild(sixthChildEl)
        divElement.appendChild(cardContentDiv)
        thirdChildEl.appendChild(divElement)

        //card
        divElement = this.ownerDocument.createElement("div")
        divElement.setAttribute("class", "card")
        fifthChildEl = this.ownerDocument.createElement("div")
        fifthChildEl.setAttribute("class", "card-header")
        fifthChildEl.textContent = "CHARACTER AFFILIATION"
        sixthChildEl = this.ownerDocument.createElement("div")
        sixthChildEl.setAttribute("class", "body")
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "character-attribute")
        pEl.textContent = "Squad: "
        spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = this.affiliation_squad ?? "squad"
        pEl.appendChild(spanEl)
        sixthChildEl.appendChild(pEl)
        cardContentDiv = this.ownerDocument.createElement("div")
        cardContentDiv.setAttribute("class", "card-content")
        cardContentDiv.appendChild(fifthChildEl)
        cardContentDiv.appendChild(sixthChildEl)
        divElement.appendChild(cardContentDiv)
        thirdChildEl.appendChild(divElement)

        //card
        divElement = this.ownerDocument.createElement("div")
        divElement.setAttribute("class", "card bottom")
        fifthChildEl = this.ownerDocument.createElement("div")
        fifthChildEl.setAttribute("class", "card-header")
        fifthChildEl.textContent = "DEBUT"
        sixthChildEl = this.ownerDocument.createElement("div")
        sixthChildEl.setAttribute("class", "body")
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "character-attribute")
        pEl.textContent = "Episode: "
        spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = this.affiliation_squad ?? "squad"
        pEl.appendChild(spanEl)
        sixthChildEl.appendChild(pEl)
        cardContentDiv = this.ownerDocument.createElement("div")
        cardContentDiv.setAttribute("class", "card-content")
        cardContentDiv.appendChild(fifthChildEl)
        cardContentDiv.appendChild(sixthChildEl)
        divElement.appendChild(cardContentDiv)
        thirdChildEl.appendChild(divElement)
        secondChildEl.appendChild(thirdChildEl)
        firstChildEl.appendChild(secondChildEl)
        el.appendChild(firstChildEl)
        this.shadowRoot?.appendChild(el)
    }
}

customElements.define("character-info", MovieCharacter);
export default MovieCharacter;
