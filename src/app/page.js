import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Elegirnos from "@/components/elegirnos";
import Nosotros from "@/components/nosotros";
import QuienesSomos from "@/components/quienesSomos";


export default function Home() {
  return (
    <main>
      <Banner />
      <Nosotros />
      <QuienesSomos />
      <Elegirnos />
      <Contact />
    </main>
  )
}
