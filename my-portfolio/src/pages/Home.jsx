import Contactme from '../Contactme';
import Intro from '../Intro';
import Committe from '../committe';
import Footer from '../component/footer/footer';
import Navbar from '../component/navbar/navbar';
import Recentproject from '../recentproject';
import Service from '../service';
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
