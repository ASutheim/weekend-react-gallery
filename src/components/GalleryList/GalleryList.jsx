import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryArray }) {
  console.log("Inside GalleryList component function");
  return (
    <div>
      {galleryArray.map((item) => (
        <GalleryItem item={item} />
      ))}
    </div>
  );
}

export default GalleryList;
