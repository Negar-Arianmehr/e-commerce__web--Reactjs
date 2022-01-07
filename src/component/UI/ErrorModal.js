import classes from "./Modal.module.css";
import Button from "./Button";
import Modal from "./Modal";

const ErrorModal = props => {
    return <Modal onClose={props.onClose}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onClose}>OK</Button>
                </footer>
            </Modal>
}

export default ErrorModal;