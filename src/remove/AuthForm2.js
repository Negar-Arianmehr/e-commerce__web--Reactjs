import React, {useState, useContext} from "react";

import classes from "../component/Auth/AuthForm.module.css"
import AuthContext from "../store/auth-context";
import ErrorModal from "../component/UI/ErrorModal";

const AuthForm2 = React.memo(() => {
    //getting entered info
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [emailIsTouched, setEmailIsTouched] = useState(false)
    const [passwordIsTouched, setPasswordIsTouched] = useState(false)

    // const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const [formInvalid, setFormInvalid] = useState(false)

    const [errorMessage, setErrorMessage] = useState({
        title: "Something Wrong!",
        message: "Please enter valid email and password. " +
            "Password with at least 6 character, and email with @"
    })
    // const [gettingError, setGettingError] = useState(false)

    const authCtx = useContext(AuthContext);

    const emailIsEmpty = emailInput.trim() === "";
    const emailInvalid = emailIsEmpty && emailIsTouched

    const passwordIsEmpty = passwordInput.length < 6;
    const passwordInvalid = passwordIsEmpty && passwordIsTouched;

    const emailInputChangeHandler = event => {
        setEmailInput(event.target.value)
    }

     const emailBlurHandler = () => {
        setEmailIsTouched(true)
    }

     const passwordBlurHandler = () => {
        setPasswordIsTouched(true)
    }

    const passwordInputChangeHandler = event => {
        setPasswordInput(event.target.value)
    }


    const submitHandler = event => {
        event.preventDefault();

        setEmailInput(event.target.value);
        setPasswordInput(event.target.value);



        if (passwordIsEmpty && emailIsEmpty && !emailInput.includes("@")) {
            setFormInvalid(true)
            setErrorMessage({
                title: "Something Wrong!",
                message: "Please enter valid email and password. " +
                    "Password with at least 6 character, and email with @"
            })
        }

        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 2500)


        authCtx.onLogin(emailInput, passwordInput)
        authCtx.accountName = emailInput.split("@")[0]
        setEmailIsTouched(false)
        setPasswordIsTouched(false)
    }



    const closeErrorMessage = () => {
        setFormInvalid(false)
    }

//useNavigate for replace the page with home
    const emailStyleInvalid = emailInvalid ? classes.invalid : ''
    const passwordStyleInvalid = passwordInvalid ? classes.invalid : ""

    return (
        <section className={classes.form}>
            {formInvalid &&
            <ErrorModal
                title={errorMessage.title}
                message={errorMessage.message}
                onClose={closeErrorMessage}
            />}
            <form className={classes.form__contents} onSubmit={submitHandler}>
                <div>
                    <h1>{authCtx.isLoggedIn ? "Login" : "Sign Up"}</h1>
                </div>
                <div className={classes.form__items}>
                    <label htmlFor="email">your email</label>
                    <input
                        className={emailStyleInvalid}
                        type="email"
                        id="email"
                        value={emailInput}
                        onChange={emailInputChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                </div>
                <div className={classes.form__items}>
                    <label htmlFor="password">your password</label>
                    <input
                        className={passwordStyleInvalid}
                        type="password"
                        id='password'
                        value={passwordInput}
                        onChange={passwordInputChangeHandler}
                        onBlur={passwordBlurHandler}
                    />
                </div>
                <div className={classes.form__button}>
                    {!isLoading && <button type='submit'>
                        {authCtx.isLoggedIn ? "Login" : "Create Account"}
                    </button>}
                    {isLoading && <p>Sending Request...</p>}
                    <button
                        type="button"
                        className={classes["form__button--toggle"]}
                        // onClick={switchAuthFormHandler}
                    >
                        {authCtx.isLoggedIn ? "Create New Account" : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>

    )
})

export default AuthForm2;