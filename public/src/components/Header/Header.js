class MyHeader extends HTMLElement {

    static get observedAttributes() {
        return [
            'search',
            'notification',
            'user',
            'logo',
            'movies',
            'series'
        ];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.search = './src/components/imageHeader/search.png';
        this.notification = './src/components/imageHeader/noti.png';
        this.user = './src/components/imageHeader/user.png';
        this.logo = './src/components/logo/KINO.png';

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
            <link rel="stylesheet" href="./src/components/Header/header.css"
            <section>         
                <p> </p>
                <div class="header">
                <div class="navLeft">
                <img src=${this.logo} height = "60np" alt=" "></img>
                <a href="">Movies</a>
                <a href="">Series</a>
                </div>
                <div class="navRight">
                <img src=${this.search} height = "30np" alt=" "></img>
                <img src=${this.notification} height = "30np" alt=" "></img>
                <img src=${this.user} height = "30np" alt=" "></img>
                </div>
                </div>
                <p> </p>
            </section>
            `;
    }
}

customElements.define('my-header', MyHeader);
export default MyHeader;