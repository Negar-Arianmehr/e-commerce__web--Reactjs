import {useContext} from "react"
import {NavLink} from "react-router-dom";

import classes from "./Navigation.module.css"
import logo from "../../../img/Negar.png"
import AuthContext from "../../../store/auth-context";
import Account from "./Account";
import Cart from "../../Cart/Cart";

const Navigation = () => {
    const {isLoggedIn, isSignup, accountName, onLogout} = useContext(AuthContext)

    return (
        <nav className={classes.nav}>
            <div>
                <img src={logo} className={classes.logo} alt="logo"/>
            </div>
            <div>

                <ul className={classes.nav__menu}>
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes["nav__active"] : ""} to="/Home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Products">
                            Products
                        </NavLink>
                    </li>
                    {/*{!authCtx.isLoggedIn &&*/}
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Auth">
                            {!isSignup ? "Login" :
                                <button className={classes.logout} onClick={onLogout}>Logout</button>}
                        </NavLink>
                    </li>

                    {isSignup &&
                    <li>
                        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Order">
                            <div className="account">
                                <Account className={classes["nav__accountSvg"]}/>
                                <span className={classes["nav__accountName"]}>{accountName}</span>
                            </div>
                        </NavLink>
                    </li>
                    }
                    <li>
                        <Cart/>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navigation;
