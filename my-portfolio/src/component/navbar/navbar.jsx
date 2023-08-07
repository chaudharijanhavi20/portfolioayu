import "./navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useContext } from "react";
import Themecontext from "../../context/Themecontext";
import { motion } from "framer-motion";
const Navbar = () => {
  const togglenavbar = () => {
    const nav_header = document.querySelector(".nav");
    console.log(nav_header);
    nav_header.classList.toggle("active");
  };
  const Themechange = useContext(Themecontext);
  console.log(Themechange.value);

  return (
    <nav>
      <div className="nav">
        <div className="left">
          <motion.div
          initial={{y:-100,
          opacity:0}}
          animate={{y:0,
          opacity:1}}
          transition={{duration:1,delay:0.2}}
          className="heading">
            <h1>Ayush Shukla</h1>
          </motion.div>
          <div
            className={`toggle`}
            onClick={() => Themechange.dispatch({ type: "changetheme" })}
          >
            <div className="dark">
              <DarkModeIcon />
            </div>
            <div className="light">
              <WbSunnyIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <ul className={`${Themechange.value}`}>
            <li onClick={togglenavbar}>
              <a className="nav-link" href="#home">
                Home
              </a>{" "}
            </li>
            <li onClick={togglenavbar}>
              <a className="nav-link" href="#service">
                Service
              </a>{" "}
            </li>
            <li onClick={togglenavbar}>
              <a className="nav-link" href="#committe">
                Experience
              </a>{" "}
            </li>
            <li onClick={togglenavbar}>
              <a className="nav-link" href="https://github.com/ayusshh19">
                Portfolio
              </a>{" "}
            </li>
            <li onClick={togglenavbar}>
              <a className="nav-link" href="#contact">
                {" "}
                Contact us
              </a>
            </li>
          </ul>
          <div className="mobile-navbar-btn" onClick={togglenavbar}>
            <MenuIcon name="menu-outline" className="mobile-nav-icon" />
            <CloseIcon name="close-outline" className="mobile-nav-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
