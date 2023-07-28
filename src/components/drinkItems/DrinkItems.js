import "./drinkItems.css"

const DrinkItems = ({title, price, tags}) => {
    return (
        <div className="drink-items">
            <div className="drink-items-head">
                <div className="drink-items-name">{title}</div>
                <div className="drink-items-line"/>
                <div className="drink-items-price">{price}</div>
            </div>
            <div className="drink-items-sub">
                <p>{tags}</p>
            </div>
        </div>
    );
}
 
export default DrinkItems;