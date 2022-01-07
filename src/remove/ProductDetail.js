import {useContext} from "react"
import {useParams} from "react-router-dom";

import ProductsForm from "../component/Products/ProductsForm";
import CartContext from "../store/cartContext";
import ProductsItem from "../component/Products/ProductsItem";
import classes from "../component/Products/Products.module.css"
import styles from "../component/Products/ProductAddToCart/ProductDetail.module.css"

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

    const styleItem = `${classes.products__box} ${classes.listInDetails}`

    return <section>
        <div>
            <h1>ProductDetails</h1>
        </div>
        <div>
            {findId && cartCtx.defaultItems.filter(item => item.id === params.ProductId).map(item=> (
                <ProductsItem
                    className={styles.productDetail}
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
                    className={styleItem}
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