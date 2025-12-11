"use client"

import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I download and install my game?",
      answer:
        "After purchasing a game, download and install Ubisoft Connect on your PC. Log in with your account, go to the Games tab, and click Download on the game you purchased. The installation will begin automatically. Make sure you have enough storage space and a stable internet connection.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "You can request a refund within 14 days of purchase if you have played the game for less than 2 hours. Digital content that has been redeemed or consumed cannot be refunded. To request a refund, go to My Orders in your account and select the order you wish to refund.",
    },
    {
      question: "How do I activate my game key?",
      answer:
        "Open Ubisoft Connect and log in to your account. Click on the menu icon in the top left, select 'Activate a key', and enter your 15-character activation code. Click Activate and the game will be added to your library. You can then download and play it.",
    },
    {
      question: "Can I share my games with family members?",
      answer:
        "Games purchased on the Ubisoft Store are linked to your individual account and cannot be transferred or shared with other accounts. However, you can play your games on different computers by logging into your Ubisoft Connect account on those devices.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and Ubisoft Wallet. Some regions may have additional payment options available. All transactions are secured with encryption technology to protect your financial information.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-contact">
          <p className="faq-contact-text">Still need help?</p>
          <button className="faq-contact-btn">Contact Support</button>
        </div>
      </div>
    </section>
  )
}
