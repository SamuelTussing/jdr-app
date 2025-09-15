"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import "./login.css"

export default function LoginPage() {
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: ""
  })

  // Connexion
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
      })

      const data = await res.json()

      if (res.ok) {
        console.log("✅ Login success:", data)
        router.push("/accueil") // redirige vers la page d'accueil
      } else {
        alert(data.error || "Erreur lors de la connexion")
      }
    } catch (err) {
      console.error("❌ Login error:", err)
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
        body: JSON.stringify(signupData)
      })

      const data = await res.json()

      if (res.ok) {
        console.log("✅ Signup success:", data)
        alert("Compte créé avec succès ! Vous pouvez vous connecter.")
        setSignupData({ username: "", password: "", email: "" }) // reset form
      } else {
        alert(data.error || "Erreur lors de la création du compte")
      }
    } catch (err) {
      console.error("❌ Signup error:", err)
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
