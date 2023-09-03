import React from 'react';
import LoginForm from '@/components/LoginForm';
import { useAuth } from "@/contexts/auth";

const Login = () => {
    const { login } = useAuth()

    function loginFormHandler(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        login(username, password)
      }
    return (
        <>
            <LoginForm handler={loginFormHandler}/>
        </>
    );
}

export default Login;