import Modal from "../UI/Modal";
import CartList from "./CartList";

const CartModal = props => {

    return (
        <Modal onClose={props.onClose}>
            <CartList
                onClose={props.onClose}
                onClick={props.onClick}
            />
        </Modal>
    )
}


export default CartModal;