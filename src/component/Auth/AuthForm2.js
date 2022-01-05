import React, {useRef, useState, useContext} from "react";

import classes from "./AuthForm.module.css"
import AuthContext2 from "../../store/auth-context2";
import ErrorModal from "../UI/ErrorModal";

const AuthForm2 = React.memo(() => {
    //getting entered info
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    // const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    // const [formValidation, setFormValidation] = useState(true)

    const [errorMessage, setErrorMessage] = useState("Authentication Failed")
    const [gettingError, setGettingError] = useState(false)

    const authCtx = useContext(AuthContext2)

    const switchAuthFormHandler = () => {
        // authCtx.setIsLogin((prevState) => !prevState)
        return !authCtx.isLoggedIn
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;


        if (enteredPassword.trim().length === 0
            && enteredEmail.trim().length === 0
            && !enteredEmail.includes("@")
            && enteredPassword < 6) {
            setGettingError(true)
            setErrorMessage({
                title: "Something Wrong!",
                message: "Please enter valid email and password (non-empty values)"
            })
            return
        }

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        authCtx.onLogin(enteredEmail, enteredPassword)
        authCtx.accountName = enteredEmail.split("@")[0]
    }

    const closeErrorMessage = () => {
        setGettingError(false)
        setErrorMessage(null)
    }

//useNavigate for replace the page with home

    return (
        <section className={classes.form}>
            {gettingError &&
            <ErrorModal
                title={errorMessage.title}
                message={errorMessage.message}
                onClick={closeErrorMessage}
            />}
            <form className={classes.form__contents} onSubmit={submitHandler}>
                <div>
                    <h1>{!authCtx.isLoggedIn ? "Login" : "Sign Up"}</h1>
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
                    {!isLoading && <button type='submit'>{!authCtx.isLoggedIn ? "Login" : "Create Account"}</button>}
                    {isLoading && <p>Sending Request...</p>}
                    <button
                        type="button"
                        className={classes["form__button--toggle"]}
                        onClick={switchAuthFormHandler}
                    >
                        {!authCtx.isLoggedIn ? "Create New Account" : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>

    )
})

export default AuthForm2;