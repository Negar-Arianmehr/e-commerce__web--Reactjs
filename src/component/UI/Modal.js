import classes from "./Modal.module.css";
import ReactDOM from "react-dom";


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

export const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop
                    onClose={props.onClose}
                />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("modalOverlay-root")
                )}
        </>
    )
}
export default Modal;