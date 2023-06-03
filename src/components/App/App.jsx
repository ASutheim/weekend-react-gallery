import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [galleryArray, setGalleryArray] = useState([]);

  //Requests the gallery list data from the server
  const getGalleryArray = () => {
    console.log("Inside client side of get request");
    axios
      .get("/gallery")
      //saves response data to the gallery array variable
      .then((response) => {
        setGalleryArray(response.data);
      })
      .catch((error) => {
        console.log("Error in client side of get request", error);
        alert("Something went wrong while loading the photos!");
      });
  };

  //Creates an instance of the get request which runs once on the page load
  useEffect(() => {
    getGalleryArray();
  }, []);


  //Appends all the things to the DOM 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* Passes the array of data from the get request to the GalleryList component via props*/}
      <GalleryList galleryArray={galleryArray} />
    </div>
  );
}

export default App;
