import TopBar from "../accueil/components/TopBar"
import Header from "../accueil/components/Header"
import Footer from "../accueil/components/Footer"
import HelpHero from "../accueil/components/HelpHero"
import FAQSection from "../accueil/components/FAQSection"
import "./help.css"

export default function HelpPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="help-page">
        <HelpHero />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
