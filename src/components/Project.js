import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/project.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import demo1 from "../assets/Images/0.png";
import demo2 from "../assets/Images/1.png";
import demo3 from "../assets/Images/2.png";
import demo4 from "../assets/Images/3.png";

const Project = ({ data }) => {
  const [menuId, setMenuId] = useState(null);
  const [imageOn, setImageOn] = useState(false);
  const imageWrapRef = useRef(null);

  let navigate = useNavigate();

  const handleMouseEnter = (event) => {
    setMenuId(event.target.id);
    // gsap.to(imageWrapRef.current, { duration: 0.3, opacity: 1, y: -20 });
  };

  useEffect(() => {
    if (imageWrapRef.current) {
      // const tl = gsap.timeline();
      gsap.to(".projectImgWrapBox", {
        scale: 1,
      });
      gsap.fromTo(
        ".myimg",
        {
          translateY: "-20%",
        },
        {
          translateY: 0,
          scale: 0.95,
          ease: "power4.InOut",
        }
      );
      gsap.to(".projectImgWrapBox", {
        scale: 1.1,
        delay: 0.5,
        duration: 0.3,
        ease: "power4.InOut",
      });
    }
  }, [imageOn]);
  useEffect(() => {
    if (imageWrapRef.current) {
      const tl = gsap.timeline();
      gsap.to(".projectImgWrapBox", {
        scale: 1,
      });
      gsap.fromTo(
        ".myimg",
        {
          translateY: "-20%",
        },
        {
          translateY: 0,
          scale: 0.95,
          ease: "power4.InOut",
        }
      );
      gsap.to(".projectImgWrapBox", {
        scale: 1.1,
        delay: 0.5,
        duration: 0.3,
      });
    }
  }, [menuId]);
  useEffect(() => {
    setTimeout(() => {
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".project_MenuBox",
          scroller: ".App",
          start: "top 70%",
          // markers: true,
          toggleActions: "restart none none reset",
        },
      });

      t3.from(".project_MenuBox hr", {
        scaleX: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.easeOut",
        transformOrigin: "left",
      }).to(".project_menuDiv", {
        y: 0,
        ease: "expo.easeOut",
        delay: -1,
        duration: 0.8,
        stagger: 0.1,
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="project_FullBox" id="project">
      <div
        className="project_textFullBox"
        data-scroll
        data-scroll-speed="4"
        data-scroll-direction="horizontal"
      >
        <div className="project_scrollBoxWap">
          <div className="project_scrollBox">
            <div>
              <p>
                P<span>R</span>OJECT
              </p>
              <p>-</p>
            </div>
            <div>
              <p>
                P<span>R</span>OJECT
              </p>
              <p>-</p>
            </div>
            <div>
              <p>
                P<span>R</span>OJECT
              </p>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="project_MenuBox"
        onMouseEnter={() => {
          setImageOn(true);
        }}
        onMouseLeave={() => {
          setImageOn(false);
          // gsap.to(imageWrapRef.current, { duration: 0.3, opacity: 0, y: 0 });
        }}
      >
        <div className="projectMenu">
          <div
            id="menu1"
            className="project_menuDiv"
            onMouseEnter={handleMouseEnter}
            onClick={() => {
              navigate(`/project/0`);
            }}
          >
            Weather Look
            <div>
              <span>Made by</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="projectMenu">
          <div
            id="menu2"
            className="project_menuDiv"
            onMouseEnter={handleMouseEnter}
            onClick={() => {
              navigate(`/project/1`);
            }}
          >
            Month Mood{" "}
            <div>
              <span>Made by</span>
              <span>React</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="projectMenu">
          <div
            id="menu3"
            className="project_menuDiv"
            onMouseEnter={handleMouseEnter}
            onClick={() => {
              navigate(`/project/2`);
            }}
          >
            Moa
            <div>
              <span>Made by</span>
              <span>Next JS</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="projectMenu">
          <div
            id="menu4"
            className="project_menuDiv"
            onMouseEnter={handleMouseEnter}
            onClick={() => {
              navigate(`/project/3`);
            }}
          >
            Portfolio
            <div>
              <span>Made by</span>
              <span>React</span>
            </div>
          </div>
        </div>
        <hr />

        {imageOn ? (
          <div className="projectImgWrapBox" ref={imageWrapRef}>
            <img
              src={
                menuId === "menu1"
                  ? demo1
                  : menuId === "menu2"
                  ? demo2
                  : menuId === "menu3"
                  ? demo3
                  : menuId === "menu4"
                  ? demo4
                  : ""
              }
              alt="project image thumbnail"
              className="myimg"
            />
            <div className="uncover">
              <div className="uncover_slice"></div>
              <div className="uncover_slice"></div>
              <div className="uncover_slice"></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
