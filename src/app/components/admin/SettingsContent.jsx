"use client"

import { useState } from "react"

export default function SettingsContent() {
  const [settings, setSettings] = useState({
    storeName: "UBISOFT STORE",
    storeEmail: "contact@ubisoftstore.com",
    currency: "EUR",
    language: "fr",
    notifications: true,
    emailMarketing: true,
    autoBackup: true,
  })

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="content-section">
      <div className="section-header">
        <h2>Paramètres du magasin</h2>
        <div className="header-actions">
          <button className="btn-secondary">Annuler</button>
          <button className="btn-primary">Enregistrer</button>
        </div>
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <h3>Informations générales</h3>
          <div className="form-group">
            <label>Nom du magasin</label>
            <input
              type="text"
              value={settings.storeName}
              onChange={(e) => handleChange("storeName", e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Email de contact</label>
            <input
              type="email"
              value={settings.storeEmail}
              onChange={(e) => handleChange("storeEmail", e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Devise</label>
            <select
              value={settings.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="form-select"
            >
              <option value="EUR">Euro (€)</option>
              <option value="USD">Dollar ($)</option>
              <option value="GBP">Livre (£)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Langue</label>
            <select
              value={settings.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="form-select"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h3>Préférences</h3>
          <div className="form-group-toggle">
            <div className="toggle-label">
              <span>Notifications par email</span>
              <p>Recevoir des notifications pour les nouvelles commandes</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleChange("notifications", e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="form-group-toggle">
            <div className="toggle-label">
              <span>Marketing par email</span>
              <p>Envoyer des emails marketing aux clients</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.emailMarketing}
                onChange={(e) => handleChange("emailMarketing", e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="form-group-toggle">
            <div className="toggle-label">
              <span>Sauvegarde automatique</span>
              <p>Sauvegarder automatiquement les données tous les jours</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.autoBackup}
                onChange={(e) => handleChange("autoBackup", e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h3>Sécurité</h3>
          <div className="form-group">
            <button className="btn-secondary">Changer le mot de passe</button>
          </div>
          <div className="form-group">
            <button className="btn-secondary">Authentification à deux facteurs</button>
          </div>
          <div className="form-group">
            <button className="btn-danger">Déconnecter tous les appareils</button>
          </div>
        </div>

        <div className="settings-section">
          <h3>Zone dangereuse</h3>
          <div className="danger-zone">
            <div className="danger-item">
              <div>
                <strong>Exporter les données</strong>
                <p>Télécharger toutes vos données au format JSON</p>
              </div>
              <button className="btn-secondary">Exporter</button>
            </div>
            <div className="danger-item">
              <div>
                <strong>Supprimer le compte</strong>
                <p>Supprimer définitivement votre compte et toutes les données</p>
              </div>
              <button className="btn-danger">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
