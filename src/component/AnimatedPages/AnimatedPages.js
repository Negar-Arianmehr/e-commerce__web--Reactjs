import {motion} from "framer-motion";

const animations = {
    initial: {opacity: 0, x: "-100vw", scale: .8},
    animate: {opacity: 1, x: 0, scale: 1},
    exit: {opacity: 0, x: "100vw", scale: 1.2}
}

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5
}

const absolutePage = {
    position: "absolute",
    width: "100%",
    height: "100%",
}

const AnimatedPages = (props) => {
    return (
        <motion.div
            style={absolutePage}
            variants={animations}
            initial='initial'
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            {props.children}
        </motion.div>
    )
}

export default AnimatedPages;