import React, { useLayoutEffect, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../scss/header.css";
import close from "../assets/Images/close.png";
import { tab } from "@testing-library/user-event/dist/tab";
const Header = () => {
  const headerRef = useRef(null);
  let navigate = useNavigate();

  useLayoutEffect(() => {
    const header = headerRef.current;

    setTimeout(() => {
      const showAnim = gsap
        .from(header, {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        scroller: ".App",
        scrub: 1,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
      ScrollTrigger.refresh();
      // console.log(showAnim);
    }, 1000);

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    gsap.to(".header_Logo", {
      duration: 1.6,
      x: "0%",
      opacity: 1,
      delay: 3.8,
      ease: "Expo.easeOut",
    });
  }, []);

  // useEffect(() => {
  //   gsap.to(".App", {
  //     // duration: 2,
  //     y: "0%",
  //     opacity: 1,
  //     ease: "Expo.easeOut",
  //   });

  // }, []);

  const openOverlayMenu = () => {
    let t1 = gsap.timeline();

    t1.to(
      ".overlay",
      {
        y: "100%",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      0.5
    );
    t1.to(
      ".overlayMenu",
      {
        y: "0%",
        duration: 2.1,
        ease: "Expo.easeOut",
      },
      0.5
    );
    t1.to(
      ".overlay-2",
      {
        y: "100%",
        duration: 2,
        ease: "Expo.easeOut",
      },
      0.7
    );
    t1.to(
      ".overlay-3",
      {
        y: "100%",
        duration: 1.8,
        ease: "Expo.easeOut",
      },
      1
    )
      .fromTo(
        ".overlay_menuBox",
        {
          y: -80,
          autoAlpha: 0,
        },
        { y: 0, ease: "Expo.easeOut", duration: 2.5, autoAlpha: 1 },
        1.8
      )
      .fromTo(
        ".overlay_wiseBox",
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

  const closeOverlayMenu = () => {
    let t2 = gsap.timeline();
    t2.fromTo(
      ".overlay_menuBox",
      {
        y: 0,
        autoAlpha: 1,
      },
      { y: -80, ease: "Expo.easeOut", duration: 2.5, autoAlpha: 0 },
      0.5
    )
      .fromTo(
        ".overlay_wiseBox",
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
      ".overlayMenu",
      {
        y: "-100%",
        duration: 2.1,
        ease: "Expo.easeOut",
      },
      1.5
    );
    t2.to(
      ".overlay-3",
      {
        y: "-100%",
        duration: 2,
        ease: "Expo.easeOut",
      },
      1.5
    );
    t2.to(
      ".overlay-2",
      {
        y: "-100%",
        duration: 2,
        ease: "Expo.easeOut",
      },
      1.7
    );
    t2.to(
      ".overlay",
      {
        y: "-100%",
        duration: 1.7,
        ease: "Expo.easeOut",
      },
      1.9
    );
  };

  function goProject() {
    setTimeout(() => {
      navigate("/project/1");
    }, 2000);
  }
  return (
    <>
      <div className="overlay-3"></div>
      <div className="overlay-2"></div>
      <div className="overlay"></div>
      <div className="overlayMenu">
        <button
          onClick={() => {
            closeOverlayMenu();
          }}
        >
          <img src={close} alt="overlay menu close image"></img>
        </button>
        <div className="overlay_Content">
          <div className="overlay_menuBox">
            <p>Main Page</p>
            <a
              onClick={() => {
                closeOverlayMenu();
                goProject();
              }}
            >
              My Projects
            </a>
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
          <div className="overlay_wiseBox">
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
              <p>결국 해결했을 때 얻게되는 만족감은 말로 표현할 수 없습니다.</p>
              <p>이 순간의 희열이 저를 개발의 길로 이끌었습니다.</p>
              <br />
              <p>작은 지식들이 쌓이고 쌓여 거대한 차이를 만들어냅니다.</p>
              <p>이 차이들이 어떤 결과를 이룰 수 있는지 기대합니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header_FullBox " ref={headerRef}>
        <div className="header_Box">
          <div
            className="header_Logo"
            onClick={() => {
              window.location.href = "/portfolio_deploy";
            }}
          >
            J.MINSUH
          </div>
          <div
            className="header_MenuBox"
            onClick={() => {
              openOverlayMenu();
            }}
          >
            <button className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
