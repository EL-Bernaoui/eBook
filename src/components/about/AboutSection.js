import { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

import aboutImage from "../../assets/iPad.png";
import AboutDetails from "./AboutDetail";

function AboutSection() {
  const myImg = useRef();
  const isInView = useInView(myImg);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotate: 0,
        x: 0,
        y: 0,
        transition: { duration: 1, type: "spring" },
      });
    }
  }, [isInView, controls]);

  return (
    <section className="about position-relative" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <AboutDetails />
          </div>
          <div className="col-12 col-lg-6">
            <motion.img
              src={aboutImage}
              alt="iPad"
              className="about_img"
              ref={myImg}
              initial={{ rotate: 45, x: 280, y: 290 }}
              animate={controls}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
