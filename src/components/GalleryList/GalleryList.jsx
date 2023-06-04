import GalleryItem from "../GalleryItem/GalleryItem";

//Passes the array of data via props from the parent app.jsx file
function GalleryList({ galleryArray, getGalleryArray }) {
  console.log("Inside GalleryList component function");

  return (
    //loops through the array of data and passes each object within it
    //to the child component GalleryItem
    <div>
      {galleryArray.map((item) => (
        <GalleryItem
          item={item}
          key={item.id}
          getGalleryArray={getGalleryArray}
        />
      ))}
    </div>
  );
}

export default GalleryList;
