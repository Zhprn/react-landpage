import './index.css'
import NavbarMain from './components/NavbarComponent'
import HeroComponent from './components/HeroComponent'
import TermsComponent from './components/TermsComponent'
import AboutComponent from './components/AboutComponent'
import HowToOrderComponent from './components/HowToOrderComponent'
import CtaComponent from './components/CtaComponent'
import ServiceComponent from './components/ServiceComponent'
import TipsComponent from './components/TipsComponent'
import KeuntunganComponent from './components/KeuntunganComponent'
import OrderComponent from './components/OrderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
  <main>
        <NavbarMain />
        <HeroComponent />
        <TermsComponent />
        <AboutComponent />
        <HowToOrderComponent />
        <CtaComponent />
        <ServiceComponent />
        <TipsComponent />
        <KeuntunganComponent />
        <OrderComponent />
        <FooterComponent />
  </main>
  )
}

export default App