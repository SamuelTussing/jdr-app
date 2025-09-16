"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "./login.css"

export default function AuthPage() {
  const router = useRouter()

  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const [signupData, setSignupData] = useState({ username: "", password: "", email: "" })

  // Connexion
const handleLogin = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
      credentials: "include", // 🔑 envoie le cookie HttpOnly
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.error || "Erreur de connexion")
      return
    }

    console.log("Login success:", data)

    // ⚡ Redirection complète pour que le cookie soit pris en compte
    window.location.href = "/accueil"
  } catch (err) {
    console.error("Erreur login:", err)
    alert("Erreur serveur")
  }
}

  // Inscription
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      })

      const data = await res.json()

      if (res.ok) {
        alert("Compte créé avec succès ! Vous pouvez vous connecter.")
        setSignupData({ username: "", password: "", email: "" })
      } else {
        alert(data.error || "Erreur lors de la création du compte")
      }
    } catch (err) {
      console.error("Erreur signup:", err)
      alert("Erreur serveur")
    }
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
                <label htmlFor="login-username">Username</label>
                <input
                  id="login-username"
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="form-input"
                />
              </div>

              <button type="submit" className="auth-button">Connexion</button>
            </form>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Signup Form */}
          <div className="auth-form">
            <h2 className="auth-title">Créer un compte</h2>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="signup-username">Username</label>
                <input
                  id="signup-username"
                  type="text"
                  value={signupData.username}
                  onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-email">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <button type="submit" className="auth-button">Créer un compte</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
