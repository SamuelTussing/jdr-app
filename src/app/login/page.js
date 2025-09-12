"use client"
import Image from "next/image";
import { useState } from "react"
import "./login.css"
import { useRouter } from 'next/navigation'

export default function LoginPage(){
  const router = useRouter()


    const [loginData, setLoginData] = useState({
        username: "Samcoucaille",
        password : "*********"
    })

    const [signupData, setSignupData] = useState({
        username: "Samcoucaille",
        password : "*********",
        email : "",
    })

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("Login:", loginData)
            // ici tu peux faire la vérification login
        router.push('/accueil') // redirige vers la page d'accueil
  }

    const handleSignup = (e) => {
        e.preventDefault()
        console.log("Signup:", signupData)
  }

return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-forms">
          {/* Login Form */}
          <div className="auth-form">
            <h2 className="auth-title">Connexion</h2>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="login-username" className="form-label">
                  Username
                </label>
                <input
                  id="login-username"
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <button type="button" className="forgot-password">
                  Mot de passe oublié
                </button>
              </div>

              <button type="submit" className="auth-button">
                Connexion
              </button>
            </form>
          </div>

          {/* Vertical Divider */}
          <div className="divider"></div>

          {/* Signup Form */}
          <div className="auth-form">
            <h2 className="auth-title">Créer un compte</h2>

            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="signup-username" className="form-label">
                  Username
                </label>
                <input
                  id="signup-username"
                  type="text"
                  value={signupData.username}
                  onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-password" className="form-label">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-email" className="form-label">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  className="form-input"
                  placeholder=""
                />
              </div>

              <div className="signup-button-container">
                <button type="submit" className="auth-button">
                  Créer un compte
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

