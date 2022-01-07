// import React, {useState} from "react"
//
// const AuthContext = React.createContext({
//     token: "",
//     //checking was logged in and have a token or not
//     isLoggedIn: false,
//     login: (token) => {
//     },
//     logout: () => {}
// })
//
// //for retrieve token
// const retrieveStoredToken = () => {
//     const storedToken = localStorage.getItem("token")
//
//
//     return {
//         token: storedToken,
//     }
// }
//
// export const AthContextProvider = (props) => {
//     //retrieve function
//     const tokenData = retrieveStoredToken()
//
//     //taking token
//     let initialToken;
//
//     if (tokenData) {
//         initialToken = tokenData.token
//     }
//
//     const [token, setToken] = useState(initialToken)
//
//     //!!"" === false // empty string is falsy
//     //instead of using useState
//     const userIsLoggedIn = !!token;
//
//     //Two functions
//     const logoutHandler = () => {
//         setToken(null)
//
//         localStorage.removeItem("token")
//
//     }
//
//     const loginHandler = (token) => {
//         setToken(token)
//
//         //store it in the localStorage
//         localStorage.setItem("token", token)
//
//         //we need it for expiration
//         // localStorage.setItem("expirationTime", expirationTime)
//
//     }
//
//     //
//     // useEffect(() => {
//     //     if (tokenData) {
//     //         logoutTimer = setTimeout(logoutHandler)
//     //     }
//     // })
//
//     const contextValue = {
//         taken: token,
//         isLoggedIn: userIsLoggedIn,
//         login: loginHandler,
//         logout: logoutHandler,
//     }
//
//     return (
//         <AuthContext.Provider value={contextValue}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }
//
// export default AuthContext;
//
