import React, { useState, useEffect } from "react";
import axios from "axios";
export const Tag_v1 = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState('dogs')
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
    fetchGif(tag);
  }, []);
  const handleClick = () => {
    fetchGif(tag);
  };
  return (
    <div className="container">
      <h1>Rando {tag} Gif</h1>
      <img src={gif} alt="gif" width="500" />
      <input type="text" onChange={(e)=>setTag(e.target.value)} value={tag} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};
