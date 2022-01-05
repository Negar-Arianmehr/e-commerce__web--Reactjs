import ManagerForm from "../component/Manager/ManagerForm";

const Manager = (props) => {

    const saveNewProductHandler = (enteredProduct) => {
        const productItem = {
            ...enteredProduct,
            id: Math.random().toFixed(2).toString()
        }
        // console.log(productItem)
        props.onAddNewProduct(productItem)
    }

    return (
        <ManagerForm onSaveNewProduct={saveNewProductHandler}/>
    )
}

export default Manager;