import {useContext} from 'react'
import AuthContext from "../../store/auth-context";
import "./Order.css"
import AnimatedPages from "../AnimatedPages/AnimatedPages";

const Order = () => {
    const {accountName} = useContext(AuthContext)

    return <AnimatedPages>
        <div className="order">
            <span style={{fontSize: "3.5rem"}}>&#128151;</span>
            <h1>Thank You,
                <span className="order__name"> {accountName}</span>
                <br/>
                For Visiting My Website</h1>
            <span style={{fontSize: "2.5rem"}}>&#128512;</span>
        </div>
    </AnimatedPages>
}

export default Order