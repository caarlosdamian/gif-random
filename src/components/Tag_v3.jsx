import React, {useState } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

export const Tag_v3 = () => {
  const [tag, setTag] = useState("gatos");
  const { gif, fetchGif } = useFetchApi(tag);

  return (
    <div className="container">
      <h1>Gifs de {tag} </h1>
      <img src={gif} alt="" />
      <input type="text" onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Click me </button>
    </div>
  );
};
