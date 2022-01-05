import React, {useState,useEffect} from "react"

const AuthContext2 = React.createContext({
    isLoggedIn: false,
    accountName: "",
    onLogout: () => {
    },
    onLogin: (email, password) => {
        return email
    }
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=> {
        const storedUserLogInInfo = localStorage.getItem("isLoggedIn")

        if (storedUserLogInInfo === "1") {
            setIsLoggedIn(true)
        }
    }, [])

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("isLoggedIn")
    }

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1")
        setIsLoggedIn(true)
    }

    const contextValue = {
        isLoggedIn: isLoggedIn,
        accountName: "",
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }

    return (
        <AuthContext2.Provider value={contextValue}>
            {props.children}
        </AuthContext2.Provider>
    )
}

export default AuthContext2;
