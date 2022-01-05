import {useState} from "react"

const ManagerForm = (props) => {
    const [enteredName, setEnteredName] = useState("")
    const [enteredPrice, setEnteredPrice] = useState("")

    const [validForm, setValidForm] = useState(true)

    const nameHandler = (event) => {
       setEnteredName(event.target.value)
        setValidForm(true)
    }

    const priceHandler = (event) => {
        setEnteredPrice(event.target.value)
        setValidForm(true)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const enteredProduct = {
            name: enteredName,
            price: enteredPrice
        }

        if (enteredName.trim().length === 0 && enteredPrice.trim().length === 0) {
            setValidForm(false)
            return
        }

        props.onSaveNewProduct(enteredProduct)
        setEnteredName("")
        setEnteredPrice("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={!validForm && "invalid"}>
                {validForm && <h1>enter new item</h1>}
                {!validForm && <h1>Something wrong!</h1>}
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" from="name" value={enteredName} onChange={nameHandler}/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" from="price" value={enteredPrice} onChange={priceHandler}/>
            </div>
            <div>
                <label htmlFor="img">img</label>
                <input type="image" alt="Image of Products" from="img" min="2022-01-01" />
            </div>
            <div>
                <label htmlFor="description">description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button type='submit'>Add to Web</button>
            </div>
        </form>
    )
}

export default ManagerForm;