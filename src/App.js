// import logo from './logo.svg';
import './App.css';
import Navigation from "./component/Layout/Header/Navigation";
import {AnimatePresence} from "framer-motion";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Products from "./component/Products/Products";
import Home from "./component/Home/Home";
// import ProductDetail from "./Manager/ProductAddToCart/ProductDetail";
import HomePart1 from "./component/Home/HomePart1";
import AuthPage from "./component/Auth/AuthPage";
import Order from "./component/Order/Order";
import CartProvider from "./store/CartProvider";
import TestProductsDetails from "./component/Products/ProductAddToCart/TestProductsDetails";

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
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Navigate to="/Home"/>}/>
                            <Route path="/Auth" element={<AuthPage/>}/>
                            <Route path="/Home/*" element={<Home/>}>
                                <Route path="Part1" element={<HomePart1/>}/>
                            </Route>
                            <Route path='/Products' element={<Products/>} />
                            {/*</Route>*/}
                            <Route path='/Products/:ProductId' element={<TestProductsDetails />}/>
                            <Route path="/Order" element={<Order/>}/>
                        </Routes>
                    </AnimatePresence>
                </main>
            </CartProvider>
        </div>
    );
}

export default App;
