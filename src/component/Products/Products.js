import {useState, useContext} from "react"
import AnimatedPages from "../AnimatedPages/AnimatedPages";
import ProductsList from "./ProductsList";
import CartContext from "../../store/cartContext";

const Products = () => {
    const cartCtx = useContext(CartContext)
    const defaultItems = cartCtx.defaultItems

    const [AllProducts, setAddNewProduct] = useState(defaultItems)

    const addNewProductHandler = (products) => {
        setAddNewProduct(previous => {
            return [
                products,
                ...previous
            ]
        })

    }

    return (
        <>
            <AnimatedPages>
                <section>
                    <div>
                        <h1>The Productions</h1>
                    </div>
                    <ProductsList items={AllProducts}/>
                </section>
            </AnimatedPages>
        </>
    );
}

export default Products;