import React, {useState, useEffect} from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    isSignup: false,
    accountName: "",
    onLogout: () => {
    },
    onLogin: (email, password) => {
        return {email, password}
    }
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [accountName, setAccountName] = useState("")

    useEffect(() => {
        const storedUserLogInInfo = localStorage.getItem("isLoggedIn")

        if (storedUserLogInInfo === "1") {
            setIsLoggedIn(true)
            setIsLoggedIn(true)
        }

        const timer = setTimeout(() => {
            localStorage.removeItem("isLoggedIn")
            setIsLoggedIn(false)
        }, 7000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const logoutHandler = () => {
        setIsSignup(false)
        // setIsLoggedIn(false)
        // localStorage.removeItem("isLoggedIn")
    }

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1")
        setIsLoggedIn(true)
        setIsSignup(true)
        setAccountName(email.split("@")[0])
    }

    const contextValue = {
        isLoggedIn,
        isSignup,
        accountName: accountName,
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
