import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect");


function scaleMotion(){
    var tl = gsap.timeline();
    tl.to("#wagner-logo",{duration:0.75, scale:1.5, transformOrigin:"50% 50%", yoyo:true})
    .to("#wagner-logo",{duration:0.75, scale:0.1, autoAlpha:0, transformOrigin:"50% 50%"})
    .to("#wagner-logo",{duration:1, scale:1, autoAlpha:2, transformOrigin:"50% 50%"})
  return tl;
}


var mainTL = gsap.timeline();
mainTL.add(scaleMotion())
GSDevTools.create();