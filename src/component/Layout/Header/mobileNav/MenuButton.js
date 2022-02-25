// import Hamburger from 'hamburger-react'

import classes from "../../../Cart/Cart.module.css";

const CloseButton = props => {
    return (
        // <Hamburger onToggle={props.onClick} />
        <button onClick={props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${classes.cart}`} fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>
    )
}

export default CloseButton;