import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();
  const location = useLocation();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      if (scroll) {
        scroll?.off("scroll", ScrollTrigger.update);
        ScrollTrigger.getAll().forEach((trigger) => {
          console.log("삭제");
          trigger.kill();
        });
        ScrollTrigger.getAll().length = 0;
      }
    };
  }, [scroll]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => {
      console.log("삭제2");
      trigger.kill();
    });
    ScrollTrigger.getAll().length = 0;
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.getAll().length = 0;
    };
  }, [location.pathname]);

  return null;
};

export default ScrollTriggerProxy;
