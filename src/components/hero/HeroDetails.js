import { motion } from "framer-motion";

function HeroDetails() {
  return (
    <div className="details">
      <h1 className="fw-bold">Notebook Mockup</h1>
      <h2>Review of typefaces with examples.</h2>
      <p>
        Our all time best selling book is now available in a revised and
        expanded second edition. Notebook Mockup Vol2 is the definitive guide to
        using type in visual communication, from the printed page to PC screen.
      </p>
      <form
        action=""
        className="d-flex align-items-center gap-4 flex-wrap justify-content-center"
      >
        <motion.a
          href="about"
          className="about-btn"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        >
          About The Book
        </motion.a>
        <motion.a
          href="purchase"
          className="purchase-btn"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Purchase eBook $99
        </motion.a>
      </form>
    </div>
  );
}

export default HeroDetails;
