import {useContext, useState} from "react"
import {NavLink} from "react-router-dom";
import {useMediaQuery} from "react-responsive"

import classes from "./Navigation.module.css"
import logo from "../../../img/logoneg.png"
import AuthContext from "../../../store/auth-context";
import Account from "./Account";
import Cart from "../../Cart/Cart";
import MenuButton from "./mobileNav/MenuButton";
import MobileNav from "./mobileNav/MobileNav";
import CloseButton from "./mobileNav/CloseButton";

const Navigation = () => {
    const {isSignup, accountName, onLogout} = useContext(AuthContext)
    const isMobile = useMediaQuery({maxWidth: 800})

    const [isOpen, setOpen] = useState(false)
    const [isClose, setClose] = useState(true)
    const openHandler = () => {
        setOpen(previous => !previous)
        setClose(true)
        // setOpen(true)
    }
    const closeHandler = () => {
        setClose(false)
        setOpen(false)
    }
    // console.log(isClose)
    // useEffect(()=> {
    //     if (isOpen){
    //         setOpen(true)
    //     }else {
    //         setOpen(false)
    //     }
    // },[isClose])

    return (
        <nav className={classes.nav}>
            <div>
                <img src={logo} className={classes.logo} alt="logo"/>
            </div>
            <div>

                <ul className={classes["nav__menu"]}>
                    {!isMobile && <div className={classes["nav__menu--item"]}>
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
                    </div>}
                    {isOpen && <MobileNav
                        onClose={openHandler}
                        className={classes["nav__menu--mobile"]}
                        onAdd={closeHandler}
                    />}
                    {/*{isOpen && <div className={classes["nav__menu--mobile"]}>*/}
                    {/*    <li>*/}
                    {/*        <NavLink className={(nav) => nav.isActive ? classes["nav__active"] : ""} to="/Home">*/}
                    {/*            Home*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <NavLink className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Products">*/}
                    {/*            Products*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}
                    {/*</div>}*/}

                    <div className={classes["nav__menu--user"]}>
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
                        {isMobile && !isOpen && <MenuButton onClick={openHandler}/>}
                        {isOpen && isClose && <CloseButton onClick={closeHandler}/>}
                    </div>
                </ul>

            </div>
        </nav>
    )
}

export default Navigation;
