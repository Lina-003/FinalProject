import { HomeCom } from "./homeC/homeC";

export enum Attribute {
    "alice" = "alice",
    "amormina" = "amormina",
    "camino" = "camino",
    "christmas" = "christmas",
    "glass" = "glass",
    "banner" = "banner",
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
export default class Home extends HTMLElement {
    //Se especifica de dónde es
    alice?: string;
    amormina?: string;
    camino?: string;
    christmas?: string;
    glass?: string;
    banner?: string;
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
        const attrs: Record<Attribute, null> = {
            alice: null,
            amormina: null,
            camino: null,
            christmas: null,
            glass: null,
            banner: null,
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

    render() {
        if(this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/home/home.css"/>`;
            //Si está aquí, también debe ir en el Dashboard
            const homeSection = this.ownerDocument.createElement("home");
                const homeComplete = this.ownerDocument.createElement("app-home");
                homeComplete.setAttribute(HomeCom.alice, this.alice??"../src/components/imageMovies/alice.png");
                homeComplete.setAttribute(HomeCom.amormina, this.amormina??"../src/components/imageMovies/amormina.png");
                homeComplete.setAttribute(HomeCom.camino, this.camino??"../src/components/imageMovies/camino.png");
                homeComplete.setAttribute(HomeCom.christmas, this.christmas??"../src/components/imageMovies/christmas.png");
                homeComplete.setAttribute(HomeCom.glass, this.glass??"../src/components/imageMovies/glass.png");
                homeComplete.setAttribute(HomeCom.banner, this.banner??"../src/components/imageMovies/group6.png");
                homeComplete.setAttribute(HomeCom.hillhouse, this.hillhouse??"../src/components/imageMovies/hillhouse.png");
                homeComplete.setAttribute(HomeCom.stranger, this.stranger??"../src/components/imageMovies/image11.png");
                homeComplete.setAttribute(HomeCom.lie, this.lie??"../src/components/imageMovies/image12.png");
                homeComplete.setAttribute(HomeCom.love, this.love??"../src/components/imageMovies/image13.png");
                homeComplete.setAttribute(HomeCom.ofmd, this.ofmd??"../src/components/imageMovies/image14.png");
                homeComplete.setAttribute(HomeCom.iradedios, this.iradedios??"../src/components/imageMovies/iradedios.png");
                homeComplete.setAttribute(HomeCom.jojo, this.jojo??"../src/components/imageMovies/Jojo.png");
                homeComplete.setAttribute(HomeCom.rain, this.rain??"../src/components/imageMovies/rain.png");
                homeComplete.setAttribute(HomeCom.sandman, this.sandman??"../src/components/imageMovies/sandman.png");
                homeComplete.setAttribute(HomeCom.spenser, this.spenser??"../src/components/imageMovies/spenser.png");
                homeComplete.setAttribute(HomeCom.stand, this.stand??"../src/components/imageMovies/stand.png");

                homeSection.appendChild(homeComplete);
            
            this.shadowRoot?.appendChild(homeSection);

        }
    }
}

customElements.define('my-home', Home);
