import React, { useEffect, useState } from "react";
import axios from "axios";

export const Random_v3 = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [gif, setGif] = useState("");
  const getGifs = async () => {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await response;
    setGif(data.data.images.downsized_medium.url);
  };
  useEffect(() => {
    getGifs();
  }, []);

  const handleClick = () => {
    getGifs();
  };

  return (
    <div className="container">
      <h1>Random_v3</h1>
      <img src={gif} alt="random-gift" />
      <button onClick={handleClick}>Nuevo gif</button>
    </div>
  );
};
