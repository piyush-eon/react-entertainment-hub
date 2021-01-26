import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300 } from "../../config/config";
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={
          c.profile_path
            ? `${img_300}/${c.profile_path}`
            : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
        }
        alt={c?.name}
        onDragStart={handleDragStart}
        className="yours-custom-class"
      />
      <b style={{ textAlign: "center" }}>{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=26ba5e77849587dbd7df199727859189&language=en-US`
    );
    setCredits(data.cast);
  };

  console.log(credits);

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
    />
  );
};

export default Gallery;
