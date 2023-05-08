import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const animationOptions = {
      ease: "expo.inOut",
    };

    const introAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: animationOptions.ease,
          duration: 1,
        },
      });

      tl.to(".intro__title", {
        duration: 1.2,
        y: 0,
        autoAlpha: 1,
        delay: 0.1,
      })
        .to(".intro__background--left, .intro__background--right", {
          scaleX: 1,
        })
        .to(".intro__background--left, .intro__background--right", {
          scaleY: 0,
          transformOrigin: "top center",
        })
        .to(
          ".intro__title",
          {
            duration: 1.3,
            y: -60,
            autoAlpha: 0,
          },
          "-=0.4"
        )
        .to(
          ".intro",
          {
            y: "-100%",
          },
          "-=0.4"
        );

      return tl;
    };

    const master = gsap.timeline({
      paused: false,
      delay: 0.1,
    });

    master.add(introAnimation());
  }, []);
  return (
    <div>
      <section className="intro">
        <p className="intro__title hidden">
          JO MIN SUH
          <br />
          PORTFOLIO
        </p>
        <div className="intro__background intro__background--left"></div>
        <div className="intro__background intro__background--right"></div>
      </section>
    </div>
  );
};

export default Loader;
