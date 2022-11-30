import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect");


function slideMotion(){
  var tl = gsap.timeline({repeat:-1});
  tl.from("#big-w",{scale:0, duration:1, stagger:0.5, x: 300, drawSVG: 0})
  .from("#group",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"group"},"-=50%")
return tl;
}



// function slideMotion(){
//     var tl = gsap.timeline({repeat:-1});
//     tl.to("#wagner-logo",{duration:0.75, scale:1.5, transformOrigin:"center", yoyo:true})
//     .to("#wagner-logo",{duration:0.75, scale:0.1, autoAlpha:0})
//     .to("#wagner-logo",{duration:1, scale:1, autoAlpha:2})
//   return tl;
// }


var mainTL = gsap.timeline();
mainTL.add(slideMotion())
GSDevTools.create();