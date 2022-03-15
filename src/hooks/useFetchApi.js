import { useState, useEffect } from "react";
import axios from "axios";
export const useFetchApi = (tag) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url); //promise
    console.log(data.data.images);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, []);

  return {
    gif,
    fetchGif,
  };
};
