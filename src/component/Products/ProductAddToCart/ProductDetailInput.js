import ProductsForm from "../ProductsForm";
import classes from "./ProductDetail.module.css"
import styles from "./ProductDetail.module.css";

const ProductDetailInput = (props) => {
    // const cartCtx = useContext(CartContext)
    // const price = `${cartCtx.fixPrice(props.price, 2)}`
    const fixPriceHandler = (str, val) => {
        str = str.toString();
        str = str.slice(0, (str.indexOf(".")) + val + 1);
        return Number(str);
    }
    const price = `${fixPriceHandler(props.price, 2)}`

    return (
        <li className={styles.productDetail}>
            <div className={styles["productDetail__imgBox"]}>
                <img src={props.img} alt="Pic of Products"
                     className={styles["productDetail__img"]}/>
            </div>
            <div className={classes['productDetail__content']}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p><span>&euro;</span>{price}</p>
                <ProductsForm onAddToCart={props.onAddToCart} id={props.id}/>
            </div>
        </li>
    )
}

export default ProductDetailInput;