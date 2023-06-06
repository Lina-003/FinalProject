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
        pEl.textContent = "In 1717, Captain Bonnet is a member of the landed gentry of Barbados who abandons his comfortable life and family to prove himself as a pirate during the Golden Age of Piracy, despite having no aptitude for the role. Sailing aboard his ship the Revenge, Captain Bonnet and his dysfunctional crew struggle to survive against deadly threats from naval warships and other bloodthirsty pirates. During their misadventures the crew of the Revenge cross paths with notorious pirate captain Edward Teach and his crew, including First Mate Izzy Hands. Bonnet and Teach eventually fall in love."
        thirdChildEl.appendChild(pEl)
        //p
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "creator")
        //span
        let spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = "Created by: "
        pEl.appendChild(spanEl)
        pEl.textContent = "David Jenkins"
        thirdChildEl.appendChild(pEl)
        //p
        pEl = this.ownerDocument.createElement("p")
        pEl.setAttribute("class", "starring")
        //span
        spanEl = this.ownerDocument.createElement("span")
        spanEl.textContent = "Starring: "
        pEl.appendChild(spanEl)
        pEl.textContent = "Rhys Darby, Ewen Bremner, Joel Fry, Samson Kayo"
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
            dispatch(navigate(Screens.CARO));
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
        // //div
        // firstChildEl = this.ownerDocument.createElement("div")
        // firstChildEl.setAttribute("class","moments-container")
        // //div
        // secondChildEl = this.ownerDocument.createElement("div")
        // secondChildEl.setAttribute("class", "moments")
        // //img
        // thirdChildEl = this.ownerDocument.createElement("img")
        // thirdChildEl.setAttribute("src", this.moment_1 ?? "")
        // thirdChildEl.setAttribute("height", "300np")
        // thirdChildEl.setAttribute("alt", "")
        // secondChildEl.appendChild(thirdChildEl)
        // //img
        // thirdChildEl = this.ownerDocument.createElement("img")
        // thirdChildEl.setAttribute("src", this.moment_2 ?? "")
        // thirdChildEl.setAttribute("height", "300np")
        // thirdChildEl.setAttribute("alt", "")
        // secondChildEl.appendChild(thirdChildEl)
        // firstChildEl.appendChild(secondChildEl)
        // el.appendChild(firstChildEl)
        this.shadowRoot?.appendChild(el)

        // const temp = `
        // <section class="container">
        //   <section class="banner-container">
        //       <nav>
        //           <div class="left-nav">
        //             <img src=${this.back} height = "30np" alt=" "></img>
        //           </div>
        //
        //           <div class="right-nav">
        //             <img src=${this.search} height = "30np" alt=" "></img>
        //             <img src=${this.log_perfil} height = "30np" alt=" "></img>
        //           </div>
        //       </nav>
        //
        //       <div class = "banner-alice">
        //         <img src=${this.b_alice} height = "480np" alt=" "></img>
        //       </div>
        //
        //       <section class="full-container">
        //         <div class="info-container">
        //           <p class="info">In 1717, Captain Bonnet is a member of the landed gentry of Barbados who abandons his comfortable life and family to prove himself as a pirate during the Golden Age of Piracy, despite having no aptitude for the role. Sailing aboard his ship the Revenge, Captain Bonnet and his dysfunctional crew struggle to survive against deadly threats from naval warships and other bloodthirsty pirates. During their misadventures the crew of the Revenge cross paths with notorious pirate captain Edward Teach and his crew, including First Mate Izzy Hands. Bonnet and Teach eventually fall in love.</p>
        //           <p class="creator"><span>Created by: </span>David Jenkins</p>
        //           <p class="starring"><span>Starring: </span>Rhys Darby, Ewen Bremner, Joel Fry, Samson Kayo</p>
        //         </div>
        //         <div class="play">
        //             <img src=${this.play} height = "70np" alt=" "></img>
        //             <img src=${this.add} height = "70np" alt=" "></img>
        //
        //         </div>
        //       </section>
        //
        //   </section>
        //
        //     <div id="characters-container">
        //         <div class = "characters">
        //             <img src=${this.c_ann} height = "300np" alt=" "></img>
        //             <img src=${this.c_ari} height = "300np" alt=" "></img>
        //             <img src=${this.c_hika} height = "300np" alt=" "></img>
        //             <img src=${this.c_shun} height = "300np" alt=" "></img>
        //             <img src=${this.c_sugu} height = "300np" alt=" "></img>
        //         </div>
        //     </div>
        //
        //     <div id="moments-container">
        //         <div class = "moments">
        //             <img src=${this.moment_1} height = "300np" alt=" "></img>
        //             <img src=${this.moment_2} height = "300np" alt=" "></img>
        //         </div>
        //     </div>
        // </section>
        // `;
    }
}

customElements.define("app-info", AppInfo);
export default AppInfo;
