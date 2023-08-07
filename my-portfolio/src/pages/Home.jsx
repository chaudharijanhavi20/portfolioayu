import Contactme from "../section/contact/Contactme";
import Intro from "../section/intro/Intro";
import Committe from "../section/committee/committe";
import Footer from "../component/footer/footer";
import Navbar from "../component/navbar/navbar";
import Recentproject from "../recentproject";
import Service from "../section/servicesection/service";
import "../App.css";
import {  useReducer } from "react";
import Themecontext from "../context/Themecontext";
// import ScrollReveal from 'scrollreveal';
const themereducerfunction = (state, action) => {
  if (action.type === "changetheme") {
    if(state==="lightbox"){
      document.querySelector("body").style.backgroundColor="black"
      document.querySelector("body").style.color="white"
      return "blackbox"
    }
    else{
      document.querySelector("body").style.backgroundColor="white"
      document.querySelector("body").style.color="black"
      return "lightbox"

    }
  } else {
    // console.log("hello")
    return "blackbox";
  }
};
export default function Home() {
  // const Themecontect = useContext(Themecontext);
  const [themestate, dispatch] = useReducer(themereducerfunction, {
    theme: "blackbox",
  });
  return (
    <Themecontext.Provider value={{ value: themestate, dispatch: dispatch }}>
      <div className={`app ${themestate}`} id="app">
        <Navbar />
        <Intro />
        <Service />
        <Recentproject />
        <Committe />
        <Contactme />
        <Footer />
      </div>
    </Themecontext.Provider>
  );
}
