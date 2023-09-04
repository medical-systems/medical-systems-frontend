import React from 'react';
import LoginForm from '@/components/LoginForm';
import { useAuth } from "@/contexts/auth";
import { useRouter } from 'next/router';

const Login = () => {
    const { login } = useAuth()
    const router = useRouter();

    function loginFormHandler(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        login(username, password)
        router.push("/")

      }
    return (
        <>
            <LoginForm handler={loginFormHandler}/>
        </>
    );
}

export default Login;