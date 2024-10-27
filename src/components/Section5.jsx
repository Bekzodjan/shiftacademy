import React from "react";

const Section5 = () => {
  return (
    <div className="section5">
      <h1>O’QUVCHILARNING FIKRLARI</h1>
      <div
        id="multiItemCarousel1"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#multiItemCarousel1"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#multiItemCarousel1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#multiItemCarousel1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* <!-- Carousel Items --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
            <div>
              <h1>Video</h1>
              <button>Name</button>
            </div>
          </div>
        </div>

        {/* <!-- Carousel Controls --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#multiItemCarousel1"
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
          data-bs-target="#multiItemCarousel1"
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

export default Section5;
