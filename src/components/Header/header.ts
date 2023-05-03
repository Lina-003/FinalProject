export enum Attribute {
    "search" = "search",
    "notification" = "notification",
    "user" = "user",
    "logo" = "logo",
    "movies" = "movies",
    "series" = "series"
}

export default class Header extends HTMLElement {
    

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        

    }

    connectedCallback() {
        this.render();
    }

   

    render() {
        if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Header/header.css"
            <section>         
                <p> </p>
                <div class="header">
                <div class="navLeft">
                <img src="./components/logo/KINO.png" height = "60np" alt=" "></img>
                <a href="">Movies</a>
                <a href="">Series</a>
                </div>
                <div class="navRight">
                <img src="./components/imageHeader/search.png" height = "30np" alt=" "></img>
                <img src="./components/imageHeader/noti.png" height = "30np" alt=" "></img>
                <img src="./components/imageHeader/user.png" height = "30np" alt=" "></img>
                </div>
                </div>
                <p> </p>
            </section>
            `;
        }
    }
}

customElements.define('my-header', Header);
