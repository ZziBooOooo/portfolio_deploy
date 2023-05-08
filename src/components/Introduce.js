import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../scss/about.css";

import design2 from "../assets/Images/design.gif";
import exper from "../assets/Images/exper.gif";
import exper2 from "../assets/Images/exper2.gif";
import passion from "../assets/Images/passion.gif";

const Introduce = () => {
  gsap.registerPlugin(ScrollTrigger);
  const introFullRef = useRef(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      const introFullBox = introFullRef.current;
      ScrollTrigger.create({
        trigger: introFullBox,
        // markers: true,
        start: "top 60%",
        end: "bottom 40%",
        scroller: ".App", //locomotive-scroll
        scrub: 1,

        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "rgb(11,11,11)",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".I_Section_Title", {
            color: "rgb(249,249,249)",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".skill_TitleBox", {
            color: "rgb(249,249,249)",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".about_scrollBox p", {
            color: "rgb(249,249,249)",
            ease: "power4.out",
            duration: 3,
          });
        },
        onLeave: () => {
          gsap.to("body", {
            backgroundColor: "white",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".I_Section_Title", {
            color: "initial",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".skill_TitleBox", {
            color: "initial",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".about_scrollBox p", {
            color: "initial",
            ease: "power4.out",
            duration: 3,
          });
        },
        onEnterBack: () => {
          gsap.to("body", {
            backgroundColor: "rgb(11,11,11)",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".I_Section_Title", {
            color: "rgb(249,249,249)",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".skill_TitleBox", {
            color: "rgb(249,249,249)",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".about_scrollBox p", {
            color: "rgb(249,249,249)",
            ease: "power4.out",
            duration: 3,
          });
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "white",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".I_Section_Title", {
            color: "initial",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".skill_TitleBox", {
            color: "initial",
            ease: "power4.out",
            duration: 3,
          });
          gsap.to(".about_scrollBox p", {
            color: "initial",
            ease: "power4.out",
            duration: 3,
          });
        },
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".reveal",
          scroller: ".App",
          start: "top center",
          toggleActions: "restart none none reset",
        },
      });
      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".reveal2",
          scroller: ".App",
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });
      let t22 = gsap.timeline({
        scrollTrigger: {
          trigger: ".reveal22",
          scroller: ".App",
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".reveal3",
          scroller: ".App",
          start: "top center",
          toggleActions: "restart none none reset",
        },
      });

      tl.set(".reveal", { autoAlpha: 1 })
        .from(".reveal", 1.5, {
          xPercent: -100,
          ease: "power2.out",
        })
        .from(".reveal img", 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: "power2.out",
        })
        .to(".content1", {
          y: 0,
          opacity: 1,
          delay: -1,
          duration: 2.5,
          ease: "Expo.easeOut",
        });
      t2.set(".reveal2", { autoAlpha: 1 })
        .from(".reveal2", 1.5, {
          yPercent: 100,
          ease: "power2.out",
        })
        .from(".reveal2 img", 1.5, {
          yPercent: -100,
          scale: 1.15,
          delay: -1.5,
          ease: "power2.out",
        })
        .to(".content2", {
          x: 0,
          opacity: 1,
          delay: -1,
          duration: 2.5,
          ease: "Expo.easeOut",
        });
      t22
        .set(".reveal22", { autoAlpha: 1 })
        .from(".reveal22", 1.5, {
          yPercent: 100,
          ease: "power2.out",
        })
        .from(".reveal22 img", 1.5, {
          yPercent: -100,
          scale: 1.3,
          delay: -1.5,
          ease: "power2.out",
        });

      t3.set(".reveal3", { autoAlpha: 1 })
        .from(".reveal3", 1.5, {
          xPercent: -100,
          ease: "power2.out",
        })
        .from(".reveal3 img", 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: "power2.out",
        })
        .to(".content3", {
          y: 0,
          opacity: 1,
          delay: -1,
          duration: 2.5,
          ease: "Expo.easeOut",
        });

      let t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Introduce_textBox",
          scroller: ".App",
          start: "top 50%",
          toggleActions: "restart none none reset",
        },
      });

      t4.to(".Introduce_leftTextBox", {
        y: 0,
        ease: "Expo.easeOut",
        autoAlpha: 1,
        duration: 3,
      });

      t4.to(".Introduce_rightTextBox ", {
        y: 0,
        ease: "Expo.easeOut",
        autoAlpha: 1,
        duration: 3,
        delay: -2.7,
      });

      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="Introduce_FullBox" ref={introFullRef}>
      <div className="Introduce_ContentBox">
        <section className="Introduce_textBox">
          <div className="Introduce_leftTextBox">
            <p> 조 민 서 </p>
            <div>
              <p>JO MIN SUH</p>
              <p>1999.12.31</p>
              <p>경기도 하남시, 대한민국</p>
            </div>
          </div>
          <div className="Introduce_rightTextBox">
            <p>: Creative</p>
            <div>
              <p>안녕하세요. </p>
              <p>
                창의적인 아이디어를 현실화하는 프론트엔드 개발자 조민서 입니다.
              </p>
              <p>
                상상하는 모든 것을 직접 만들 수 있다는 프로그래밍의 매력에 빠져{" "}
              </p>
              <p>개발자의 길을 선택하게 되었습니다.</p>
            </div>
          </div>
        </section>
        <section className="Introduce_Section Section1">
          <div className="container">
            <div className="reveal">
              <img src={design2} />
            </div>
          </div>
          <div className="I_Section_Content content1">
            <div className="Title1">
              <p className="I_Section_Title ">Design</p>
            </div>

            <div className="I_Section_textBox TextBox1">
              <p>웹 디자인에 관심을 가지고 있습니다.</p>
              <p>이는 사용자경험의 개선과</p>
              <p>시각적 품질향상에 도움이 된다고 생각합니다.</p>
              <p>웹 디자인에 대한 이해를 가진 프론트엔드 개발자는</p>
              <p>디자이너와의 협업을 더욱 원활하게</p>
              <p>이룰 수 있다고 생각합니다.</p>
            </div>
          </div>
        </section>
        <section className="Introduce_Section Section2">
          <div className="section2_imgWrap">
            <div className="container">
              <div className="reveal2">
                <img src={exper2} />
              </div>
            </div>
            <div className="container2">
              <div className="reveal22">
                <img src={exper} />
              </div>
            </div>
          </div>
          <div className="I_Section_Content content2">
            <div className="Title1">
              <p className="I_Section_Title ">
                Best
                <br />
                Experience
              </p>
            </div>

            <div className="I_Section_textBox TextBox1">
              <p>사용자 친화적인 UI/UX와</p>
              <p>인터랙티브 한 웹 구현을 좋아합니다</p>
              <p>사용자에게 최고의 경험을 </p>
              <p>주는 것을 목표로 하고 있습니다</p>
            </div>
          </div>
        </section>
        <section className="Introduce_Section Section3">
          <div className="container">
            <div className="reveal3">
              <img src={passion} />
            </div>
          </div>
          <div className="I_Section_Content content3">
            <div className="Title1">
              <p className="I_Section_Title ">Passion</p>
            </div>

            <div className="I_Section_textBox TextBox1">
              <p>새로운 기술과 개발에 대해</p>
              <p>블로그, 유튜브 등으로 접하고 있습니다.</p>
              <p>꾸준한 학습과 도전으로 끊임없이</p>
              <p>발전하는 프론트엔드 개발자가 되고자 합니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduce;
