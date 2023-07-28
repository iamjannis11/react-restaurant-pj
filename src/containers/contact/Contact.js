import SpoonHead from "../../components/spoonHead/SpoonHead";
import "./contact.css"
import {BsTwitter, BsFacebook, BsInstagram} from "react-icons/bs"

const Contact = () => {
    return (
        <div className="contact-container section--padding app--bg" id="contact">
            <div className="newsletter-container flex--center">
                <div className="newsletter-info">
                    <SpoonHead title="Newsletter" />
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>And never miss latest Updates!</p>
                </div>
                <div className="newsletter-input">
                    <input type="text" placeholder="Enter Your Email...."/>
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="footer-container section--padding">
                <div className="footer-content">
                    <div className="L-content">
                        <h4>Contact Us</h4>
                        <p>9 W 53rd St, New York, NY 10019, USA</p>
                        <p>+1 212-344-1230</p>
                        <p>+1 212-555-1230</p>
                    </div>
                    <div className="M-content">
                        <span>RyClone</span>
                        <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
                        <div className="M-content-icons">
                            <BsTwitter className="bs"/>
                            <BsFacebook className="bs"/>
                            <BsInstagram className="bs"/>
                        </div>
                    </div>
                    <div className="R-content">
                        <h4>Working Hours</h4>
                        <p>Monday-Friday:</p>
                        <p>08:00 am -12:00 am</p>
                        <p>Saturday-Sunday:</p>
                        <p>07:00am -11:00 pm</p>
                    </div>
                </div>
                <div className="footer-footer">
                    <p>2023 Jannis. All Rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;