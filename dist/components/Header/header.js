export var Attribute;
(function (Attribute) {
    Attribute["search"] = "search";
    Attribute["notification"] = "notification";
    Attribute["user"] = "user";
    Attribute["logo"] = "logo";
    Attribute["movies"] = "movies";
    Attribute["series"] = "series";
})(Attribute || (Attribute = {}));
class Header extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            search: null,
            notification: null,
            user: null,
            logo: null,
            movies: null,
            series: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.search = './dist/src/components/imageHeader/search.png';
        this.notification = './dist/src/components/imageHeader/noti.png';
        this.user = './dist/src/components/imageHeader/user.png';
        this.logo = './dist/src/components/logo/KINO.png';
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
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
}
customElements.define('my-header', Header);
export default Header;
