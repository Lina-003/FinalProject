import {Screens} from "../../../types/navigation";
import {navigate} from "../../../store/actions";
import {dispatch} from "../../../store";


export enum HNav {
    "logo" = "logo",
    "movies" = "movies",
    "series" = "series",
    "search" = "search",
    "notification" = "notification",
    "user" = "user"
}

export default class HeaderNav extends HTMLElement {
    logo?: string;
    movies?: string;
    series?: string;
    search?: string;
    notification?: string;
    user?: string;

    static get observedAttributes() {
        const rightAttrs: Record<HNav, null> = {
            logo: null,
            movies: null,
            series: null,
            search: null,
            notification: null,
            user: null
        };
        return Object.keys(rightAttrs);
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: HNav,
        oldValue: string | undefined,
        newValue: string | undefined
    ) {
        this[propName] = newValue;
        this.render();
    }

    render() {

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/src/components/Header/navHeader/navHeader.css">`;
        }

        let el = this.ownerDocument.createElement("section")
        this.shadowRoot?.appendChild(el);

        el = this.ownerDocument.createElement("p")
        this.shadowRoot?.appendChild(el);

        el = this.ownerDocument.createElement("div")
        el.setAttribute("class", "header")
        this.shadowRoot?.appendChild(el);

        el = this.ownerDocument.createElement("div")
        el.setAttribute("class", "navLeft")
        let childEl = this.ownerDocument.createElement("img")
        childEl.setAttribute("src", this.logo??"")
        childEl.setAttribute("height", "60np")
        childEl.setAttribute("alt", " ")
        el.appendChild(childEl)
        let anchorEl = this.ownerDocument.createElement("a")
        anchorEl.setAttribute("href", "")
        anchorEl.textContent = "Movies"
        el.appendChild(anchorEl)
        anchorEl = this.ownerDocument.createElement("a")
        anchorEl.setAttribute("href", "")
        anchorEl.textContent = "Series"
        el.appendChild(anchorEl)
        this.shadowRoot?.appendChild(el);

        el = this.ownerDocument.createElement("div")
        el.setAttribute("class", "navRight")
        childEl = this.ownerDocument.createElement("img")
        childEl.setAttribute("src", this.search??"")
        childEl.setAttribute("height", "30np")
        childEl.setAttribute("alt", " ")
        el.appendChild(childEl)
        childEl = this.ownerDocument.createElement("img")
        childEl.setAttribute("src", this.notification??"")
        childEl.setAttribute("height", "30np")
        childEl.setAttribute("alt", " ")
        el.appendChild(childEl)
        childEl = this.ownerDocument.createElement("img")
        childEl.setAttribute("src", this.user??"")
        childEl.setAttribute("height", "30np")
        childEl.setAttribute("alt", " ")
        el.appendChild(childEl)
        this.shadowRoot?.appendChild(el);
        el = this.ownerDocument.createElement("p")
        this.shadowRoot?.appendChild(el)

        // if (this.shadowRoot) {
        //     this.shadowRoot.innerHTML = `
        //
        //     <section>
        //       <p> </p>
        //       <div class="header">
        //       <div class="navLeft">
        //           <img src="${this.logo}" height = "60np" alt=" "></img>
        //           <a href="">Movies</a>
        //           <a href="">Series</a>
        //       </div>
        //       <div class="navRight">
        //           <img src="${this.search}" height = "30np" alt=" "></img>
        //           <img src="${this.notification}" height = "30np" alt=" "></img>
        //           <img id="userBtn" src="${this.user}" height = "30np" alt=" "></img>
        //       </div>
        //       </div>
        //       <p> </p>
        //     </section>
        //     `;
        // }
    }
}

customElements.define("my-hnav", HeaderNav);
  