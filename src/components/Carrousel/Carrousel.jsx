function Carrousel({ content }) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {content.map((img, index) => (
          <div
            key={img.title}
            className={`carousel-item${index === 0 ? " active" : "" }`}
          >
            <h3>{img.title}</h3>
            <img src={img.url} className="d-block w-100" alt="..." />
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
