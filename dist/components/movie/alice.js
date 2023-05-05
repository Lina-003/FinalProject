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
        this.b_alice = "../imageMS/alice-banner.png";
        this.back = "../imageHeader/arrow.png";
        this.search = "../imageHeader/search.png";
        this.log_perfil = "../imageMS/perfil.png";
        this.add = "../imageMS/button-add.png";
        this.play = "../imageMS/play.png";
        //Characters
        this.c_ann = "../imageCharacters/alice/Ann.png";
        this.c_ari = "../imageCharacters/alice/Arisu.png";
        this.c_hika = "../imageCharacters/alice/Hikari.png";
        this.c_shun = "../imageCharacters/alice/Shuntaro.png";
        this.c_sugu = "../imageCharacters/alice/Suguru.png";
        //Moments
        this.moment_1 = "../imageMS/aliceMoments/moment_1png";
        this.moment_2 = "../imageMS/aliceMoments/moment_2png";
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
        <link rel="stylesheet" href="./styles.css"
        <my-header></my-header>
        <section>         
            <div class = "banner-alice">
            <img src=${this.b_alice} height = "480np" alt=" "></img>
            <div class="navLeft">
                <img src=${this.back} height = "60np" alt=" "></img>
                </div>
            <div class="navRight">
                <img src=${this.search} height = "30np" alt=" "></img>
                <img src=${this.log_perfil} height = "30np" alt=" "></img>
                </div>
            </div>

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
