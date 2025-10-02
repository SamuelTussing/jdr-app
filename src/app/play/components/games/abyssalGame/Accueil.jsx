"use client"
import Image from "next/image";
import { useState } from "react"
import "./accueilaustralabyss.css"
import Link from "next/link"

/* PAGE ACCUEIL DU JEU*/


export default function Accueil({ onNext }) {



  return (
    <div className="game-container1">
      <div className="game-background">
        <div className="game-content">
          <h1 className="game-title">Nouvelle Partie</h1>

            <div className="button-container">
              <button className="game-button" onClick={onNext} >
                Commencer aventure
              </button>
              <button className="game-button inactif" >
                Continuer
              </button>
              <Link href="/accueil" className="game-button">
                Retour au menu
              </Link>
            </div>
          </div>
        </div>
      </div>
  )}