export enum Attribute {
    "search" = "search",
    "notification" = "notification",
    "user" = "user",
    "logo" = "logo",
    "movies" = "movies",
    "series" = "series"
}

class Header extends HTMLElement {
    search?: string;
    notification?: string;
    user?: string;
    logo?: string;
    movies?: string;
    series?: string


    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            search: null,
            notification: null,
            user: null,
            logo: null,
            movies: null,
            series: null
    
        }
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.search = './dist/src/components/imageHeader/search.png';
        this.notification = './dist/src/components/imageHeader/noti.png';
        this.user = './dist/src/components/imageHeader/user.png';
        this.logo = './dist/src/components/logo/KINO.png';

    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
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