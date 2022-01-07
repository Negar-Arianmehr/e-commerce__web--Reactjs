import {motion} from "framer-motion";

const animations = {
    initial: {opacity: 0, y: "-100vw",},
    animate: {opacity: 1, y: 0,},
    exit: {opacity: 0, y: "100vw",}
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

const AnimatedDetailPage = (props) => {
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

export default AnimatedDetailPage;