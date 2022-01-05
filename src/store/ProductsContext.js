import React, {} from 'react';
import img1 from "../img/img1-800.jpg";
import img2 from "../img/img2-800.jpg";
import img3 from "../img/img3-800.jpg";
import img4 from "../img/img4-800.jpg";
import img5 from "../img/img5-800.jpg";
import img6 from "../img/img6-800.jpg";

const ProductsContext = React.createContext({
    items: [{
        id: "1",
        img: img1,
        name: "vase",
        price: 15.99,
        description: "This products made with san, with hands",
    },
    {
        id: "2",
        img: img2,
        name: "vase",
        price: 15.99,
        description: "This products made with san, with hands",
    },
    {
        id: "3",
        img: img3,
        name: "vase",
        price: 15.99,
        description: "This products made with san, with hands",
    },
    {
        id: "4",
        img: img4,
        name: "vase",
        price: 15.99,
        description: "This products made with san, with hands",
    },
    {
        id: "5",
        img: img5,
        name: "vase",
        price: 15.99,
        description: "This products made with san, with hands",
    },
    {
        id: "6",
        img: img6,
        name: "vase",
        price: 15.99,
        description: "This products made with sand, and hands",
    }]
})

export const ProductsProvider = (props) => {
    return (
        <ProductsContext.Provider value={ProductsContext}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;