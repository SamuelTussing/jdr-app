export default function HelpHero() {
  return (
    <div className="help-hero">
      <div className="help-hero-container">
        <h1 className="help-hero-title">How can we help you?</h1>
        <p className="help-hero-subtitle">Find answers to common questions about orders, accounts, and more</p>
        <div className="help-search">
          <input type="text" placeholder="Search for help articles..." className="help-search-input" />
          <button className="help-search-btn">Search</button>
        </div>
      </div>
    </div>
  )
}
