import CartItems from "./CartItems";
import {useContext} from "react";
import CartContext from "../../store/cartContext";
import Card from "../UI/Card";
import classes from "../UI/Modal.module.css";
import style from "./CartItem.Module.css"
import Button from "../UI/Button";


const CartList = (props) => {
    const cartCtx = useContext(CartContext)

    const fixPriceHandler = (str, val) => {
        str = str.toString();
        str = str.slice(0, (str.indexOf(".")) + val + 1);
        return Number(str);
    }

    const totalPrice = cartCtx.totalQuantity
    const totalPriceFix = `${fixPriceHandler(totalPrice, 2)}`

    const hasItem = cartCtx.items.length > 0

    const itemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const itemAddHandler = item => {
        cartCtx.addItem({...item, quantity: 1 })

    }

    return (
        <Card>
            <ul className={style["cart-items"]}>
                {cartCtx.items.map(item => (
                    <CartItems
                        key={item.id = Math.round(Math.random())}
                        id={item.id}
                        src={item.img}
                        name={item.name}
                        quantity={item.quantity}
                        // price={cartCtx.fixPrice(item.price, 2)}
                        price={item.price}
                        onRemove={itemRemoveHandler.bind(null, item.id)}
                        onAdd={itemAddHandler.bind(null, item)}
                    />
                ))}
            </ul>
            <div>
                <span>Total Price</span>
                <span>{totalPriceFix}€</span>
            </div>
            <div className={classes.action}>
                <Button onClick={props.onClose}>Cancel</Button>
                {hasItem && <Button onClick={props.onClick}>Order</Button>}
            </div>
        </Card>
    )
}

export default CartList;