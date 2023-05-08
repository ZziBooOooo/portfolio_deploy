import React, { useEffect, useLayoutEffect, useRef } from "react";
// import "../scss/test.css";
import "../scss/about.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  const nameFullBox = useRef(null);
  const maskBox = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  useEffect(() => {
    nameFullBox.current.addEventListener("mousemove", (e) => {
      const x = e.clientX;

      gsap.to(maskBox.current, {
        x: x,
      });
      gsap.to(".menu-mask", {
        x: -x,
      });
    });
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: text1Ref.current,
        start: "top 60%",
        scroller: ".App",
        scrub: 1,
        onEnter: () => {
          gsap.to(text1Ref.current, {
            x: 0,
            opacity: 1,
            duration: 2.5,
            ease: "power4.out",
          });
          gsap.to(text2Ref.current, {
            x: 0,
            opacity: 1,
            duration: 2.5,
            ease: "power4.out",
          });
          // gsap.to(text3Ref.current, {
          //   x: 0,
          //   opacity: 1,
          //   duration: 2,
          //   ease: "power3.out",
          // });
          // gsap.to(text4Ref.current, {
          //   x: 0,
          //   opacity: 1,
          //   duration: 2,
          //   ease: "power3.out",
          // });
        },
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="about_FullBox" id="about">
      <div className="about_nameFullBox" ref={nameFullBox}>
        <ul className="menu">
          <li ref={text1Ref}>JO</li>
          <li ref={text2Ref}>MIN SUH</li>
        </ul>
        <div className="container" ref={maskBox}>
          <ul className="menu-mask">
            <li ref={text3Ref}>JO</li>
            <li ref={text4Ref}>MIN SUH</li>
          </ul>
        </div>
      </div>

      <div
        className="about_scrollTextBox"
        data-scroll
        data-scroll-speed="8"
        data-scroll-direction="vertical"
      >
        <p>My Portfolio!</p>
      </div>
      <div
        className="about_scrollTextBox2"
        data-scroll
        data-scroll-speed="6"
        data-scroll-direction="horizontal"
      >
        <p>Welcome To</p>
      </div>

      <div
        className="aboutFullBox"
        data-scroll
        data-scroll-speed="3"
        data-scroll-direction="horizontal"
      >
        <div className="about_scrollBoxWap">
          <div className="about_scrollBox">
            <div>
              <p>
                A<span>B</span>OUT
              </p>
              <p>-</p>
            </div>
            <div>
              <p>
                A<span>B</span>OUT
              </p>
              <p>-</p>
            </div>
            <div>
              <p>
                A<span>B</span>OUT
              </p>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
