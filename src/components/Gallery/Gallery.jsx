import ImageCard from "../ImageCard";
import galleryMock from "../../assets/galleryMock";
import "./index.css";

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Gallery__content">
        {galleryMock.map((image) => (
          <ImageCard key={image.id} data={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
