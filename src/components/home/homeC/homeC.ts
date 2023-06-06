import {dispatch} from "../../../store";
import {navigate} from "../../../store/actions";
import {Screens} from "../../../types/navigation";

export enum HomeCom {
    "alice" = "alice",
    "amormina" = "amormina",
    "camino" = "camino",
    "christmas" = "christmas",
    "glass" = "glass",
    "banner" = "banner",
    "hillhouse" = "hillhouse",
    "stranger" = "stranger",
    "lie" = "lie",
    "love" = "love",
    "ofmd" = "ofmd",
    "iradedios" = "iradedios",
    "jojo" = "jojo",
    "rain" = "rain",
    "sandman" = "sandman",
    "spenser" = "spenser",
    "stand" = "stand"
}
export default class HomeC extends HTMLElement {
    alice?: string;
    amormina?: string;
    camino?: string;
    christmas?: string;
    glass?: string;
    banner?: string;
    hillhouse?: string;
    stranger?: string;
    lie?: string;
    love?: string;
    ofmd?: string;
    iradedios?: string;
    jojo?: string;
    rain?: string;
    sandman?: string;
    spenser?: string;
    stand?: string;

    static get observedAttributes() {
        const attrs: Record<HomeCom, null> = {
            alice: null,
            amormina: null,
            camino: null,
            christmas: null,
            glass: null,
            banner: null,
            hillhouse: null,
            stranger: null,
            lie: null,
            love: null,
            ofmd: null,
            iradedios: null,
            jojo: null,
            rain: null,
            sandman: null,
            spenser: null,
            stand: null
        }
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: HomeCom,
        oldValue: string | undefined,
        newValue: string | undefined
      ) {
        this[propName] = newValue;
        this.render();
      }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/home/homeC/homeC.css"/>`
        }
        //section
        let el = this.ownerDocument.createElement("section")
        //div
        let firstChildEl = this.ownerDocument.createElement("div")
        firstChildEl.setAttribute("class", "banner")
        //img
        let secondChildEl = this.ownerDocument.createElement("img")
        secondChildEl.setAttribute("class", "change")
        secondChildEl.setAttribute("src", this.banner??"")
        secondChildEl.setAttribute("height", "480np")
        secondChildEl.setAttribute("alt", " ")
        firstChildEl.appendChild(secondChildEl)
        el.appendChild(firstChildEl)
        //input
        firstChildEl = this.ownerDocument.createElement("input")
        firstChildEl.textContent = "Sort by"
        el.appendChild(firstChildEl)
        //div
        firstChildEl = this.ownerDocument.createElement("div")
        firstChildEl.setAttribute("class", "movies-container")
        //div
        let divElement = this.ownerDocument.createElement("div")
        divElement.setAttribute("class", "movies")
        //img
        let thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("class", "change")
        thirdChildEl.setAttribute("src", this.alice??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        thirdChildEl.addEventListener("click", ()=>{
            dispatch(navigate(Screens.ALICE));
        })
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.camino??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.glass??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.hillhouse??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.stranger??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.lie??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.love??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.ofmd??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.iradedios??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.jojo??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.rain??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.sandman??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.spenser??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        //img
        thirdChildEl = this.ownerDocument.createElement("img")
        thirdChildEl.setAttribute("src", this.stand??"")
        thirdChildEl.setAttribute("height", "300np")
        thirdChildEl.setAttribute("alt", " ")
        divElement.appendChild(thirdChildEl)
        firstChildEl.appendChild(divElement)
        el.appendChild(firstChildEl)
        this.shadowRoot?.appendChild(el)

        // const temp = `
        // <section>
        //     <div class = "banner">
        //         <img src=${this.banner} height="480np" alt=" "></img>
        //     </div>
        //
        //     <input>
        //         sort by
        //     </input>
        //
        //     <div id="movies-container">
        //         <div class = "movies">
        //
        //             <img class="change" src=${this.alice} height = "300np" alt=" "></img>
        //
        //             <img src=${this.amormina} height = "300np" alt=" "></img>
        //             <img src=${this.camino} height = "300np" alt=" "></img>
        //             <img src=${this.glass} height = "300np" alt=" "></img>
        //             <img src=${this.hillhouse} height = "300np" alt=" "></img>
        //             <img src=${this.stranger} height = "300np" alt=" "></img>
        //             <img src=${this.lie} height = "300np" alt=" "></img>
        //             <img src=${this.love} height = "300np" alt=" "></img>
        //             <img src=${this.ofmd} height = "300np" alt=" "></img>
        //             <img src=${this.iradedios} height = "300np" alt=" "></img>
        //             <img src=${this.jojo} height = "300np" alt=" "></img>
        //             <img src=${this.rain} height = "300np" alt=" "></img>
        //             <img src=${this.sandman} height = "300np" alt=" "></img>
        //             <img src=${this.spenser} height = "300np" alt=" "></img>
        //             <img src=${this.stand} height = "300np" alt=" "></img>
        //         </div>
        //     </div>
        // </section>
        // `;
    }
}

customElements.define('app-home', HomeC);