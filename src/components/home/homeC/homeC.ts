export enum HomeCom {
    "alice" = "alice",
    "amormina" = "amormina",
    "camino" = "camino",
    "christmas" = "christmas",
    "glass" = "glass",
    "bannerH" = "bannerH",
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
    bannerH?: string;
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
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/home/homeC/homeC.css"/>
        <section>         
            <div class = "banner">
            <img src=${this.bannerH} height = "480np" alt=" "></img>
            </div>

            <input>
                sort by
            </input>

            <div id="movies-container">
                <div class = "movies">
                
                <img class="change" src=${this.alice} height = "300np" alt=" "></img>
                
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

customElements.define('app-home', HomeC);