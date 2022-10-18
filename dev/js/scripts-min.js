import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


let config = {strength: 2};

gsap.set("h1", {xPercent: -50, x: -1});

gsap.to("h1", {
  repeat: -1,
  yoyo: true,
  x: 1,
  duration: 0.2,
  ease: "power1.inOut",
  modifiers: {
    x: gsap.utils.unitize(value => value * config.strength, "px")
  }
});

gsap.to(config, {
  strength: 100, 
  ease: "none", 
  scrollTrigger: {
  scrub: true
  }
});
