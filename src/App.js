import Navbar from "./components/navbar/Navbar"
import Hero from "./containers/hero/Hero"
import AboutUs from "./containers/aboutUs/AboutUs"
import Menu from "./containers/menu/Menu"
import Chef from "./containers/chef/Chef"
import InfoVd from "./containers/infoVd/InfoVd"
import Gallery from "./containers/gallery/Gallery"
import Contact from "./containers/contact/Contact"

import "./App.css";


const App = () => {
    return (<div>
        <Navbar />
        <Hero />
        <AboutUs />
        <Menu />
        <Chef />
        <Gallery/>
        <InfoVd />
        <Contact/>
    </div>);
}
 
export default App;