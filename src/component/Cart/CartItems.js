// import {useContext} from "react"
// import CartContext from "../../store/cartContext";

import classes from "./CartItem.Module.css"

const CartModal = props => {
    // const cartCtx = useContext(CartContext)

    // const price = `€${cartCtx.fixPrice(props.price, 2)}`

    return (
        <li key={props.id} className={classes["cart-item"]}>
            <div><img src={props.src} alt=""/></div>
            
            <div>
                <h2>{props.name}</h2>
            </div>
            <div className={classes.summary}>
                <span className={classes.price}>{props.price}</span>
                <span className={classes.amount}>x {props.quantity}</span>
            </div>
            <div>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}


export default CartModal;