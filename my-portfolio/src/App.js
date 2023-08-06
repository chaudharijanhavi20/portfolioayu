import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import Home from './pages/Home';
import Projects from './pages/Projects';
function App() {
  ScrollReveal().reveal('#app');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
