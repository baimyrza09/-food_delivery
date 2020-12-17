import axios from 'axios';
import React, { useReducer } from 'react';
import { AUTH_API } from '../helpers/constants'

export const authContext = React.createContext();

const INIT_STATE = {

}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type){

    }
}
const AuthContextProvider = ({ children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function registerUser(e, history) {
        e.preventDefault()
        console.log(e.target[0].value)
        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value
        }
        try {
            const res = await axios.post(`${AUTH_API}/api/auth/register`, newUser)
            history.push('/signin')
        }
        catch {
            alert('Некорректная почта или пароль')
        }
    }

    async function loginUser(e, history) {
        e.preventDefault()
        console.log(e.target[0].value)
        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value
        }
        try {
            const res = await axios.post(`${AUTH_API}/api/auth/login`, newUser)
            history.push('/')
            
        }
        catch {
            alert('Некорректная почта или пароль')
        }
    }
    function hasnotAccount(history) {
        history.push("/signup");
    }
    function hasAccount(history) {
        history.push("/signin");
    }
    
    return (
        <authContext.Provider value={{
            registerUser,
            loginUser,
            hasAccount,
            hasnotAccount
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;