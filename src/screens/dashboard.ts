import '../components/index'
import { Attribute2 } from '../components/Header/header'
import { Attribute } from '../components/home/home';

export default class Dashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        const dashboardScreen = this.ownerDocument.createElement("div");
            dashboardScreen.setAttribute("class", "dashboard-screen")
            const header = this.ownerDocument.createElement("my-header");
                header.setAttribute(Attribute2.logo, "../src/components/logo/KINO.png")
                header.setAttribute(Attribute2.movies, "")
                header.setAttribute(Attribute2.series, "")
                header.setAttribute(Attribute2.search, "../src/components/imageHeader/search.png")
                header.setAttribute(Attribute2.notification, "../src/components/imageHeader/noti.png")
                header.setAttribute(Attribute2.user, "../src/components/imageHeader/user.png")
            dashboardScreen?.appendChild(header);

            const home = this.ownerDocument.createElement("my-home");
                home.setAttribute(Attribute.alice, "../src/components/imageMovies/alice.png");
                home.setAttribute(Attribute.amormina, "../src/components/imageMovies/amormina.png");
                home.setAttribute(Attribute.camino, "../src/components/imageMovies/camino.png");
                home.setAttribute(Attribute.christmas, "../src/components/imageMovies/christmas.png");
                home.setAttribute(Attribute.glass, "../src/components/imageMovies/glass.png");
                home.setAttribute(Attribute.bannerH, "../src/components/imageMovies/Group6.png");
                home.setAttribute(Attribute.hillhouse, "../src/components/imageMovies/hillhouse.png");
                home.setAttribute(Attribute.stranger, "../src/components/imageMovies/image11.png");
                home.setAttribute(Attribute.lie, "../src/components/imageMovies/image12.png");
                home.setAttribute(Attribute.love, "../src/components/imageMovies/image13.png");
                home.setAttribute(Attribute.ofmd, "../src/components/imageMovies/image14.png");
                home.setAttribute(Attribute.iradedios, "../src/components/imageMovies/iradedios.png");
                home.setAttribute(Attribute.jojo, "../src/components/imageMovies/Jojo.png");
                home.setAttribute(Attribute.rain, "../src/components/imageMovies/rain.png");
                home.setAttribute(Attribute.sandman, "../src/components/imageMovies/sandman.png");
                home.setAttribute(Attribute.spenser, "../src/components/imageMovies/spenser.png");
                home.setAttribute(Attribute.stand, "../src/components/imageMovies/stand.png");
            dashboardScreen?.appendChild(home);
        this.shadowRoot?.appendChild(dashboardScreen);    
    }
}
customElements.define("my-dashboard", Dashboard);