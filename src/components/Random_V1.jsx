import React, { useState, useEffect } from "react";
import axios from "axios";
export const Random_V1 = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [gif, setGif] = useState("");
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url); //promise
    console.log(data.data.images);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    // const fetchWithFetch = async () => {
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //   const res = await fetch(url);
    //   const { data } = await res.json();
    //   console.log(data);
    // };
    // fetchWithFetch();
    fetchGif();
  }, []);
  const handleClick = () => {
    fetchGif();
  };
  return (
    <div className="container">
      <h1>Rando Gif</h1>
      <img src={gif} alt="gif" width="500" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};
