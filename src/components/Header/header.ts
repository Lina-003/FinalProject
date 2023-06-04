import { HNav } from "./navHeader/navHeader";

export enum Attribute2 {
  "search" = "search",
  "notification" = "notification",
  "user" = "user",
  "logo" = "logo",
  "movies" = "movies",
  "series" = "series"
}

export default class Header extends HTMLElement {
  //Se especifica de dónde es
  search?: string = Attribute2.search;
  notification?: string = Attribute2.notification;
  user?: string = Attribute2.user;
  logo?: string = Attribute2.logo;
  movies?: string = Attribute2.movies;
  series?: string = Attribute2.series;

  static get observedAttributes() {
    const attrs: Record<Attribute2, null> = {
      search: null,
      notification: null,
      user: null,
      logo: null,
      movies: null,
      series: null,
    };
    return Object.keys(attrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: Attribute2,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Header/header.css">`;
//Si está aquí, también debe ir en el Dashboard
        const headerSection = this.ownerDocument.createElement("header");
            const navSection = this.ownerDocument.createElement("my-hnav");
            navSection.setAttribute(HNav.logo, this.logo??"../src/components/logo/KINO.png");
            navSection.setAttribute(HNav.movies, this.movies??"");
            navSection.setAttribute(HNav.series, this.series??"");
            navSection.setAttribute(HNav.search, this.search??"../src/components/imageHeader/search.png");
            navSection.setAttribute(HNav.notification, this.notification??"../src/components/imageHeader/noti.png");
            navSection.setAttribute(HNav.user, this.user??"../src/components/imageHeader/user.png");

            headerSection.appendChild(navSection);
        
        this.shadowRoot?.appendChild(headerSection);
    }
  }
}

customElements.define("my-header", Header);
