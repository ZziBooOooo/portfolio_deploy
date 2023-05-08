import React, { useLayoutEffect } from "react";
import "../scss/skill.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skill = () => {
  useLayoutEffect(() => {
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: ".skill_TitleBox",
        start: "top 40%",
        scroller: ".App",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          gsap.to(".skill_Title1", {
            x: 0,
            opacity: 1,
            duration: 2.5,
            ease: "Expo.easeOut",
          });
          gsap.to(".skill_Title2", {
            x: 0,
            opacity: 1,
            duration: 2.5,
            ease: "Expo.easeOut",
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".skill_ContentBox",
        start: "top 40%",
        scroller: ".App",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          gsap.to(".subTitle1", {
            y: 0,
            opacity: 1,
            duration: 2.5,
            ease: "Expo.easeOut",
          });
        },
      });
      ScrollTrigger.create({
        trigger: ".skillBox1",
        start: "top 40%",
        scroller: ".App",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          gsap.to(".skillBox1", {
            opacity: 1,
            duration: 2,
            stagger: 0.2,
            ease: "Expo.easeOut",
          });
          gsap.to(".skillBox1 .skill_Section_FullDiv", {
            x: 0,
            opacity: 1,
            duration: 2,
            stagger: 0.2,
            ease: "Expo.easeOut",
          });
        },
      });
      ScrollTrigger.create({
        trigger: "hr",
        start: "top 60%",
        scroller: ".App",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          gsap.to("hr", {
            width: "100%",
            opacity: 1,
            duration: 3,
            ease: "Expo.easeOut",
          });
        },
      });
      ScrollTrigger.create({
        trigger: ".skillBox2",
        start: "top 50%",
        scroller: ".App",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          gsap.to(".skillBox2 ", {
            opacity: 1,
            duration: 2,
            stagger: 0.2,
            ease: "Expo.easeOut",
          });
          gsap.to(".skillBox2 .skill_Section_FullDiv", {
            x: 0,
            opacity: 1,
            duration: 2,
            stagger: 0.2,
            ease: "Expo.easeOut",
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".subTitle2",
        start: "top 40%",
        scroller: ".App",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          gsap.to(".subTitle2", {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "Expo.easeOut",
          });
        },
      });
    }, 1000);
  }, []);
  return (
    <div className="skill_FullBox">
      <div className="skill_TitleBox">
        <div className="skill_Title1">
          <p>
            MY S<span>K</span>ILLS
          </p>
        </div>
        <div className="skill_Title2">
          <p>
            & TOO<span>L</span>S
          </p>
        </div>
      </div>
      <div className="skill_ContentBox">
        <div className="skill_SubTitleBox subTitle1">
          <p>SKILLS</p>
          <p>Skills learned for </p>
          <p>front-end development</p>
        </div>
        <div className="skill_Section1 skillBox1">
          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">01</div>
            <div className="skill_alphaBox">
              <div>
                <p>H</p>
                <p>H</p>
                <p>H</p>
              </div>
              <div className="skill_des_textBox">
                <p>HTML5</p>
                <p>시맨틱 태그에 대해</p>
                <p>알고있으며 레이아웃의</p>
                <p>구조를 잡을 수 있습니다</p>
              </div>
            </div>
          </div>
          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">02</div>
            <div className="skill_alphaBox">
              <div>
                <p>C</p>
                <p>C</p>
                <p>C</p>
              </div>
              <div className="skill_des_textBox">
                <p>CSS</p>
                <p>css를 활용해 스타일을 </p>
                <p>적용할 수 있으며 기본기능을</p>
                <p>최대한 사용하려고 합니다</p>
              </div>
            </div>
          </div>
          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">03</div>
            <div className="skill_alphaBox">
              <div>
                <p>S</p>
                <p>S</p>
                <p>S</p>
              </div>
              <div className="skill_des_textBox">
                <p>Scss</p>
                <p></p>
                <p>반복적인 코드의 변수화</p>
                <p>연산기능 등 기본문법을</p>
                <p>숙지하고 있습니다</p>
              </div>
            </div>
          </div>

          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">04</div>
            <div className="skill_alphaBox">
              <div>
                <p>J</p>
                <p>J</p>
                <p>J</p>
              </div>
              <div className="skill_des_textBox">
                <p>JS</p>
                <p>JS를 활용하여 웹페이지에</p>
                <p>동적인 기능 구현이 가능합니다</p>
              </div>
            </div>
          </div>

          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">05</div>
            <div className="skill_alphaBox">
              <div>
                <p>R</p>
                <p>R</p>
                <p>R</p>
              </div>
              <div className="skill_des_textBox">
                <p>REACT</p>
                <p>리액트를 활용해 컴포넌트 기반</p>
                <p>웹 어플리케이션의</p>
                <p>상태 관리와 데이터 흐름을</p>
                <p>효과적으로 다룰 수 있습니다</p>
              </div>
            </div>
          </div>

          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">06</div>
            <div className="skill_alphaBox">
              <div>
                <p>N</p>
                <p>N</p>
                <p>N</p>
              </div>
              <div className="skill_des_textBox">
                <p>NEXT JS</p>
                <p>SSR, SSG, 라우팅 등 </p>
                <p>NEXT JS의 기능을 활용해</p>
                <p>웹사이트 제작을 할 수 있습니다</p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="skill_SubTitleBox subTitle2">
          <p>OTHERS</p>
          <p>Other contents I can use </p>
          <p>for convenient development</p>
        </div>
        <div className="skill_Section1 skillBox2">
          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">01</div>
            <div className="skill_alphaBox">
              <div>
                <p>N</p>
                <p>N</p>
                <p>N</p>
              </div>
              <div className="skill_des_textBox">
                <p>NOTION</p>
                <p>노션을 활용하여 프로젝트의 </p>
                <p>일정 관리와 파일 공유 등을</p>
                <p>효과적으로 진행한 경험이 있습니다.</p>
              </div>
            </div>
          </div>
          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">02</div>
            <div className="skill_alphaBox">
              <div>
                <p>F</p>
                <p>F</p>
                <p>F</p>
              </div>
              <div className="skill_des_textBox">
                <p>FIGMA</p>
                <p>피그마의 사용법에 대해</p>
                <p>알고있으며 이를 기반으로 </p>
                <p>웹페이지 제작이 가능합니다</p>
              </div>
            </div>
          </div>
          <div className="skill_Section_FullDiv">
            <div className="skill_NumberBox">03</div>
            <div className="skill_alphaBox">
              <div>
                <p>G</p>
                <p>G</p>
                <p>G</p>
              </div>
              <div className="skill_des_textBox">
                <p>GIT</p>
                <p>깃의 개념과 사용법을</p>
                <p>알고있으며 이를 활용해</p>
                <p>팀 프로젝트를 진행한 경험이 있습니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
