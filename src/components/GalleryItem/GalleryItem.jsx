import { useState } from "react";
import "./GalleryItem.css";

function GalleryItem({ item }) {
  //adds hook to a numerical variable counting number of times like button is clicked
  let [likesCount, setLikesCount] = useState(0);

  //increases like count by one each time the button is clicked
  const handleLike = () => {
    setLikesCount(likesCount + 1);
  };

  //adds hook to a Boolean variable displayImage with a default value of true
  let [displayImage, setDisplayImage] = useState(true);

  //links value of Boolean to a toggle function
  const handleToggle = () => {
    setDisplayImage(!displayImage);
  };

  return (
    <div class="gallery-item" key={item.id}>
      {/* calls handleToggle function to display either the image or the description 
        on a click anywhere within the div field */}
      {displayImage ? (
        <div>
          <img class="image" src={item.path} onClick={handleToggle} />
        </div>
      ) : (
        <div class="description">
          <p onClick={handleToggle}>{item.description} </p>
        </div>
      )}

      {/* calls handleLike function to increase the like count on a button click */}
      <div class="button-field">
        <button class="like-button" onClick={handleLike}>
          ❤️
        </button>
      </div>

      {/* displays like count */}
      <div class="likes-field">
        <p>{likesCount} people ❤️ this photo</p>
      </div>
    </div>
  );
}

export default GalleryItem;
