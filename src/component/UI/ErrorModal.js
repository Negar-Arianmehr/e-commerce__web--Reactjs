// import ReactDOM from "react-dom"
//
// import Card from "./Card";
// import classes from "./Modal.module.css"
// import Button from "./Button";
//
// const Backdrop = props => {
//     return <div className={classes.backdrop} onClick={props.onClick}/>
// }
//
// const ModalOverlay = props => {
//     return <Card className={classes.modal}>
//                 <header className={classes.header}>
//                     <h2>{props.title}</h2>
//                 </header>
//                 <div className={classes.content}>
//                     <p>{props.message}</p>
//                 </div>
//                 <footer className={classes.action}>
//                     <Button onClick={props.onClick}>Okay</Button>
//                 </footer>
//             </Card>
// }
//
// const ErrorModal = props => {
//     return (
//         <>
//             {ReactDOM.createPortal(
//                 <Backdrop
//                     onClick={props.onClick}
//                 />, document.getElementById("backdrop-root"))}
//             {ReactDOM.createPortal(
//                 <ModalOverlay
//                     title={props.title}
//                     message={props.message}
//                     onClick={props.onClick}
//                 />, document.getElementById("modalOverlay-root")
//                 )}
//         </>
//     )
// }
//

import classes from "./Modal.module.css";
import Button from "./Button";
import Modal from "./Modal";

const ErrorModal = props => {
    //className={classes.modal}
    return <Modal>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.action}>
                    <Button onClick={props.onClick}>Okay</Button>
                </footer>
            </Modal>
}

export default ErrorModal;