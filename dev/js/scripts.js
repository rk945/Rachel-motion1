import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase} from "gsap/CustomEase";
import { GSDevTools } from "gsap/GSDevTools";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools, CustomEase);


function bigwDraw (){
  var tl = gsap.timeline();
  tl.from("#big-w",{drawSVG:"0%", duration:0.85, transformOrigin:"center"})
  .to("#big-w",{delay:0.25, duration:0.5, transformOrigin:"center", fill:"#005053"})
  return tl;
}


function slideMotion(){
  var tl = gsap.timeline();
  tl.from("#a",{duration:0.75, scale:0, x:150, stagger:0.5, transformOrigin:"a"},"-=50%")
  tl.from("#g",{duration:0.75, scale:0, x:150, stagger:0.5, transformOrigin:"g"},"-=50%")
  tl.from("#n",{duration:0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"n", ease:"bounce.inOut"},"-=50%")
  tl.from("#e",{duration:0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"e", ease:"bounce.inOut"},"-=50%")
  tl.from("#r",{duration:0.75, scale:0, y:150, stagger:0.5, transformOrigin:"r", ease:"elastic.out"})
  tl.from("#text",{duration:0.5, scale:0, z:0, rotate:360, stagger:0.5, transformOrigin:"text"},"-=50%")
return tl;
}

function scaleMotion (){
  var tl = gsap.timeline();
  tl.to("#wagner-logo",{duration:0.5, scale:1.5, transformOrigin:"50% 50%", yoyo:true})
    .to("#wagner-logo",{duration:0.5, scale:0.1, autoAlpha:0, transformOrigin:"50% 50%"})
    .to("#wagner-logo",{duration:0.75, scale:1, autoAlpha:2, transformOrigin:"50% 50%"})
  return tl;
}



var mainTL = gsap.timeline();
mainTL.add(bigwDraw())
.add(slideMotion())
.add(scaleMotion())


GSDevTools.create();