import {useContext} from "react"
import {useParams} from "react-router-dom";

import ProductsForm from "../ProductsForm";
import CartContext from "../../../store/cartContext";
import ProductsItem from "../ProductsItem";
import classes from "../Products.module.css"

const ProductDetail = props => {
    const params = useParams()

    const cartCtx = useContext(CartContext)

    const findId = cartCtx.defaultItems.find(item => item.id === params.ProductId)
    if (!findId) {
        return <h1>No Item found!!! Please Try From our Items :)</h1>
    }

    const addToCartHandler = quantity => {
        console.log({...findId, quantity: quantity})
        cartCtx.addItem({...findId, quantity: quantity})
    }

    const styles = `${classes.products__box} ${classes.listInDetails}`

    return <section>
        <h1>ProductDetails</h1>
        <div className="flex">
            {findId && cartCtx.defaultItems.filter(item => item.id === params.ProductId).map(item=> (
                <ProductsItem
                    className={classes.everyProduct}
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                />))}
        </div>
            <ProductsForm onAddToCart={addToCartHandler} id={params.ProductId}/>


        <ul className="flex">
            {cartCtx.defaultItems.filter(item => item.id !== params.ProductId).map(item =>
                <ProductsItem
                    className={styles}
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                />
            )}
        </ul>

    </section>
}

export default ProductDetail;