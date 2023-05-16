import { Children } from "react";

function Carrousel({ children }) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {Children.map(children, (slide, index) => (
          <div className={`carousel-item${index === 0 ? " active" : ""}`}>
            {slide}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrousel;
