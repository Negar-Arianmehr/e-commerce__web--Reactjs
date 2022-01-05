import {useContext,useEffect} from "react"
import {NavLink} from "react-router-dom";

import classes from "./Navigation.module.css"
import logo from "../../../img/logo.png"
import AuthContext2 from "../../../store/auth-context2";
// import CartIButton from "../../Cart/CartIButton";
import Account from "./Account";
import Cart from "../../Cart/Cart";

const Navigation = () => {

    const authCtx = useContext(AuthContext2)
    // console.log(AuthContext2)

    useEffect(()=> {
        // console.log(authCtx)
    },[authCtx])

    return (
        <nav className={classes.nav}>
            <div>
                <img src={logo} className={classes.logo} alt="logo"/>
            </div>
            <div>

                <ul className={classes.nav__menu}>
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Products">
                            Products
                        </NavLink>
                    </li>
                    {authCtx.isLoggedIn &&
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Auth">
                            Login
                        </NavLink>
                    </li>}

                    {!authCtx.isLoggedIn &&
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Products">
                    {authCtx.accountName}
                    <Account />
                        </NavLink>
                    </li>
                    }
                    {!authCtx.isLoggedIn &&
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Auth">
                            Logout
                        </NavLink>
                    </li>
                    }
                    <li>
                        {/*<NavLink to="#">*/}
                                <Cart />
                        {/*</NavLink>*/}
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navigation;
