import React from "react"

const CartContext = React.createContext({
    items: [],
    totalQuantity: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    // fixPrice: (str, val) => {}
})

export default CartContext