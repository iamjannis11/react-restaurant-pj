import React from "react"
import "./infoVd.css"
import { meal } from "../../constants"
import {PiPlayCircleFill} from "react-icons/pi"
import {TbPlayerPauseFilled} from "react-icons/tb"

const InfoVd = () => {
    const [playVid, setPlayVid] = React.useState(false)
    const vidRef = React.useRef();

    return (
        <div className="app-vid">
            <video
                ref={vidRef}
                src={meal}
                type="video/mp4"
                loop
                controls={false}
                muted
            />
            <div className="vid-icons flex--center"
                onClick={() => {
                    setPlayVid(!playVid);
                    if (playVid) {
                        vidRef.current.pause();
                    } else {
                        vidRef.current.play();
                    }
                }}>
                { playVid  
                    ? <PiPlayCircleFill fontSize="4rem"/>
                    : <TbPlayerPauseFilled fontSize="4rem"/>
                    }
            </div>
        </div>
    );
}
 
export default InfoVd;