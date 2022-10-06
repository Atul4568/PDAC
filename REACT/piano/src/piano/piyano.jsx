import React, { useState } from "react";

export const Piyano = () => {
  const [name, setName] = useState("Piyano");
  return (
    <div className="piano">
            <audio src={"Piano/"+ name + ".mp3"}  alt={name} controls autoPlay style={{display:"none"}}></audio>
      <button onClick={() => setName("sa")}  className="white-key" >A</button>
      <button onClick={() => setName("Ab4")} className="black-key" id="black1">A1</button>
      <button onClick={() => setName("B4")}  className="white-key">B</button>
      <button onClick={() => setName("Bb4")} className="black-key" id="black2">B1</button>
      <button onClick={() => setName("C4")}  className="white-key">C</button>
      <button onClick={() => setName("C5")}  className="white-key">CC1</button>
      <button onClick={() => setName("D4")}  className="black-key" id="black3">D4</button>
      <button onClick={() => setName("Db4")} className="white-key">F</button>
      <button onClick={() => setName("D5")}  className="white-key">E</button>
      <button onClick={() => setName("Db5")} className="black-key" id="black4">D1</button>
      <button onClick={() => setName("E4")}  className="white-key">I</button>
      <button onClick={() => setName("Eb4")} className="black-key" id="black5">E1</button>
      <button onClick={() => setName("E5")}  className="white-key">J</button>
      <button onClick={() => setName("Eb5")} className="white-key">K</button>
      <button onClick={() => setName("F4")}  className="black-key" id="black6">F5</button>
      <button onClick={() => setName("G4")}  className="white-key">L</button>
      <button onClick={() => setName("Gb4")}  className="black-key" id="black7">G1</button>
    </div>
  );
};
