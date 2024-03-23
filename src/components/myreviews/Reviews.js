import { FaStar } from "react-icons/fa";

import data from "../../reviews-data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="head d-flex justify-content-between align-items-center mb-5">
          <h2>Reviews</h2>
          <div className="info d-flex justify-content-end align-items-center flex-wrap ">
            <p className="m-0">4/5(17 Reviews)</p>
            <div className="stars d-flex align-items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <div className="reviews-list">
          <Slider {...settings}>
            {data.map((data) => {
              return (
                <div className="cart text-center " key={data.name}>
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-circle"
                  />
                  <h4>{data.name}</h4>
                  <address>{data.address}</address>
                  <div className="stars d-flex justify-content-center align-items-center">
                    {data.stars}
                  </div>
                  <p className="description">{data.description}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
