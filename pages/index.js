import Navbar from "../components/navbar"
import Hero from "../components/body"
import BodyProjects from "../components/body_projects"
import Footer from "../components/footer"
import Skills from "../components/skills"

export default function Home({children}) {
  return (
    <div className="bg-slate-900 text-white h-fit">
      <Navbar />
      <Hero />
      <BodyProjects />
      <Skills />
      <footer>
      <Footer />
      </footer>
    </div>
  )
}
