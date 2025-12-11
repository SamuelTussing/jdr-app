"use client"

import { useState } from "react"
import Image from "next/image"

export default function CartContent() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Star Wars Outlaws",
      edition: "Standard Edition",
      platform: "PC (Digital)",
      price: 69.99,
      originalPrice: 69.99,
      discount: 0,
      image: "/star-wars-outlaws-hero.jpg",
    },
    {
      id: 2,
      title: "Avatar: Frontiers of Pandora",
      edition: "Ultimate Edition",
      platform: "PC (Digital)",
      price: 32.5,
      originalPrice: 129.99,
      discount: 75,
      image: "/action-adventure-game-characters.jpg",
    },
  ])

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Your Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2 className="empty-cart-title">Your cart is empty</h2>
            <p className="empty-cart-text">Add some games to get started!</p>
            <a href="/" className="continue-shopping-btn">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">
          Your Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
        </h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} width={150} height={200} />
                  {item.discount > 0 && <span className="cart-item-discount">-{item.discount}%</span>}
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-edition">{item.edition}</p>
                  <p className="cart-item-platform">{item.platform}</p>
                </div>

                <div className="cart-item-price">
                  {item.discount > 0 && (
                    <span className="cart-item-original-price">${item.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="cart-item-current-price">${item.price.toFixed(2)}</span>
                </div>

                <button className="cart-item-remove" onClick={() => removeItem(item.id)} aria-label="Remove item">
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="cart-summary-title">Order Summary</h2>

            <div className="cart-summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="cart-summary-line">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="cart-summary-divider"></div>

            <div className="cart-summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>

            <a href="/" className="continue-shopping-link">
              Continue Shopping
            </a>

            <div className="payment-methods">
              <p className="payment-methods-title">We accept</p>
              <div className="payment-icons">
                <span className="payment-icon">💳</span>
                <span className="payment-icon">💰</span>
                <span className="payment-icon">🎫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
