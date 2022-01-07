import React, {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"

import CartIButton from "./CartIButton";
import CartModal from "./CartModal";
import CartContext from "../../store/cartContext";

const Cart = () => {
    const navigate = useNavigate()
    // const [orderOpen, setOrderOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const {items} = useContext(CartContext)

    const quantityOfItems = items.reduce((curNumber, item) => {
        return curNumber + item.quantity
    }, 0)

    const cartHandler = () => {
        setShowModal(true)
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }

    const orderHandler = () => {
        navigate('./Order')
    }

    return (
        <>
            <CartIButton
                onClick={cartHandler}
                quantityOfItems={quantityOfItems}
            />
            {showModal &&
            <CartModal
                onClick={orderHandler}
                onClose={closeModalHandler}
            />}
        </>
    )
}

export default Cart;