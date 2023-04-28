export var Attribute;
(function (Attribute) {
    Attribute["alice"] = "alice";
    Attribute["amormina"] = "amormina";
    Attribute["camino"] = "camino";
    Attribute["christmas"] = "christmas";
    Attribute["glass"] = "glass";
    Attribute["bannerH"] = "bannerH";
    Attribute["hillhouse"] = "hillhouse";
    Attribute["stranger"] = "stranger";
    Attribute["lie"] = "lie";
    Attribute["love"] = "love";
    Attribute["ofmd"] = "ofmd";
    Attribute["iradedios"] = "iradedios";
    Attribute["jojo"] = "jojo";
    Attribute["rain"] = "rain";
    Attribute["sandman"] = "sandman";
    Attribute["spenser"] = "spenser";
    Attribute["stand"] = "stand";
})(Attribute || (Attribute = {}));
class AppContainer extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            alice: null,
            amormina: null,
            camino: null,
            christmas: null,
            glass: null,
            bannerH: null,
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
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.alice = './dist/components/imageMovies/alice.png';
        this.amormina = './components/imageMovies/amormina.png';
        this.camino = './components/imageMovies/camino.png';
        this.christmas = './components/imageMovies/christmas.png';
        this.glass = './components/imageMovies/glass.png';
        this.bannerH = './components/imageMovies/Group6.png';
        this.hillhouse = './components/imageMovies/hillhouse.png';
        this.stranger = './components/imageMovies/image11.png';
        this.lie = './components/imageMovies/image12.png';
        this.love = './components/imageMovies/image13.png';
        this.ofmd = './components/imageMovies/image14.png';
        this.iradedios = './components/imageMovies/iradedios.png';
        this.jojo = './components/imageMovies/Jojo.png';
        this.rain = './components/imageMovies/rain.png';
        this.sandman = './components/imageMovies/sandman.png';
        this.spenser = './components/imageMovies/spenser.png';
        this.stand = './components/imageMovies/stand.png';
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
            <div class = "banner">
            <img src=${this.bannerH} height = "480" alt=" "></img>
            </div>

            <input>
                sort by
            </input>

            <div id="movies-container">
                <div class = "movies">
                <img src=${this.alice} height = "300np" alt=" "></img>
                <img src=${this.amormina} height = "300np" alt=" "></img>
                <img src=${this.camino} height = "300np" alt=" "></img>
                <img src=${this.glass} height = "300np" alt=" "></img>
                <img src=${this.hillhouse} height = "300np" alt=" "></img>
                <img src=${this.stranger} height = "300np" alt=" "></img>
                <img src=${this.lie} height = "300np" alt=" "></img>
                <img src=${this.love} height = "300np" alt=" "></img>
                <img src=${this.ofmd} height = "300np" alt=" "></img>
                <img src=${this.iradedios} height = "300np" alt=" "></img>
                <img src=${this.jojo} height = "300np" alt=" "></img>
                <img src=${this.rain} height = "300np" alt=" "></img>
                <img src=${this.sandman} height = "300np" alt=" "></img>
                <img src=${this.spenser} height = "300np" alt=" "></img>
                <img src=${this.stand} height = "300np" alt=" "></img>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('app-container', AppContainer);
