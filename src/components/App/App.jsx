import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  //Requests the gallery list data from the server
  const getGalleryList = () => {
    console.log("Inside client side of get request");
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("Error in client side of get request", error);
        alert("Something went wrong while loading the photos!");
      });
  };

  //Creates an instance of the get request which runs once on the page load
  useEffect[
    (() => {
      getGalleryList();
    },
    [])
  ];

  //Returns the data array to the DOM
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList />
    </div>
  );
}

export default App;
