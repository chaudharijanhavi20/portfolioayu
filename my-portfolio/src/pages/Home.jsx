import Contactme from '../section/contact/Contactme';
import Intro from '../section/intro/Intro';
import Committe from '../section/committee/committe';
import Footer from '../component/footer/footer';
import Navbar from '../component/navbar/navbar';
import Recentproject from '../recentproject';
import Service from '../section/servicesection/service';
import '../App.css';
// import ScrollReveal from 'scrollreveal';
export default function Home() {
  return (
    <div className="App" id='app'>
      <Navbar />
      <Intro />
      <Service />
      <Recentproject />
      <Committe />
      <Contactme />
      <Footer />
    </div>
  )
}
