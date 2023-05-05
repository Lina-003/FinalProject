export enum Attribute2 {
  "search" = "search",
  "notification" = "notification",
  "user" = "user",
  "logo" = "logo",
  "movies" = "movies",
  "series" = "series",
}

export default class Header extends HTMLElement {
  search?: string;
  notification?: string;
  user?: string;
  logo?: string;
  movies?: string;
  series?: string;

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
            <link rel="stylesheet" href="./components/Header/header.css">
            <section>         
                <p> </p>
                <div class="header">
                <div class="navLeft">
                <img src="./components/logo/KINO.png" height = "60np" alt=" "></img>
                <a href="">Movies</a>
                <a href="">Series</a>
                </div>
                <div class="navRight">
                <img src="./components/imageHeader/search.png" height = "30np" alt=" "></img>
                <img src="./components/imageHeader/noti.png" height = "30np" alt=" "></img>
                <img src="./components/imageHeader/user.png" height = "30np" alt=" "></img>
                </div>
                </div>
                <p> </p>
            </section>
            `;
    }
  }
}

customElements.define("my-header", Header);
