import LoginForm from "@/components/LoginForm"
import Head from "next/head"
import { useAuth } from "@/contexts/auth";


export default function Home() {
  const { user, login, token } = useAuth()

  function loginFormHandler(event) {
    event.preventDefault();
    const username = event.target.username.value
    const password = event.target.password.value
    login(username, password)
  }

  
  return (
    <>
      <Head>
        <title>eDental</title>
      </Head>
      <div className="flex items-center justify-center h-screen">
        <LoginForm handler={loginFormHandler} />
      </div>
    </>
  )
}
