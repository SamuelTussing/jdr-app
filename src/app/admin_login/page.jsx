"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import "./adminLogin.css"

export default function AuthPage() {
  const router = useRouter()

  const [loginData, setLoginData] = useState({ username: "", password: "" })

  // Connexion
 const handleLogin = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginData.username,
        password: loginData.password,
        scope: "admin"
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.error || "Erreur de connexion")
      return
    }

    console.log("Login success:", data)

    // Redirection vers le backoffice
    router.push("/admin/adminWorld")
    window.location.href = "/admin/adminWorld"
  } catch (err) {
    console.error("Erreur login:", err)
    alert("Erreur serveur")
  }
}


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-forms">
          {/* Login Form */}
          <div className="auth-form">
            <h2 className="auth-title">Backoffice Connexion</h2>
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
        </div>
      </div>
    </div>
  )
}
