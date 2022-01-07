import React, {useRef, useState, useContext} from "react";

import classes from "../component/Auth/AuthForm.module.css"
import AuthContext from "./auth-context";
import ErrorModal from "../component/UI/ErrorModal";

const AuthForm = React.memo(() => {
    //getting entered info
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    // const [formValidation, setFormValidation] = useState(true)

    const [errorMessage, setErrorMessage] = useState("Authentication Failed")
    const [gettingError, setGettingError] = useState(false)

    const authContext = useContext(AuthContext)


    // useEffect(() => {
    //     const explanation = setTimeout(() => {
    //
    //     }, 5000)
    // })

    const switchAuthFormHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true)

        if (enteredPassword.trim().length === 0 && enteredEmail.trim().length === 0) {
            setErrorMessage({
                title: "Something Wrong!",
                message: "Please enter valid email and password (non-empty values)"
            })
        }

        let url;

        if (isLogin) {
            url = "https://products-13c3c.firebaseapp.com/__/auth/action?mode=action&oobCode=code"
        } else {
            //in the URL we have key=[API_KEY], that we have to add our Firebase project API key
            //for getting this key we have to go to project in the gear icon in the left side in the Project settings
            //we can see the web API key
            url = "https://products-13c3c.firebaseapp.com/__/auth/action?mode=action&oobCode=code"
        }

        fetch(url, {
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setIsLoading(false)
            if (res.ok) {
                return res.json()
            } else {
                return res.json.then(data => {
                    // let errorMessage = "Authentication Failed";
                    setGettingError(true)
                    throw new Error(errorMessage)
                })
            }
        }).then(data => {
            authContext.login(data.idToken)
        })
            .catch(err => {
                setErrorMessage(err.message)
                // alert(err.message)
            })

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
                    <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                </div>
                {/*{!isLogin && <div className={classes.form__items}>*/}
                {/*    <label htmlFor="email">your account Name</label>*/}
                {/*    <input type="email" form="email" ref={emailInputRef}/>*/}
                {/*</div>}*/}
                <div className={classes.form__items}>
                    <label htmlFor="email">your email</label>
                    <input type="email" form="email" ref={emailInputRef}/>
                </div>
                <div className={classes.form__items}>
                    <label htmlFor="password">your password</label>
                    <input type="password" form='password' ref={passwordInputRef}/>
                </div>
                <div className={classes.form__button}>
                    {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
                    {isLoading && <p>Sending Request...</p>}
                    <button
                        type="button"
                        className={classes["form__button--toggle"]}
                        onClick={switchAuthFormHandler}
                    >
                        {isLogin ? "Create New Account" : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>

    )
})

export default AuthForm;