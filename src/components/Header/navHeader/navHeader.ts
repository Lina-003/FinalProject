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

        const nav = this.ownerDocument.createElement("div")
        nav.setAttribute("class", "nav")

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
        nav.appendChild(el)

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

        nav.appendChild(el)

        this.shadowRoot?.appendChild(nav);
        el = this.ownerDocument.createElement("p")
        this.shadowRoot?.appendChild(el)

        
    }
}

customElements.define("my-hnav", HeaderNav);
  