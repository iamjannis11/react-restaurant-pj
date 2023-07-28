import "./chef.css"
import { images } from "../../constants"
import SpoonHead from "../../components/spoonHead/SpoonHead";

const Chef = () => {
    return ( 
        <div className="chef-container section--padding">
            <div className="chef-img flex--center">
                <img src={images.chef} alt="chefImg"/>
            </div>

            <div className="chef-info">
                <SpoonHead title="Chef's Word"/>
                <h2>What we believe in</h2>
                <div className="chef-quote">
                    <img src={images.quote} alt="quote" />
                    <p>Lorem auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                </div>
                <div className="chef-name">
                    <h4>Kevin Lu</h4>
                    <p>Chef & Founder</p>
                    <img src={images.sign} alt="sign"/>
                </div>
            </div>
        </div>
     );
}
 
export default Chef;