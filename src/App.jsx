import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="login-container">
        <div className="title">
          <h1>Bem Vindo</h1>
          <p>Faça login para continuar</p>
        </div>
        <form id="login-form">
          <div className="inputLogin">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="E-mail" required="" />
            <h5>Digite o email associado a sua conta.</h5>
          </div>
          <div className="inputLogin">
            <label htmlFor="password">Senha:</label>
            <input id="password" type="password" placeholder="Senha" required="" />
            <h5>Sua senha deve ter pelo menos 6 caracteres.</h5>
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Lembrar-me</label>
            </div>
            <a href="#" id="forgotPasswordLink">Esqueceu a senha?</a>
          </div>
          <button type="submit">Entrar</button>
          <p>Não tem uma conta?{" "}
            <a href="#" id="openModal">Cadastre-se</a></p>
        </form>

      </div>
    </>
  )
}


