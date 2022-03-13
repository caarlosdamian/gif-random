import React, { useState } from "react";
import { useGif } from "../hooks/useGif";

export const Tag_v2 = () => {
  const [tag, setTag] = useState("dogs");

  const { fetchGif, gif } = useGif(tag);

  return (
    <div className="container">
      <h1>Rando {tag} Gif</h1>
      <img src={gif} alt="gif" width="500" />
      <input type="text" onChange={(e) => setTag(e.target.value)} value={tag} />
      <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
    </div>
  );
};
