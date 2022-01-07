import React, {useRef, useState, useContext} from "react";
import {useNavigate} from "react-router-dom"
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css"
import ErrorModal from "../UI/ErrorModal";
// import AccountContext from "../../store/acount-context";

const AuthForm = React.memo(() => {
    let navigate = useNavigate()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const [isLoading, setIsLoading] = useState(false)

    const [errorMessage, setErrorMessage] = useState("Authentication Failed")
    const [gettingError, setGettingError] = useState(false)

    const authCtx = useContext(AuthContext)
    // const {accountNameHandler} = useContext(AccountContext)

    // const switchAuthFormHandler = () => {
    //     alert("Please Sing up")
    // }

    let formInvalid

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
       formInvalid = enteredPassword.length < 6 && !enteredEmail.includes("@")

        if (enteredEmail.trim().length === 0 && formInvalid) {
            setGettingError(true)
            setErrorMessage({
                title: "Something Wrong!",
                message: "Please enter valid email and password. " +
                    "Password with at least 6 character, and email with @ (non-empty values)"
            })
            return
        }

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        authCtx.onLogin(enteredEmail, enteredPassword)

        setTimeout(() => {
           navigate("/Home")
        }, 2000)

    }

    const closeErrorMessage = () => {
        setGettingError(false)
    }

    return (
        <section className={classes.form}>
            <form className={classes.form__contents} onSubmit={submitHandler}>
                <h4>This is a test website. You can use a dummy email like this:
                    <span style={{textTransform: "lowercase"}}> name@test.com</span>
                </h4>
                {gettingError &&
                <ErrorModal
                    title={errorMessage.title}
                    message={errorMessage.message}
                    onClose={closeErrorMessage}
                />}
                <div>
                    <h1>{authCtx.isLoggedIn ? "Login" : "Sign Up"}</h1>
                </div>
                <div className={classes.form__items}>
                    <label htmlFor="email">your email</label>
                    <input type="email" id="email" ref={emailInputRef}/>
                </div>
                <div className={classes.form__items}>
                    <label htmlFor="password">your password</label>
                    <input type="password" id='password' ref={passwordInputRef}/>
                </div>
                <div className={classes.form__button}>
                    {!isLoading && <button type='submit'>{authCtx.isLoggedIn ? "Login" : "Create Account"}</button>}
                    {isLoading && <h2>Sending Request...</h2>}
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    className={classes["form__button--toggle"]}*/}
                    {/*    onClick={switchAuthFormHandler}*/}
                    {/*>*/}
                    {/*    {authCtx.isLoggedIn ? "Create New Account" : "Login with existing account"}*/}
                    {/*</button>*/}
                </div>
            </form>
        </section>
    )
})

export default AuthForm;