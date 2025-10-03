"use client"

import { useState } from "react"
import "./GameEngine.css"

export default function GamePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="game-container">
      {/* Menu Button */}
      <div className="menu-wrapper">
        <button className="menu-button" onClick={toggleMenu}>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item">Option</button>
            <button className="dropdown-item">Quitter</button>
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className="chapter-title">Chapitre 1 : le Voyage</h1>

      {/* Main Content Area */}
      <div className="content-area">
        {/* Background Image */}
        <div className="background-image"></div>

        {/* Text Box */}
        <div className="text-box">
          <p className="text-intro">— Ici le pilote. Attachez vos ceintures, le temps se gâte.</p>

          <p>
            Le ciel s'est obscurci d'une vitesse inquiétante. Un blizzard s'abat sur nous. La grêle frappe la carlingue
            avec une telle violence que chaque impact résonne dans mes os. Un craquement sinistre déchire l'air : le
            pare-brise du cockpit se fissure.
          </p>

          <p>Je tourne la tête vers le hublot.</p>

          <p>Des nuages, noirs et gonflés, avalent la lumière du jour. Et puis je le vois.</p>

          <p>
            À peine perceptible. Plus rapide que l'avion. Une ombre, monstrueuse, informe... dont les contours
            n'appartiennent pas à ce monde. Mon esprit cherche à la simple idée d'en soutenir la vision. Elle nous
            survole, immense, irréelle.
          </p>

          <p>Du cockpit viennent des cris de panique.</p>

          <p>
            Un hurlement métallique les couvre : des griffes jaillissent du plafond, traversant le blindage comme du
            papier.
          </p>

          <p>L'avion vacille. Le plancher tremble sous mes pieds. Nous chutons, ballottés comme un jouet dérisoire.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="action-button">
          <span className="button-title">Tirer sur les griffes</span>
          <span className="button-subtitle">Perception 18</span>
        </button>
        <button className="action-button">
          <span className="button-title">Courir vers le cockpit</span>
          <span className="button-subtitle">Endurance 13</span>
        </button>
        <button className="action-button">
          <span className="button-title">Récupérer un parachute</span>
          <span className="button-subtitle">Agilité 15</span>
        </button>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-icon">💪</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Force</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">👁️</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Perception</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🏃</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Endurance</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🧠</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Intelligence</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🤸</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Agilité</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🔥</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Magie</div>
        </div>
        <div className="stat-item special">
          <div className="stat-icon">❤️</div>
          <div className="stat-value">10/10</div>
          <div className="stat-label">Vie</div>
        </div>
        <div className="stat-item special">
          <div className="stat-icon">😱</div>
          <div className="stat-value">3/8</div>
          <div className="stat-label">Horreur</div>
        </div>
      </div>
    </div>
  )
}
