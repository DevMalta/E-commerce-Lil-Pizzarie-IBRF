import React from "react"
import "../styles/LoginPage.css"
import Login from "../object/Login"
import SignUp from "../object/SignUp"

const LoginPage = () => {
  return (
    <>
    <div className="forms_tela_cadastro">
      <Login />
      <div className="text-ou">
        <h3 className="ou">Ou</h3>
      </div>
      <SignUp />
    </div>
    </>
  )
}

export default LoginPage
