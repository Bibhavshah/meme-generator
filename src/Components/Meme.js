import React, { useState, useEffect } from "react";
import "../styles.css";
// import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImgae: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  console.log(allMeme);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImgae: url,
      };
    });
  }

  // console.log(meme.topText + meme.bottomText);
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <div className="meme-image">
          <img src={meme.randomImgae}  />
        </div>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
