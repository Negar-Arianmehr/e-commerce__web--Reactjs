import {useState, useContext} from "react"
// import {Outlet} from "react-router-dom";

import AnimatedPages from "../AnimatedPages/AnimatedPages";
import ProductsList from "./ProductsList";
import CartContext from "../../store/cartContext";

//show the number wth comma or point
//const formatCurrency = function (value, locale, currency) {
// return new Intl.NumberFormat(locale, {
//    style: "currency",
// currency: currency,
//}).format(value)
//}
// const Dummy_ProductsItems = [

const Products = () => {
    const cartCtx = useContext(CartContext)
    const defaultItems = cartCtx.defaultItems

    const [AllProducts, setAddNewProduct] = useState(defaultItems)

    const addNewProductHandler = (products) => {
        // console.log(products)
        setAddNewProduct(previous => {
            return [
                products,
                ...previous
            ]
        })

    }

    return (
        <>
            {/*<Manager onAddNewProduct={addNewProductHandler} />*/}
            <AnimatedPages>
                <section>
                    <div>
                        <h1>The Productions</h1>
                    </div>
                    <ProductsList items={AllProducts}/>
                </section>
            </AnimatedPages>
            {/*<Outlet />*/}
        </>
    );
}

export default Products;