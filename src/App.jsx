import React from "react";

import "./App.css";
import { Random_V1 } from "./components/Random_V1";
import { Random_V2 } from "./components/Random_v2";
import { Random_v3 } from "./components/Random_v3";
import { Random_v4 } from "./components/Random_v4";
import { Tag_v1 } from "./components/Tag_v1";
import { Tag_v2 } from "./components/Tag_v2";
import { Tag_v3 } from "./components/Tag_v3";

const App = () => {
  return (
    <>
      <h1>Random GIF Applicarion</h1>
      <div className="main-container">
        {/* <Random_V1 />
        <Tag_v1 /> */}
        {/* <Random_V2/>
        <Tag_v2/> */}
        <Random_v4/>
        <Tag_v3/>
      </div>
    </>
  );
};

export default App;
