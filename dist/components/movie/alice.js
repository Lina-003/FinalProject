export var Attribute3;
(function (Attribute3) {
    Attribute3["b_alice"] = "b_alice";
    Attribute3["back"] = "back";
    Attribute3["search"] = "search";
    Attribute3["log_perfil"] = "log_perfil";
    Attribute3["add"] = "add";
    Attribute3["play"] = "play";
    Attribute3["c_ann"] = "c_ann";
    Attribute3["c_ari"] = "c_ari";
    Attribute3["c_hika"] = "c_hika";
    Attribute3["c_shun"] = "c_shun";
    Attribute3["c_sugu"] = "c_sugu";
    Attribute3["moment_1"] = "moment_1";
    Attribute3["moment_2"] = "moment_2";
})(Attribute3 || (Attribute3 = {}));
class AppInfo extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
        this.b_alice = "./components/imageMS/alice-banner.png";
        this.back = "./components/imageHeader/arrow.png";
        this.search = "./components/imageHeader/search.png";
        this.log_perfil = "./components/imageMS/perfil.png";
        this.add = "./components/imageMS/button-add.png";
        this.play = "./components/imageMS/play.png";
        //Characters
        this.c_ann = "./components/imageCharacters/alice/Ann.png";
        this.c_ari = "./components/imageCharacters/alice/Arisu.png";
        this.c_hika = "./components/imageCharacters/alice/Hikari.png";
        this.c_shun = "./components/imageCharacters/alice/Shuntaro.png";
        this.c_sugu = "./components/imageCharacters/alice/Suguru.png";
        //Moments
        this.moment_1 = "./components/imageMS/aliceMoments/moment_1.png";
        this.moment_2 = "./components/imageMS/aliceMoments/moment_2.png";
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/movie/alice.css">
        <section class="container">         
          <section class="banner-container">
          <nav>
              <div class="left-nav">
                <img src=${this.back} height = "30np" alt=" "></img>
              </div>

              <div class="right-nav">
                <img src=${this.search} height = "30np" alt=" "></img>
                <img src=${this.log_perfil} height = "30np" alt=" "></img>
              </div>
          </nav>
            
              <div class = "banner-alice">
                <img src=${this.b_alice} height = "480np" alt=" "></img>
              </div>
              <section class="full-container">
                <div class="info-container">
                  <p class="info">In 1717, Captain Bonnet is a member of the landed gentry of Barbados who abandons his comfortable life and family to prove himself as a pirate during the Golden Age of Piracy, despite having no aptitude for the role. Sailing aboard his ship the Revenge, Captain Bonnet and his dysfunctional crew struggle to survive against deadly threats from naval warships and other bloodthirsty pirates. During their misadventures the crew of the Revenge cross paths with notorious pirate captain Edward Teach and his crew, including First Mate Izzy Hands. Bonnet and Teach eventually fall in love.</p>
                  <p class="creator"><span>Created by: </span>David Jenkins</p>
                  <p class="starring"><span>Starring: </span>Rhys Darby, Ewen Bremner, Joel Fry, Samson Kayo</p>
                </div>
                <div class="play">
                <img src=${this.play} height = "70np" alt=" "></img>
                  <img src=${this.add} height = "70np" alt=" "></img>
                  
                </div>


              </section>
            
          </section>

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
customElements.define("app-info", AppInfo);
export default AppInfo;
