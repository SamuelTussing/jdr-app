"use client"

import { useState } from "react"

export default function NotificationSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  return (
    <div className="notification-settings">
      <div className="notification-toggle">
        <div className="notification-icon">🔔</div>
        <span className="notification-label">Notification for all items in your wishlist</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <div className="notification-info">
        <p>
          Choose which item(s) from your wishlist you would like to receive notifications for by selecting the
          <span className="bell-icon"> 🔔 </span>
          <strong>bell icon</strong> located on each card below! These notifications can include
          <strong> price drops</strong>, <strong>pre-orders</strong> and <strong>game release</strong>!
        </p>
      </div>
    </div>
  )
}
