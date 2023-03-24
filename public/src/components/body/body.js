class MyBody extends HTMLElement {

    static get observedAttributes() {
        return [
            'alice',
            'amormina',
            'camino',
            'christmas',
            'glass',
            'bannerH',
            'hillhouse',
            'stranger',
            'lie',
            'love',
            'ofmd',
            'iradedios',
            'jojo',
            'rain',
            'sandman',
            'spenser',
            'stand'
        ];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.alice = './src/components/imageMovies/alice.png';
        this.amormina = './src/components/imageMovies/amormina.png';
        this.camino = './src/components/imageMovies/camino.png';
        this.christmas = './src/components/imageMovies/christmas.png';
        this.glass = './src/components/imageMovies/glass.png';
        this.bannerH = './src/components/imageMovies/Group6.png';
        this.hillhouse = './src/components/imageMovies/hillhouse.png';
        this.stranger = './src/components/imageMovies/image11.png';
        this.lie = './src/components/imageMovies/image12.png';
        this.love = './src/components/imageMovies/image13.png';
        this.ofmd = './src/components/imageMovies/image14.png';
        this.iradedios = './src/components/imageMovies/iradedios.png';
        this.jojo = './src/components/imageMovies/Jojo.png';
        this.rain = './src/components/imageMovies/rain.png';
        this.sandman = './src/components/imageMovies/sandman.png';
        this.spenser = './src/components/imageMovies/spenser.png';
        this.stand = './src/components/imageMovies/stand.png';
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/body/body.css"
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

customElements.define('my-body', MyBody);
export default MyBody;