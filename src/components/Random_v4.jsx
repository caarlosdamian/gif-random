import React from "react";
import { useFetchApi } from "../hooks/useFetchApi";

export const Random_v4 = () => {
  const { gif, fetchGif } = useFetchApi();
  return (
    <div className="container">
      <h1>Random_v4</h1>
      <img src={gif} alt="random-gift" />
      <button onClick={fetchGif}>Nuevo gif</button>
    </div>
  );
};
