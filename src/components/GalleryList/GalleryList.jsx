import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";

//Passes the array of data via props from the parent app.jsx file
function GalleryList({ galleryArray, getGalleryArray }) {
  console.log("Inside GalleryList component function");

  return (
    //loops through the array of data and passes each object within it
    //to the child component GalleryItem
    <Grid container spacing={12} rowSpacing={2} columnSpacing={1}>
      {galleryArray.map((item) => (
        <GalleryItem
          item={item}
          key={item.id}
          getGalleryArray={getGalleryArray}
        />
      ))}
    </Grid>
  );
}

export default GalleryList;
