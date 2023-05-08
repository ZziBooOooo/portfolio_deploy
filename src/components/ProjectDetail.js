import React from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollTriggerProxy from "./ScrollTriggerProxy";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/detail.css";

import data from "../data/data";

import img0 from "../assets/Images/0.png";
import img1 from "../assets/Images/1.png";
import img2 from "../assets/Images/2.png";
import img3 from "../assets/Images/3.png";
import left from "../assets/Images/left.png";
import close from "../assets/Images/close.png";
import arrow from "../assets/Images/arrow.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const imgMap = {
    0: img0,
    1: img1,
    2: img2,
    3: img3,
  };

  const navigate = useNavigate();

  const [detailData, setDetailData] = useState("");
  gsap.registerPlugin(ScrollTrigger);
  let { id } = useParams();

  useEffect(() => {
    setDetailData(data[id]);
  }, [id]);

  useEffect(() => {
    gsap.to(".App", {
      // duration: 2,
      y: "0%",
      opacity: 1,
      ease: "Expo.easeOut",
    });
    gsap.to(".header_FullBox", {
      y: "-100%",
    });
    gsap.to(".cover-4", {
      x: "100%",
      ease: "Expo.easeOut",
      duration: 2.1,
      delay: 0.5,
    });
    gsap.to(".cover-5", {
      x: "100%",
      ease: "Expo.easeOut",
      duration: 1.8,
      delay: 0.8,
    });
    gsap.to(".header_FullBox2", {
      y: "0%",
      ease: "Expo.easeOut",
      duration: 1,
      delay: 1.6,
    });
  }, []);

  const openCoverMenu = () => {
    let t1 = gsap.timeline();

    t1.to(
      ".cover",
      {
        y: "100%",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      0.5
    );
    t1.to(
      ".coverMenu",
      {
        y: "0%",
        duration: 2.1,
        ease: "Expo.easeOut",
      },
      0.5
    );
    t1.to(
      ".cover-2",
      {
        y: "100%",
        duration: 2,
        ease: "Expo.easeOut",
      },
      0.7
    );
    t1.to(
      ".cover-3",
      {
        y: "100%",
        duration: 1.8,
        ease: "Expo.easeOut",
      },
      1
    )
      .fromTo(
        ".cover_menuBox",
        {
          y: -80,
          autoAlpha: 0,
        },
        { y: 0, ease: "Expo.easeOut", duration: 2.5, autoAlpha: 1 },
        1.8
      )
      .fromTo(
        ".cover_wiseBox",
        {
          y: -80,
          autoAlpha: 0,
        },
        { y: 0, ease: "Expo.easeOut", duration: 2.5, autoAlpha: 1 },
        2.1
      )
      .fromTo(
        ".nav_locations",
        {
          x: -50,
          autoAlpha: 0,
        },
        { x: 0, ease: "Expo.easeOut", duration: 1.8, autoAlpha: 1 },
        2.5
      );
  };

  const closeCoverMenu = () => {
    let t2 = gsap.timeline();
    t2.fromTo(
      ".cover_menuBox",
      {
        y: 0,
        autoAlpha: 1,
      },
      { y: -80, ease: "Expo.easeOut", duration: 2.5, autoAlpha: 0 },
      0.5
    )
      .fromTo(
        ".cover_wiseBox",
        {
          y: 0,
          autoAlpha: 1,
        },
        { y: -80, ease: "Expo.easeOut", duration: 2.3, autoAlpha: 0 },
        0.7
      )
      .fromTo(
        ".nav_locations",
        {
          x: -0,
          autoAlpha: 1,
        },
        { x: -50, ease: "Expo.easeOut", duration: 1, autoAlpha: 0 },
        0.9
      );

    t2.to(
      ".coverMenu",
      {
        y: "-100%",
        duration: 2.1,
        ease: "Expo.easeOut",
      },
      1.5
    );
    t2.to(
      ".cover-3",
      {
        y: "-100%",
        duration: 2,
        ease: "Expo.easeOut",
      },
      1.5
    );
    t2.to(
      ".cover-2",
      {
        y: "-100%",
        duration: 2,
        ease: "Expo.easeOut",
      },
      1.7
    );
    t2.to(
      ".cover",
      {
        y: "-100%",
        duration: 1.7,
        ease: "Expo.easeOut",
      },
      1.9
    );
  };

  useEffect(() => {
    let t2 = gsap.timeline();
    t2.to(".detail_imgWrap", {
      x: 0,
      autoAlpha: 1,
      delay: 2.3,
      ease: "Expo.inOut",
      duration: 0.8,
    }).to(".text1", {
      y: 0,
      autoAlpha: 1,
      delay: -0.7,
      ease: "Expo.inOut",
      stagger: 0.3,
      duration: 0.8,
    });
  }, []);

  const applyAnimation = () => {
    gsap.set(".detail_imgWrap", { autoAlpha: 0 });
    gsap.set(".text1", { autoAlpha: 0 });
    let t2 = gsap.timeline();
    gsap.fromTo(
      ".detail_imgWrap",
      // 시작값
      { x: -100, autoAlpha: 0 },
      // 종료값
      {
        x: 0,
        autoAlpha: 1,
        ease: "Expo.inOut",
        duration: 0.8,
      }
    );

    gsap.fromTo(
      ".text1",
      // 시작값
      { y: -50, autoAlpha: 0 },
      // 종료값
      {
        y: 0,
        autoAlpha: 1,
        delay: 0.3,
        ease: "Expo.inOut",
        stagger: 0.2,
        duration: 0.8,
      }
    );
  };

  const openMenu = () => {
    gsap.to(".project_menuBox", {
      x: 0,
      duration: 0.8,
      ease: "Expo.inOut",
    });
    gsap.to(".detail_box", {
      x: "-5%",
      duration: 0.8,
      ease: "Expo.inOut",
    });
    gsap.to(".ani2", {
      x: "0%",
      // duration: 1,
      stagger: 0.1,
      opacity: 1,
      delay: 0.6,
      ease: "Expo.inOut",
    });
  };
  const closeMenu = () => {
    gsap.to(".project_menuBox", {
      x: "100%",
      duration: 0.8,
      ease: "Expo.inOut",
    });
    gsap.to(".detail_box", {
      x: "0%",
      duration: 0.8,
      ease: "Expo.easeOut",
    });
    gsap.to(".ani2", {
      x: "20%",
      // duration: 1,
      stagger: 0.2,
      opacity: 0,

      ease: "Expo.inOut",
    });
  };

  function showCursor(event) {
    const mouseX = event.clientX; // 현재 마우스의 x 위치
    const mouseY = event.clientY; // 현재 마우스의 y 위치

    gsap.to(".hoverCursorBox", {
      display: "flex",
      scale: 1,
      ease: "Expo.inOut",
      autoAlpha: 1,
      duration: 0.5,
    });
  }
  function hideCursor() {
    gsap.fromTo(
      ".hoverCursorBox",
      {
        display: "flex",
        scale: 1,
        autoAlpha: 1,
        duration: 0.5,
      },
      {
        display: "none",
        scale: 0.5,
        autoAlpha: 0,
        ease: "Expo.inOut",
      }
    );
  }
  function trackCursor(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.to(".hoverCursorBox", {
      x: mouseX - 25,
      y: mouseY - 25,
      display: "flex",
      duration: 2,
      ease: "Expo.easeOut",
    });
  }
  return (
    <>
      <div className="detail_FULLBox">
        <div className="cover-5"></div>
        <div className="cover-4"></div>
        <div className="cover-3"></div>
        <div className="cover-2"></div>
        <div className="cover"></div>
        <div className="coverMenu">
          <button
            onClick={() => {
              closeCoverMenu();
            }}
          >
            <img src={close} alt="cover menu close image"></img>
          </button>
          <div className="cover_Content">
            <div className="cover_menuBox">
              <a
                onClick={() => {
                  window.location.href = "/04.Project_Portfolio";
                }}
              >
                Main Page
              </a>

              <p>My Projects</p>
              <p>Thanks!</p>
              <div className="nav_locations">
                <p>
                  {" "}
                  <a href="mailto:zziboo3773@gmail.com">Email</a>
                </p>
                <p>
                  <a href="https://github.com/ZziBooOooo" target="_blank">
                    Github
                  </a>
                </p>
              </div>
            </div>
            <div className="cover_wiseBox">
              <div>
                <p>
                  Patience and perseverance
                  <br /> are the keys to success.
                </p>
                <p>- Benjamin Franklin -</p>
              </div>
              <div>
                <p>개발자에게 오류는 항상 따라다니는 숙명이라고 생각합니다.</p>
                <p>오류를 해결할때까지 끝까지 물고 늘어지며,</p>
                <p>
                  결국 해결했을 때 얻게되는 만족감은 말로 표현할 수 없습니다.
                </p>
                <p>이 순간의 희열이 저를 개발의 길로 이끌었습니다.</p>
                <br />
                <p>작은 지식들이 쌓이고 쌓여 거대한 차이를 만들어냅니다.</p>
                <p>이 차이들이 어떤 결과를 이룰 수 있는지 기대합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="detail_fullBox">
          <div className="hoverCursorBox">
            <img src={arrow}></img>
          </div>
          <div className="header_FullBox2 ">
            <div className="header_Box">
              <div
                className="header_Logo2"
                onClick={() => {
                  window.location.href = "/portfolio_deploy";
                }}
              >
                J.MINSUH
              </div>
              <div
                className="header_MenuBox"
                onClick={() => {
                  openCoverMenu();
                }}
              >
                <button className="hamburger2">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <ScrollTriggerProxy />
          <div className="detail_box">
            <div
              className="detail_imgWrap"
              onClick={() => {
                window.open(detailData.projectURL, "_blank");
              }}
            >
              <img
                src={imgMap[id]}
                alt={`Project ${id}`}
                onMouseEnter={(event) => showCursor(event)}
                onMouseLeave={() => hideCursor()}
                onMouseMove={(event) => trackCursor(event)}
              />

              <div
                className="detail_githubLink"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(detailData.githubURL, "_blank");
                }}
              >
                Github
              </div>
            </div>

            <div className="detail_contentBox">
              <div className="datail_titleBox text1">
                <p className="detail_title ">Title</p>
                <p>{detailData.title}</p>
              </div>
              <div className="datail_toolBox text1">
                <p className="detail_title ">Tools</p>
                <p>{detailData.tool}</p>
              </div>

              <div className="detail_desBox text1">
                <p className="detail_title ">Description</p>
                <div>
                  {detailData &&
                    detailData.description.map((item, key) => {
                      return <p key={key}>{item}</p>;
                    })}
                </div>
              </div>
              <div className="detail_otherBox text1">
                <p className="detail_title ">Others</p>
                <div>
                  {detailData &&
                    Object.keys(detailData.issue).map((key) => (
                      <div key={key} className="datail_sentenceBox">
                        {detailData.issue[key].map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="arrowBox "
            onClick={() => {
              openMenu();
            }}
            onMouseEnter={() => {
              openMenu();
            }}
          >
            <img src={left} />
          </div>
          <div className={`project_menuBox`} onMouseLeave={() => closeMenu()}>
            <button
              onClick={() => {
                closeMenu();
              }}
            >
              <img src={close} className="ani2" />
            </button>
            <div className="smallMenuBox">
              <p className="ani2">
                OTHER
                <br />
                PROJECTS
              </p>
              <div>
                <p
                  onClick={() => {
                    navigate("/project/0");
                    applyAnimation();
                  }}
                  className="ani2"
                >
                  WEATHER LOOK
                </p>
                <p
                  onClick={() => {
                    navigate("/project/1");
                    applyAnimation();
                  }}
                  className="ani2"
                >
                  MONTH MOOD
                </p>
                <p
                  onClick={() => {
                    navigate("/project/2");
                    applyAnimation();
                  }}
                  className="ani2"
                >
                  MOA
                </p>
                <p
                  onClick={() => {
                    navigate("/project/3");
                    applyAnimation();
                  }}
                  className="ani2"
                >
                  PORTFOLIO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
