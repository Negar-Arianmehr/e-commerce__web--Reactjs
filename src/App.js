import React, {Suspense} from "react"
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Navigation from "./component/Layout/Header/Navigation";
import {AnimatePresence} from "framer-motion";
// import Products from "./component/Products/Products";
import Home from "./component/Home/Home";
import AuthPage from "./component/Auth/AuthPage";
import Order from "./component/Order/Order";
import CartProvider from "./store/CartProvider";
// import ProductsDetails from "./component/Products/ProductAddToCart/ProductsDetails";

const Products = React.lazy(() => import("./component/Products/Products"))
const ProductsDetails = React.lazy(() => import('./component/Products/ProductAddToCart/ProductsDetails'))

function App() {
    //for animation
    const location = useLocation()

    return (
        <div className="App">
            <CartProvider>
                <header className="App-header">
                    <Navigation/>
                </header>
                <main className="main">
                    <AnimatePresence>
                        <Suspense fallback={
                            <div>
                                <h1>Loading</h1>
                            </div>
                        }>
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Navigate to="/Home"/>}/>
                                <Route path="/Auth" element={<AuthPage/>}/>
                                <Route path="/Home/*" element={<Home/>}/>
                                <Route path='/Products' element={<Products/>}/>
                                <Route path='/Products/:ProductId' element={<ProductsDetails/>}/>
                                <Route path="/Order/*" element={<Order/>}/>
                            </Routes>
                        </Suspense>
                    </AnimatePresence>
                </main>
            </CartProvider>
        </div>
    );
}

export default App;
