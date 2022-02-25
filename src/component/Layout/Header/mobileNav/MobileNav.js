import classes from "../Navigation.module.css";
import {NavLink} from "react-router-dom";
import {ModalOverlay} from "../../../UI/Modal";


const MobileNav = props => {

    return (
        <ModalOverlay onClose={props.onClose} >
            <div className={props.className}>
                <li>
                    <NavLink
                        onClick={props.onClose}
                        className={(nav) => nav.isActive ? classes["nav__active"] : ""} to="/Home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={props.onClose} className={(nav) => nav.isActive ? classes.nav__active : ""} to="/Products">
                        Products
                    </NavLink>
                </li>
            </div>
        </ModalOverlay>
    )
}

export default MobileNav;