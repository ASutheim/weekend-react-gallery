import { useState } from "react";
import './GalleryItem.css'

function GalleryItem({ item }) {
  return (
    <div class="gallery-item" key={item.id}>
      <img class="image" src={item.path}/>
      <div class="description">
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
