import {useReducer} from "react"
import CartContext from "./cartContext";
import img1 from "../img/img1-800.jpg";
import img2 from "../img/img2-800.jpg";
import img3 from "../img/img3-800.jpg";
import img4 from "../img/img4-800.jpg";
import img5 from "../img/img5-800.jpg";
import img6 from "../img/img6-800.jpg";

const defaultCartState = {
    items: [],
    totalQuantity: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalQuantity = state.totalQuantity + action.item.price *
            action.item.quantity

        const existingItemIndex = state.items.findIndex(el => el.id === action.item.id);
        // const findItem = state.items.some(el => el.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity,
            };
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
            // }
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalQuantity: updatedTotalQuantity
        }
    }
    if (action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex(el => el.id === action.id);

        const existingItem = state.items[existingItemIndex];
        const updatedTotalQuantity = state.totalQuantity - existingItem.price
        let updatedItems;

        if (existingItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else {
            const updatedItem = {...existingItem, quantity: existingItem.quantity - 1}
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalQuantity: updatedTotalQuantity
        }
    }

    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item})
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id})
    }

    // const fixPriceHandler = (str, val) => {
    //     str = str.toString();
    //     str = str.slice(0, (str.indexOf(".")) + val + 1);
    //     return Number(str);
    // }

    const cartContext = {
        defaultItems: [
        {
            id: "1",
            img: img1,
            name: "vase",
            price: 15.998,
            description: "This products made with san, with hands",
        },
        {
            id: "2",
            img: img2,
            name: "vase",
            price: 15.99,
            description: "This products made with san, with hands",
        },
        {
            id: "3",
            img: img3,
            name: "vase",
            price: 15.99,
            description: "This products made with san, with hands",
        },
        {
            id: "4",
            img: img4,
            name: "vase",
            price: 15.99,
            description: "This products made with san, with hands",
        },
        {
            id: "5",
            img: img5,
            name: "vase",
            price: 15.99,
            description: "This products made with san, with hands",
        },
        {
            id: "6",
            img: img6,
            name: "vase",
            price: 15.99,
            description: "This products made with sand, and hands",
        }],
        items: cartState.items,
        totalQuantity: cartState.totalQuantity,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        // fixPrice: fixPriceHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;