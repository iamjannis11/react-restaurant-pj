import "./menu.css"
import SpoonHead from "../../components/spoonHead/SpoonHead"
import {data, images} from "../../constants"
import DrinkItems from "../../components/drinkItems/DrinkItems"

const Menu = () => {
    return (
        <div className="menu-container app--bg section--padding" id="menu">
            <div className="menu-title">
                <SpoonHead title="Menu That Fits Your Palatte"/>
                <h2>Today's Special</h2>
            </div>

            <div className="menu-content">
                <div className="menu-LText">
                    <h3>Wine & Beer</h3>
                    <div className="menu-items">
                        {data.wines.map((wines, index) => (
                            <DrinkItems title={wines.title} price={wines.price} tags={wines.tags} />
                    ))}
                    </div>
                </div>

                <div className="menu-middle">
                    <img src={images.menuImg} alt="menuImg"/>
                </div>

                <div className="menu-RText">
                    <h3>Cocktails</h3>
                    <div className="menu-items">
                        {data.cocktails.map((cocktails, index) => (
                            <DrinkItems title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
                    ))}
                    </div>
                </div>
            </div>

            <div className="menu-btn">
                <button className="btn">View More</button>
            </div>
        </div>
    );
}
 
export default Menu;