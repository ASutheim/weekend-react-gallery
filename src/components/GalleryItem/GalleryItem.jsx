import { useState } from "react";
import "./GalleryItem.css";
import axios from "axios";
import Grid from "@mui/material/Grid";

function GalleryItem({ item, getGalleryArray }) {
  //increases like count by one each time the button is clicked
  const handleLike = () => {
    console.log("Inside handleLike function");
    axios
      .put(`/gallery/like/${item.id}`)
      .then((response) => {
        console.log("response:", response);
        getGalleryArray();
      })
      .catch(function (error) {
        console.log("Error in updating likesCount", error);
      });
  };

  //adds hook to a Boolean variable displayImage with a default value of true
  let [displayImage, setDisplayImage] = useState(true);

  //links value of Boolean to a toggle function
  const handleToggle = () => {
    setDisplayImage(!displayImage);
  };

  return (
    <Grid item xs={3}>
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
        <p>{item.likes} people ❤️ this photo</p>
      </div>
    </Grid>
  );
}

export default GalleryItem;
