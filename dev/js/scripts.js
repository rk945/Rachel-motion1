import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){

   var tl = gsap.timeline();
   tl.from("#r-caps",{scale:0, duration:1, stagger:0.5, x: 300, drawSVG: 0})
   .from("#k-caps",{scale:0, duration:1, stagger:0.5, x: 300},"-=50%")
   .from("#letter-1",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"letter-1"},"-=50%")
   .from("#letter-2",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"letter-2"},"-=50%")
   .from("#letter-3",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"letter-3"},"-=50%")
   .from("#letter-4",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"letter-4"},"-=50%")
   .from("#letter-5",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"letter-5"},"-=50%")
   .from("#letter-6",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"letter-6"},"-=50%")
   .from("#letter-7",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-7"},"-=50%")
   .from("#letter-8",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-8"},"-=50%")
   .from("#letter-9",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-9"},"-=50%")
   .from("#letter-10",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-10"},"-=50%")
   .from("#letter-11",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-11"},"-=50%")
   .from("#letter-12",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-12"},"-=50%")
   .from("#letter-13",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-13"},"-=50%")
   .from("#letter-14",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"letter-14"},"-=50%")
   return tl; 
   
   }


function patternMotion(){

    var tl = gsap.timeline();
    tl.from(".odd",{duration:3, drawSVG:0, stagger:0.25, rotate:180, transformOrigin:"center", ease: "power4.out"},"spin")
    .fromTo(".even",{drawSVG:"0% 0%"},{duration:4, drawSVG:0, stagger:0.25, rotate:180, transformOrigin:"center", ease: "power4.out"},"spin");
    return tl;
}

function UIMotion(){ 

var tl = gsap.timeline();
tl.from("#line-1",{duration:0.5, stagger:0.25, alpha:0, drawSVG:0})
.from("#line-2",{duration:0.5, stagger:0.25, alpha:0, drawSVG:0})
.from("#line-3",{duration:0.5, stagger:0.25, alpha:0, drawSVG:0})
.from("#line-4",{duration:0.5, stagger:0.25, alpha:0, drawSVG:0})
.from("#line-5",{duration:0.5, stagger:0.25, alpha:0, drawSVG:0})
.from("#line-6",{duration:0.5, stagger:0.25, alpha:0, drawSVG:0})
return tl;

}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(UIMotion())

GSDevTools.create();