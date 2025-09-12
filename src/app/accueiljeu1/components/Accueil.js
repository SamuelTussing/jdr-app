"use client"
import Image from "next/image";
import { useState } from "react"
import "./accueilaustralabyss.css"
import Link from "next/link"
import { useRouter } from 'next/navigation'


    <div className="game-container">
      <div className="game-background">
        <div className="game-content">
          <h1 className="game-title">Nouvelle Partie</h1>

            <div className="button-container">
              <button className="game-button" onClick={startGame}>
                Commencer aventure
              </button>
              <button className="game-button inactif" onClick={startGame}>
                Continuer
              </button>
              <Link href="/accueil" className="game-button">
                Retour au menu
              </Link>
            </div>
          </div>
        </div>
      </div>