"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation" // ⚠️ il manquait cette importation

export default function GameEngine({ player, goTo }) {
  const { slug } = useParams() // 🧭 Ex: "Abyssal"
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [rolling, setRolling] = useState(false)
  const [rollResult, setRollResult] = useState(null)

  // ⚡ Charger la page actuelle depuis la BDD
  useEffect(() => {
    const loadPage = async () => {
      try {
        const res = await fetch("/api/game/getPage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: "abyssal",
            pageId: player?.currentPage || "page1", // 🔹 page en cours ou première
          }),
        })

        const data = await res.json()
        if (!data.success) throw new Error(data.error)
        setPageData(data.page)
      } catch (err) {
        console.error("❌ Erreur chargement page:", err)
      } finally {
        setLoading(false)
      }
    }

    if (slug) loadPage() // ✅ on ne lance pas avant que slug soit défini
  }, [slug, player?.currentPage])

  // ⚔️ Quand le joueur choisit une action
  const handleChoice = async (choiceLabel) => {
    try {
      setRolling(true)
      const res = await fetch("/api/story/nextPage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: slug, // ✅ cohérent avec la logique du backend
          pageId: pageData.id,
          choiceLabel,
          playerStats: player.attributes,
        }),
      })

      const data = await res.json()
      if (!data.success) throw new Error(data.error)

      // 🎲 Animation / affichage du résultat
      setRollResult({
        d20: data.d20,
        total: data.roll,
        stat: data.stat,
      })

      // 🧭 Met à jour la page et sauvegarde la progression
      const nextPage = data.page
      goTo("jeu", { ...player, currentPage: nextPage.id })
      setPageData(nextPage)
    } catch (err) {
      console.error("❌ Erreur choix:", err)
    } finally {
      setRolling(false)
    }
  }

  if (loading) return <div>Chargement...</div>
  if (!pageData) return <div>Page introuvable</div>
  return (
    <div className="game-container2">
      {/* MENU */}
      <div className="menu-wrapper">
        <button className="menu-button">
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
      </div>

      {/* IMAGE */}
      {pageData.img && (
        <div
          className="background-image"
          style={{ backgroundImage: `url(${pageData.img})` }}
        ></div>
      )}

      {/* TEXTE */}
      <div className="text-box">
        {pageData.text.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* 🎲 Résultat du lancer */}
      {rollResult && (
        <div className="roll-result">
          🎲 Jet de dé : {rollResult.d20} + {rollResult.stat} = {rollResult.total}
        </div>
      )}

      {/* CHOIX */}
      <div className="action-buttons">
        {pageData.choices.map((choice, index) => (
          <button
            key={index}
            className="action-button"
            onClick={() => handleChoice(choice.label)}
            disabled={rolling}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {/* STATS */}
      <div className="stats-bar">
        {Object.entries(player.attributes || {}).map(([label, value]) => (
          <div className="stat-item" key={label}>
            <div className="stat-label">{label}</div>
            <div className="stat-value">{value}</div>
          </div>
        ))}
        <div className="stat-item special">
          ❤️ {player.calculatedAttributes?.["Points de vie max"] ?? "?"}
        </div>
        <div className="stat-item special">
          😱 {player.calculatedAttributes?.["Horreur max"] ?? "?"}
        </div>
      </div>
    </div>
  )
}
