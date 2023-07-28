import "./gallery.css"
import React from "react"
import SpoonHead from "../../components/spoonHead/SpoonHead"
import { images } from "../../constants"
import {BiSolidLeftArrow, BiSolidRightArrow} from "react-icons/bi"

const Gallery = () => {
    const scrollRef = React.useRef(null)
    
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

  const galleryImg = [images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6]  
    return (
        <div className="gallery-container app--bg section--padding flex--center" id="gallery">
            <div className="gallery-info flex--center">
                <SpoonHead title="asthetic instagram photos" />
                <h2>Gallery</h2>
            </div>
            <div className="gallery-img">
                <div className="gallery-img-container" ref={scrollRef}>
                    {galleryImg.map((image, index) => (
                        <div className="gallery-img-card" key={`galleryImg-${index + 1}`}><img src={image} alt="galleryImg"/></div>
                    ))}
                </div>

                <div className="gallery-arrow">
                    <BiSolidLeftArrow className="arrow-left"  onClick={() => scroll("left")}/>
                    <BiSolidRightArrow className="arrow-right" onClick={() => scroll("right")}/>
                </div>
            </div>
        </div>
    );
}
 
export default Gallery;