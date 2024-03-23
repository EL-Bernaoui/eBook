import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import bookImage from "../../assets/Notebook-1.png";
import bookImageSmall from "../../assets/Notebook.png";
import HeroDetails from "./HeroDetails";

function HeroSection() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="hero vh-100">
      <div className="container">
        <div className="row align-items-center myH">
          <div className="col-12 col-lg-6">
            <motion.img
              src={screenWidth < 767 ? bookImageSmall : bookImage}
              alt="book"
              className="hero_img"
              initial={{ x: -300, top: 50 }}
              animate={{ x: 0, top: 50 }}
              transition={{ duration: 1, type: "spring" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <HeroDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
