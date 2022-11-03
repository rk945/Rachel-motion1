import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){
     
    var line = document.querySelector("#center-line");
   
    line = line.getBBox();
   
    var leftBall = document.querySelector("#left-ball");
    leftBall = leftBall.getBBox();
   
    var center = document.querySelector("#center");
    center = center.getBBox();

   
    gsap.set("#left-ball",{x:line.width / 2 + leftBall.width / 2, transformOrigin:"center" })
    gsap.set("#right-ball",{x:-line.width/2 - leftBall.width / 2, transformOrigin:"center" })
   
   var tl = gsap.timeline({repeat: -1, repeatDelay:1});
   tl.from("#right-ball",{scale:2, duration:0.5, drawSVG:0})
    .from("#left-ball",{scale:2, duration:0.5, drawSVG:0})
    .to("#right-ball",{x:0, duration:0.25},"rollOut")
    .to("#left-ball",{x:0, duration:0.25},"rollOut")
    .fromTo("#center-line",{drawSVG:"50% 50%"},{duration:0.25, drawSVG: "0% 100%"},"rollOut")
    .to("#top-clip",{opacity:0, duration: 0.25})
    .to("#bottom-clip",{opacity:0, duration: 0.25})
    .from("#center",{duration: 0.5, scale:0, transformOrigin:"center"},"-=50%")
    .to("#center",{duration: 0.25, y: -center.height / 2 - 50},"-=50%")
    .to("#center",{duration: 0.25, y: 0})
    .to("#top-clip",{opacity:2, duration: 0.25, ease:"power2.in"})
    .to("#bottom-clip",{opacity:2, duration: 0.25, ease:"power2.in"})
    .fromTo("#center-outline",{drawSVG:"100% 50%"},{duration:0.15,drawSVG:"125% 25%"},"-=50%")
   
   return tl; 
   
   }


function patternMotion(){

    var tl = gsap.timeline({repeat: -1, repeatDelay:1.5});
    tl.from(".odd",{rotation:180, transformOrigin:"center center", duration:1,  ease: "power4.out"},0)
    .from(".even",{rotation:-180, transformOrigin:"center center", duration:1,  ease: "power4.out"},0)
    .fromTo(".odd",{rotation:180, transformOrigin:"center center", duration:1,  ease: "power4.out"},0)
    return tl;
}

function UIMotion(){
    var bottomLine = document.querySelector("#bottom-line");

    bottomLine = bottomLine.getBBox();

    console.log(bottomLine.width);
  
var tl = gsap.timeline({repeat:-1});
tl.to("#pencil",{duration:0.5,x:bottomLine.width},"draw")
.from("#bottom-line",{duration:0.5,drawSVG:0},"draw")
.to("#pencil",{duration:0.25, alpha:0},"drawOutline")
.fromTo("#outline",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"},"drawOutline")
.from("#box-bg",{duration:0.5, scaleX:0})
.from(".letter",{duration:0.25, alpha:0, y:20, stagger: 0.12},"-=50%")
.from("#glass",{duration:0.25, drawSVG:0},"-=.5")
.from("#handle",{duration:0.25, drawSVG:0},"-=.25")
return tl;


}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(UIMotion())

GSDevTools.create();