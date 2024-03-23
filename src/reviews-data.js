import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import firstImg from "./assets/Juwel.png";
import secondImg from "./assets/Rasakw.png";
import thirdImg from "./assets/Yeeak.png";

const data = [
  {
    img: firstImg,
    name: `Juwel Zohan`,
    address: `Los Angels, California`,
    stars: [
      <FaStar key="star1" />,
      <FaStar key="star2" />,
      <FaStar key="star3" />,
      <FaStar key="star4" />,
      <FaStar key="star5" />,
    ],
    description:
      "Curabitur vel consectetur sapien. Cras volutpat non ex vitae maximus. ed at lobortis quam vel.",
  },
  {
    img: secondImg,
    name: `Raskw`,
    address: `Los Angels, California`,
    stars: [
      <FaStar key="star1" />,
      <FaStar key="star2" />,
      <FaStar key="star3" />,
      <FaStar key="star4" />,
      <FaStarHalfAlt key="star5" />,
    ],
    description:
      "Curabitur vel consectetur sapien. Cras volutpat non ex vitae maximus. ed at lobortis quam vel.",
  },
  {
    img: thirdImg,
    name: `Yeeak Lurbe`,
    address: `Los Angels, California`,
    stars: [
      <FaStar key="star1" />,
      <FaStar key="star2" />,
      <FaStar key="star3" />,
      <FaStar key="star4" />,
      <FaStar key="star5" />,
    ],
    description:
      "Curabitur vel consectetur sapien. Cras volutpat non ex vitae maximus. ed at lobortis quam vel.",
  },
];

export default data;
