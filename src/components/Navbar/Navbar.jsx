import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import LinkedIn from "../../assets/linkedin.png";
import email from "../../assets/email.png";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SHEvolution
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/company/shevolution/"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://mail.google.com/mail/" target="_blank">
            <img style={{ width: "50px" }} src={email} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
