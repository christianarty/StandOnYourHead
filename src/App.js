import React, { useState } from "react";
import "./App.scss";
import theBosMachine from "./assets/images/baus.jpeg";
import elToroLoco from "./assets/images/towhisky.jpg";
import tweettweet from "./assets/images/tweettweet.svg";
import theSource from './assets/images/github.png'
const App = () => {
  const [isflipped, setFlipped] = useState(false);

  const flipThatSucker = () => {
    setFlipped(!isflipped);
  };

  const determineLink = () => {
    const link = document.getElementById("twitterFingers");
    const twitter = "https://twitter.com";
    if (isflipped) {
      link.href = `${twitter}/stolinski`;
    } else {
      link.href = `${twitter}/wesbos`;
    }
  };

  return (
    <div id="upsideDown" className={`App ${isflipped ? "onHead" : ""} `}>
      <header className={`App-header `}>
        <h1 style={{}}>Stand on your head</h1>
        <p>Best Problem Solving Tool Out There</p>
        <div className="faces">
          <img
            src={isflipped ? elToroLoco : theBosMachine}
            alt="Either a person Wes Bos or of Scott Tolinski"
          ></img>{" "}
        </div>

        <div
          className='twitter'
        >
          <a id="twitterFingers" href="#!">
            <img
              src={tweettweet}
              alt="A twitter icon linking to respective twitters"
              onClick={determineLink}
              style={{border:'0.5px solid white', borderRadius:'5px'}}
            ></img>
          </a>
        </div>
        <button
          className={`flipper ${isflipped ? "onHead" : ""}`}
          onClick={flipThatSucker}
        >
          {isflipped ? "You flipped it. You proud?" : "Totally doesn't flip the face"}
        </button>
      </header>
      <footer>
      <div><a href='https://www.github.com/christianarty'><img src={theSource} alt='Link to the source repo'></img></a></div>
      by Christian Arty
      </footer>
    </div>
  );
};

export default App;
