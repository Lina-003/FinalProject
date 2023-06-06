import {dispatch} from "../../store";
import {navigate} from "../../store/actions";
import {Screens} from "../../types/navigation";

export enum Attribute3 {
    "b_alice" = "b_alice",
    "back" = "back",
    "search" = "search",
    "log_perfil" = "log_perfil",
    "add" = "add",
    "play" = "play",
    "c_ann" = "c_ann",
    "c_ari" = "c_ari",
    "c_hika" = "c_hika",
    "c_shun" = "c_shun",
    "c_sugu" = "c_sugu",
    "moment_1" = "moment_1",
    "moment_2" = "moment_2",
}

class AppInfo extends HTMLElement {
    b_alice?: string;
    back?: string;
    search?: string;
    log_perfil?: string;
    add?: string;
    play?: string;
    c_ann?: string;
    c_ari?: string;
    c_hika?: string;
    c_shun?: string;
    c_sugu?: string;
    moment_1?: string;
    moment_2?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute3, null> = {
            b_alice: null,
            back: null,
            search: null,
            log_perfil: null,
            add: null,
            play: null,
            c_ann: null,
            c_ari: null,
            c_hika: null,
            c_shun: null,
            c_sugu: null,
            moment_1: null,
            moment_2: null,
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
        this.add = "../src/components/imageMS/button-add.png";
        this.play = "../src/components/imageMS/play.png";
        //Characters
        this.c_ann = "../src/components/imageCharacters/alice/Ann.png";
        this.c_ari = "../src/components/imageCharacters/alice/Arisu.png";
        this.c_hika = "../src/components/imageCharacters/alice/Hikari.png";
        this.c_shun = "../src/components/imageCharacters/alice/Shuntaro.png";
        this.c_sugu = "../src/components/imageCharacters/alice/Suguru.png";
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute3,
        oldValue: string | undefined,
        newValue: string | undefined
    ) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/movie/alice.css">`;
        }
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
        thirdChildEl.addEventListener("click", ()=>{
            dispatch(navigate(Screens.DASHBOARD));
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
        //p
        let pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "info")
        pEl.textContent = "A video game fan and his two friends find themselves trapped in a parallel version of Tokyo, where they must compete in sadistic games to survive."
        thirdChildEl.appendChild(pEl)
        //p
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "creator")
        //span
        let spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = "Created by: "
        pEl.appendChild(spanEl)
        pEl.textContent = "Shinsuke Sato"
        thirdChildEl.appendChild(pEl)
        //p
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "starring")
        //span
        spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = "Starring: "
        pEl.appendChild(spanEl)
        pEl.textContent = "Kento Yamazaki and Tao Tsuchiya"
        thirdChildEl.appendChild(pEl)
        secondChildEl.appendChild(thirdChildEl)
        //div
        thirdChildEl = this.ownerDocument.createElement("div")
        thirdChildEl.setAttribute("class", "play")
        //img
        forthChildEl = this.ownerDocument.createElement("img")
        forthChildEl.setAttribute("src", this.play ?? "")
        forthChildEl.setAttribute("height", "70np")
        forthChildEl.setAttribute("alt", "")
        thirdChildEl.appendChild(forthChildEl)
        //img
        forthChildEl = this.ownerDocument.createElement("img")
        forthChildEl.setAttribute("src", this.add ?? "")
        forthChildEl.setAttribute("height", "70np")
        forthChildEl.setAttribute("alt", "")
        thirdChildEl.appendChild(forthChildEl)
        secondChildEl.appendChild(thirdChildEl)
        firstChildEl.appendChild(secondChildEl)
        el.appendChild(firstChildEl)
        //div
        firstChildEl = this.ownerDocument.createElement("div")
        firstChildEl.setAttribute("class", "characters-container")
        //div
        secondChildEl = this.ownerDocument.createElement("div")
        secondChildEl.setAttribute("class", "characters")
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.c_ann ?? "")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", "")
        thirdChildEl.addEventListener("click", ()=>{
            dispatch(navigate(Screens.ANN));
        })
        secondChildEl.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.c_ari ?? "")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", "")
        thirdChildEl.addEventListener("click", ()=>{
            dispatch(navigate(Screens.CARO ));
        })
        secondChildEl.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.c_hika ?? "")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", "")
        secondChildEl.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.c_shun ?? "")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", "")
        secondChildEl.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.c_sugu ?? "")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", "")
        secondChildEl.appendChild(thirdChildEl)
        firstChildEl.appendChild(secondChildEl)
        el.appendChild(firstChildEl)
        
        this.shadowRoot?.appendChild(el)

        
    }
}

customElements.define("app-info", AppInfo);
export default AppInfo;
