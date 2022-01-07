import Hamburger from 'hamburger-react'

const MenuButton = props => {
    return (
        <Hamburger onToggle={props.onClick} />
    )
}

export default MenuButton;