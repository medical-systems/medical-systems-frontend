import { createContext, useContext, useState } from "react";
import jwt from 'jsonwebtoken'
const axios = require('axios');

const baseURL = process.env.NEXT_PUBLIC_URL
const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext)
    return auth
}

export function AuthProvider(props) {
    const [state, setState] = useState({
        token: null,
        user: null,
        login,
        logout,
    })

    async function login(username, password) {
        const URL = `${baseURL}/api/token/`;
        const data = { username, password };
        const headers = { 'Content-Type': 'application/json' };

        await axios.post(URL, data, { headers })
            .then(response => {
                const responseData = response.data;
                console.log(responseData)

                const decodedToken = jwt.decode(responseData.access);
                console.log(decodedToken);

                const newState = {
                    token: responseData,
                    user: {
                        username: decodedToken.username,
                        email: decodedToken.email,
                        id: decodedToken.user_id,
                    },
                };
                setState(prevState => ({ ...prevState, ...newState }));
            })
            .catch(error => {
                console.error('Error', error);
            });
    }

    function logout() {
        const newState = {
            token: null,
            user: null,
        };
        setState(prevState => ({ ...prevState, ...newState }));
    }
    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}