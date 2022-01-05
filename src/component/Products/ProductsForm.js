import {useRef, useState} from "react"
import Button from "../UI/Button";

const ProductsForm = (props) => {
    const [validQuantity, setValidQuantity] = useState(true)
    const quantityInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const enteredQuantity = quantityInputRef.current.value
        const enteredQuantityNumber = +enteredQuantity

        if (enteredQuantity.trim().length === 0 || enteredQuantityNumber < 1 || enteredQuantityNumber > 5) {
            setValidQuantity(false)
            return
        }

        props.onAddToCart(enteredQuantityNumber)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="quantity">Quantity</label>
            <input
                ref={quantityInputRef}
                id={props.id}
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
            />
            <Button type='submit'>Add to Cart</Button>
            {!validQuantity && <p>Please enter a valid quantity(1-5)</p>}
        </form>
    )
}

export default ProductsForm;