import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../scss/main.css";

import tree from "../assets/Images/tree.png";
import keyboard from "../assets/Images/keyboard.png";
import butterfly from "../assets/Images/butterfly.png";
import flower from "../assets/Images/flower.png";
import flower2 from "../assets/Images/flower2.png";
import cloud from "../assets/Images/cloud.png";
import bear from "../assets/Images/bear.png";
import cat from "../assets/Images/cat.png";

const Home = () => {
  const homeRef = useRef();

  const images1 = [keyboard, butterfly, bear, cat];
  const [img1Index, setImg1Index] = useState(0);
  const images2 = [tree, flower, cloud, flower2];
  const [img2Index, setImg2Index] = useState(0);

  useEffect(() => {
    gsap.to(".mainAni", {
      duration: 2,
      y: "0%",
      opacity: 1,
      stagger: 0.3,
      delay: 4,
      ease: "Expo.easeOut",
    });
    gsap.to(".scrollContainer", {
      duration: 2.5,
      x: "0%",
      opacity: 1,
      delay: 6,
      ease: "Expo.easeOut",
    });
  }, []);

  const handleHover = () => {
    gsap.from(".main_firstTextBox img", {
      y: -50,
      ease: "Expo.easeOut",
      duration: 1,
    });
    // 이미지 인덱스를 다음 이미지로 업데이트
    setImg1Index((prevIndex) => (prevIndex + 1) % images1.length);
  };
  const handleHover2 = () => {
    gsap.from(".secondTextBox1 img", {
      y: -50,
      ease: "Expo.easeOut",
      duration: 1,
    });
    // 이미지 인덱스를 다음 이미지로 업데이트
    setImg2Index((prevIndex) => (prevIndex + 1) % images2.length);
  };

  return (
    <div id="home" ref={homeRef}>
      <div className="main_FullBox">
        <div className="main_MainFullBox">
          <div className="main_TextBox">
            <div className="main_firstTextBox" onMouseEnter={handleHover}>
              <span className="mainAni">FRONTEND</span>
              <span className="mainAni">&</span>
              <div className="mainAni">
                <img src={images1[img1Index]} alt="mainImg_keyboard"></img>
              </div>
            </div>

            <div className="main_secondTextBox">
              <div className="secondTextBox1" onMouseEnter={handleHover2}>
                <div className="mainAni">
                  <img src={images2[img2Index]} alt="mainImg_tree"></img>
                </div>
                <span className="mainAni">CREATIVE</span>
              </div>
              <div className="scrollContainer">Scroll</div>
            </div>
            <div className="main_thirdTextBox">
              <span className="mainAni">DEVELOPER</span>
              <div className="main_ContactBox mainAni">
                <p>
                  <a href="mailto:zziboo3773@gmail.com">EMAIL</a>
                </p>
                <p>
                  <a href="https://github.com/ZziBooOooo" target="_blank">
                    GITHUB
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
