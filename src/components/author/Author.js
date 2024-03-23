import { motion } from "framer-motion";

import { IoIosCalendar } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaCompass } from "react-icons/fa";

import authorImg from "../../assets/author.jpg";

function Author() {
  return (
    <section className="author" id="author">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <div className="author_details">
              <div className="head d-flex align-items-center mb-3">
                <motion.img
                  src={authorImg}
                  alt="author Marry Boast"
                  className="rounded-circle"
                  initial={{ rotate: -90, x: -150, scale: 0.7 }}
                  whileInView={{ rotate: 0, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                />
                <div className="more">
                  <motion.h3
                    className="fw-bold m-0"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    Jhone mKeury
                  </motion.h3>
                  <p className="author_pref fs-4">
                    Typographer, Writer Coffee Addict...
                  </p>
                </div>
              </div>
              <h5 className="my-3 fs-4">
                Good typog­raphy is needed feebly dining oh talked wisdom oppose
                at. Applauded use attempted strangers concluded.
              </h5>
              <p className="mt-5">
                Ankkurissa seuratessa ai on et porstuasta en pirullisen. Ei ne
                ristiin paassyt he eikohain isomman tulossa uudesta. Nyt ota
                jattaa viinan edessa kai. Your Culture is your brand.Kuunnella
                ainaisena se kajuttaan ja asiakseen. Voi sylkea kay jos auttaa
                saalla nuo siella saukko sisaan. Kuin no koko ihan joka te mina
                he ne.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="author-presentations">
              <h2 className="m-0 fw-bold">Book Presentations</h2>
              <p className="fs-4 mb-5">Stop by and meet the author</p>
              <div className="box">
                <h3 className="fs-4 fw-normal">
                  Italy National Book Fair, 2015
                </h3>
                <div className="date d-flex align-items-center gap-4">
                  <IoIosCalendar />
                  <span>06/02/15</span>
                  <CiClock2 />
                  <span>8:30PM</span>
                  <FaCompass />
                </div>
              </div>
              <div className="box">
                <h3 className="fs-4 fw-normal">Mumbai Writathon, 2015</h3>
                <div className="date d-flex align-items-center gap-4">
                  <IoIosCalendar />
                  <span>06/02/15</span>
                  <CiClock2 />
                  <span>8:00PM</span>
                  <FaCompass />
                </div>
              </div>
              <h3 className="canceled">
                <del>New York Expo 2015,</del>
              </h3>
              <h3 className="canceled">
                <del>Milan Book Fair 2015,</del>
              </h3>
              <h3 className="canceled">
                <del>Paris Dreamhack 2014</del>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;
