import React from "react";
import { motion } from "framer-motion";
import "./NavbarMarquee.scss";

function NavbarMarquee() {
  return (
    <div className="NavbarMarquee">
      <div className="container marq-container">
        <motion.div
          className="marq-content"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeatType: "loop",
            repeat: Infinity,
            ease: "linear",
            loop: Infinity,
          }}
        >
          <p>Introductory 10% off</p>
          <p>Eid-Al-Adha Sale</p>
          <p>2000+ Happy Customers</p>
        </motion.div>

        <motion.div
          className="marq-content"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeatType: "loop",
            repeat: Infinity,
            ease: "linear",
            loop: Infinity,
          }}
        >
          <p>Introductory 10% off</p>
          <p>Eid-Al-Adha Sale</p>
          <p>2000+ Happy Customers</p>
        </motion.div>

        <motion.div
          className="marq-content"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeatType: "loop",
            repeat: Infinity,
            ease: "linear",
            loop: Infinity,
          }}
        >
          <p>Introductory 10% off</p>
          <p>Eid-Al-Adha Sale</p>
          <p>2000+ Happy Customers</p>
        </motion.div>
      </div>
    </div>
  );
}

export default NavbarMarquee;
