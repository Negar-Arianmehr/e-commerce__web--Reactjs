import {Link, Outlet} from "react-router-dom";

import classes from "./Home.module.css"
import AnimatedPages from "../AnimatedPages/AnimatedPages";

const Home = () => {

    return (
        <AnimatedPages>
            <section >
                <div className={classes.home}>
                    <h1>Welcome to our Market</h1>
                    <Link to="Part1">About App</Link>
                    <Outlet/>
                </div>
            </section>
        </AnimatedPages>

)}

export default Home;