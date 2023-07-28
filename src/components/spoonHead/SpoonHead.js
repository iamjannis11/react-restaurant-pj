import {images} from "../../constants"

const SpoonHead = ({title}) => {
    return (
        <div>
            <p style={{textTransform: "capitalize", fontSize: "var(--p-font)"}}>{title}</p>
            <img src={images.spoon} alt="spoonImg" className="spoon-svg"/>
        </div>);
}
 
export default SpoonHead;


