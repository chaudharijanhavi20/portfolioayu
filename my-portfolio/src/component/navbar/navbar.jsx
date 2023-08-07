import "./navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useContext } from "react";
import Themecontext from "../../context/Themecontext";
import { motion } from "framer-motion";
const headervariant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};
const inneritem = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, staggerChildren: 0.2 },
  },
};
const Navbar = () => {
  const togglenavbar = () => {
    const nav_header = document.querySelector(".nav");
    nav_header.classList.toggle("active");
  };
  const Themechange = useContext(Themecontext);
  console.log(Themechange.value);

  return (
    <nav>
      <motion.div
        className="nav"
        variants={headervariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="left" variants={inneritem}>
          <motion.div className="heading" variants={headervariant}>
            <h1>Ayush</h1>
          </motion.div>
          <motion.div
            className={`toggle`}
            onClick={() => Themechange.dispatch({ type: "changetheme" })}
            variants={headervariant}
          >
            <div className="dark">
              <DarkModeIcon />
            </div>
            <div className="light">
              <WbSunnyIcon />
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="right" variants={inneritem}>
          <ul className={`${Themechange.value}`}>
            <motion.li onClick={togglenavbar} variants={headervariant}>
              <a className="nav-link" href="#home">
                Home
              </a>{" "}
            </motion.li>
            <motion.li onClick={togglenavbar} variants={headervariant}>
              <a className="nav-link" href="#service">
                Service
              </a>{" "}
            </motion.li>
            <motion.li onClick={togglenavbar} variants={headervariant}>
              <a className="nav-link" href="#committe">
                Experience
              </a>{" "}
            </motion.li>
            <motion.li onClick={togglenavbar} variants={headervariant}>
              <a className="nav-link" href="https://github.com/ayusshh19">
                Portfolio
              </a>{" "}
            </motion.li>
            <motion.li onClick={togglenavbar} variants={headervariant}>
              <a className="nav-link" href="#contact">
                {" "}
                Contact us
              </a>
            </motion.li>
          </ul>
          <div className="mobile-navbar-btn" onClick={togglenavbar}>
            <MenuIcon name="menu-outline" className="mobile-nav-icon" />
            <CloseIcon name="close-outline" className="mobile-nav-icon" />
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};
export default Navbar;
