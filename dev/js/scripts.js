import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect");


function slideMotion(){
  var tl = gsap.timeline();
  tl.from("#big-w",{scale:0, duration:1, stagger:0.5, x: 300, drawSVG: 0})
  .from("#group",{duration:1, scale:0, y:150, stagger:0.5, transformOrigin:"group"},"-=50%")
return tl;
}

function scaleMotion (){
  var tl = gsap.timeline();
  tl.to("#wagner-logo",{duration:0.5, scale:1.5, transformOrigin:"25% 25%", yoyo:true})
    .to("#wagner-logo",{duration:0.5, scale:0.1, autoAlpha:0, transformOrigin:"25% 25%"})
    .to("#wagner-logo",{duration:0.75, scale:1, autoAlpha:2, transformOrigin:"25% 25%"})
  return tl;
}




var mainTL = gsap.timeline();
mainTL.add(slideMotion())
.add(scaleMotion())
GSDevTools.create();