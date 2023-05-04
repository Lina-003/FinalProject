export enum Attribute {
  "b_alice" = "b_alice",
  "back" = "back",
  "search" = "search",
  "log_perfil" = "log_perfil",
  "add" = "add",
  "play" = "play",
}

class AppContainer extends HTMLElement {
  b_alice?: string;
  back?: string;
  search?: string;
  log_perfil?: string;
  add?: string;
  play?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      b_alice: null,
      back: null,
      search: null,
      log_perfil: null,
      add: null,
      play: null,
    };
    return Object.keys(attrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.b_alice = "./dist/components/imageMS/alice-banner.png";
    this.back = "./dist/components/imageHeader/arrow.png";
    this.search = "./dist/components/imageHeader/search.png";
    this.log_perfil = "./dist/components/imageMS/perfil.png";
    this.add = "./dist/components/imageMS/button-add.png";
    this.play = "./dist/components/imageMS/play.png";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot)
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css"
        <my-header></my-header>
        <section>         
            <div class = "banner-alice">
            <img src=${this.b_alice} height = "480" alt=" "></img>
            <div class="navLeft">
                <img src=${this.back} height = "60np" alt=" "></img>
                </div>
            <div class="navRight">
                <img src=${this.search} height = "30np" alt=" "></img>
                <img src=${this.log_perfil} height = "30np" alt=" "></img>
                </div>
            </div>

            <input>
                sort by
            </input>

            <div id="characters-container">
                <div class = "characters">
                <img src=${this.b_alice} height = "300np" alt=" "></img>
                </div>
            </div>

            <div id="moments-container">
                <div class = "moments">
                <img src=${this.b_alice} height = "300np" alt=" "></img>
                </div>
            </div>
        </section>
        `;
  }
}

customElements.define("app-container", AppContainer);
