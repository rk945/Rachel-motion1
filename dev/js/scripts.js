import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function basicMotion(){
 var tl = gsap.timeline();
 tl.fromTo("arrow",{duration: 0.75, scale:0, y:25, stagger:0.5, transformOrigin:"arrow"},"-=50%")
 tl.fromTo("rectangle",{duration: 0.75, scale:0, y:25, stagger:0.5, transformOrigin:"rectangle"},"-=50%")
 tl.fromTo("square",{duration: 0.75, scale:1, y:0, stagger:0.5, transformOrigin:"square"},"-=50%")
 return tl;
}





var mainTL = gsap.timeline();
mainTL.add(basicMotion())

GSDevTools.create();