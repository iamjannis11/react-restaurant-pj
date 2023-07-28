import "./hero.css"
import { images } from "../../constants"
import SpoonHead from "../../components/spoonHead/SpoonHead";

const Hero = () => {
    return (
        <div className="hero-container app--bg section--padding flex--center" id="home">
            <div className="hero-info">
                <SpoonHead title="Chase the new flavor"/>
                <h1>The key to Fine dining</h1>
                <p>Lorem Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                <button className="btn">Explore Menu</button>
            </div>

            <div className="hero-img">
                <img src={images.heroImg} alt="heroImg"/>
            </div>
        </div>
     );
}
 
export default Hero;