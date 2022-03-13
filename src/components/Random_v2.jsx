import React from "react";
import { useGif } from "../hooks/useGif";

export const Random_V2 = () => {

  const { fetchGif, gif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="gif" width="500" />
      <button onClick={() => fetchGif()}>CLICK FOR NEW</button>
    </div>
  );
};
