import React from "react";
import "bootstrap/dist/js/bootstrap.js";

const Section3 = () => {
  return (
    <div style={{ backgroundColor: "#D9D9D91A" }} className="section3">
      <div
        id="multiItemCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#multiItemCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#multiItemCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#multiItemCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* <!-- Carousel Items --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
          </div>
          <div className="carousel-item">
          <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
          </div>
          <div className="carousel-item">
          <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
            <div>
              {/* Image */}
            </div>
          </div>
        </div>

        {/* <!-- Carousel Controls --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#multiItemCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#multiItemCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            fill="%23000"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Section3;
