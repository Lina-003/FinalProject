export enum Attribute {
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

class AppContainer extends HTMLElement {
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
    const attrs: Record<Attribute, null> = {
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
    this.attachShadow({ mode: "open" });
    this.b_alice = "./dist/components/imageMS/alice-banner.png";
    this.back = "./dist/components/imageHeader/arrow.png";
    this.search = "./dist/components/imageHeader/search.png";
    this.log_perfil = "./dist/components/imageMS/perfil.png";
    this.add = "./dist/components/imageMS/button-add.png";
    this.play = "./dist/components/imageMS/play.png";
    //Characters
    this.c_ann = "./dist/components/imageCharacters/alice/Ann.png";
    this.c_ari = "./dist/components/imageCharacters/alice/Arisu.png";
    this.c_hika = "./dist/components/imageCharacters/alice/Hikari.png";
    this.c_shun = "./dist/components/imageCharacters/alice/Shuntaro.png";
    this.c_sugu = "./dist/components/imageCharacters/alice/Suguru.png";
    //Moments
    this.moment_1 = "./dist/components/imageMS/aliceMoments/moment_1png";
    this.moment_2 = "./dist/components/imageMS/aliceMoments/moment_2png";
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
                <img src=${this.c_ann} height = "300np" alt=" "></img>
                <img src=${this.c_ari} height = "300np" alt=" "></img>
                <img src=${this.c_hika} height = "300np" alt=" "></img>
                <img src=${this.c_shun} height = "300np" alt=" "></img>
                <img src=${this.c_sugu} height = "300np" alt=" "></img>
                </div>
            </div>

            <div id="moments-container">
                <div class = "moments">
                <img src=${this.moment_1} height = "300np" alt=" "></img>
                <img src=${this.moment_2} height = "300np" alt=" "></img>
                </div>
            </div>
        </section>
        `;
  }
}

customElements.define("app-container", AppContainer);
