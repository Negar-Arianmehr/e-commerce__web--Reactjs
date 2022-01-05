// import {useContext} from "react"
import {Link} from "react-router-dom";
// import CartContext from "../../store/cartContext";

const ProductsItem = (props) => {
    // const cartCtx = useContext(CartContext)
    // const price = `${cartCtx.fixPrice(props.price,2)}`
    const fixPriceHandler = (str, val) => {
        str = str.toString();
        str = str.slice(0, (str.indexOf(".")) + val + 1);
        return Number(str);
    }
    const price = `${fixPriceHandler(props.price, 2)}`

    return (
        <li className={props.className}>
            <Link to={`/Products/${props.id}`}>
                <div>
                    <img src={props.img} alt="Pic of Products"/>
                </div>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p><span>&euro;</span>{price}</p>
                </div>
            </Link>
        </li>
    )
}

export default ProductsItem;