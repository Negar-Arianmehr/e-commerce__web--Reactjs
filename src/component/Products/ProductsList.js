import ProductsItem from "./ProductsItem";
import classes from "./Products.module.css";


//show the number wth comma or point
//const formatCurrency = function (value, locale, currency) {
// return new Intl.NumberFormat(locale, {
//    style: "currency",
// currency: currency,
//}).format(value)
//}

const ProductsList = (props) => {
    const styles = `${classes.products__box} ${classes["products__box--width"]}`

    return (
        <div className={classes.products}>
            <ul className="flex">
                {props.items.map(item =>
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
        </div>
    );
}

export default ProductsList;