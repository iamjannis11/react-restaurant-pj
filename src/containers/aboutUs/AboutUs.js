import "./aboutUs.css"
import {images} from "../../constants"

const AboutUs = () => {
    return (
        <div className="aboutUs-container section--padding flex--center app--bg" id="aboutUs">
            <div className="aboutUs-G flex--center">
                <img src={images.G} alt="bg-G"/>
            </div>  
         
        <div className="aboutUs-content flex--center">
            <div className="about-Ltext">
                <h2>About Us</h2>
                    <img src={images.spoon}  alt="spoonImg" className="spoon-svg"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button className="btn">Learn More</button>
            </div>
                
            <div className="knife-middle">
               <img src={images.knife} alt="knifeImg"/>
            </div>
            <div className="history-Rtext">
                <h2>Our History</h2>
                    <img src={images.spoon}  alt="spoonImg" className="spoon-svg"/>
                <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                <button className="btn">Learn More</button>
            </div>
        </div>
    </div> );
}
 
export default AboutUs;