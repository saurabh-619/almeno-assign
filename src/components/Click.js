import React, { useState } from "react";
import foodBig from "../images/foodBig.png";
import camera from "../images/camera.svg";
import { Link } from "react-router-dom";
import { Howl } from "howler";

const Click = ({ playSound }) => {
  console.log(playSound);
  var clickSound = new Howl({
    src: ["../sounds/button-click.mp3"],
  });
  const [photoTaken, setPhotoTaken] = useState(false);
  const handleButtonClick = (e) => {
    if (playSound) {
      clickSound.play();
    } else {
      clickSound.stop();
    }
    setPhotoTaken(!photoTaken);
  };

  return (
    <div id="click">
      <div className="screen">
        <div className="wrapper">
          <div className="heading">Click a picture of your meal</div>
          <div className="vessel">
            <img src={foodBig} alt="" />
          </div>
          {!photoTaken ? (
            <Link
              className="camera-button btn"
              to={{ pathname: "/click" }}
              onClick={handleButtonClick}
            >
              <img src={camera} alt="" />
            </Link>
          ) : (
            <div className="button-wrapper btn">
              <Link
                className="share-button"
                to={{ pathname: "/feed" }}
                onClick={() => {
                  if (playSound) {
                    clickSound.play();
                  } else {
                    clickSound.stop();
                  }
                }}
              >
                Share with Milo
              </Link>
              <Link className="take-button btn" onClick={handleButtonClick}>
                Take again
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Click;