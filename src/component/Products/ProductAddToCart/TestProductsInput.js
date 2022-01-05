// import {useContext} from "react"
// import CartContext from "../../store/cartContext";
import ProductsForm from "../ProductsForm";

const TestProductsInput = (props) => {
    // const cartCtx = useContext(CartContext)
    // const price = `${cartCtx.fixPrice(props.price, 2)}`
    const fixPriceHandler = (str, val) => {
        str = str.toString();
        str = str.slice(0, (str.indexOf(".")) + val + 1);
        return Number(str);
    }
    const price = `${fixPriceHandler(props.price, 2)}`
    console.log("this item open")

    return (
        <li className={props.className}>
            <div>
                <img src={props.img} alt="Pic of Products"/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p><span>&euro;</span>{price}</p>
            </div>
            <ProductsForm onAddToCart={props.onAddToCart} id={props.id}/>
        </li>
    )
}

export default TestProductsInput;