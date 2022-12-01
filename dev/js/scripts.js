import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";




gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathPlugin);
MorphSVGPlugin.convertToPath("circle, rect");

function arrowMotion(){
 var tl = gsap.timeline();
 tl.to("#arrow",{duration:1, scale:0.75, y:100, transformOrigin:"center"})
 return tl;
}


function rectangleMotion(){
    var tl = gsap.timeline();
    tl.to("#rectangle",{duration:0.75, scale:0.5, y:50, transformOrigin:"center"})
    .to("#rectangle",{duration:0.75, scale:0.5, y:50, fill:"#fff", transformOrigin:"center"})
    return tl;
}

function squareMotion(){
var tl = gsap.timeline();
tl.to("#square",{duration:0.95, scale:1, y:25, transformOrigin:"center"})
return tl;
}

function arrowsquareMotion(){
    var tl = gsap.timeline();
    tl.to("#arrow",{duration:0.75, scale:0.65, y:-50, transformOrigin:"center"},"sameTime")
    .to("#square",{duration:0.75, scale:0.75, y:-25, rotate:45, transformOrigin:"center"},"sameTime")
    return tl;
    }

function arrowsquareMorph(){
    var tl = gsap.timeline();
    tl.to("#arrow",{duration:1, scale:0.5, x:75, rotate:180, morphSVG:"#triangle"},"sameTime")
      .to("#square",{duration:1, scale:-0.5, x:-75, y:150, rotate:180, morphSVG:"#circle"},"sameTime")
    return tl;
}

function outerlineDraw(){
    var tl = gsap.timeline();
    tl.from("#purple-outer-line",{drawSVG:"0%", duration:0.5},"sameTime")
      .from("#blue-outer-line",{drawSVG:"0%", duration:0.5},"sameTime")
    return tl;
}
 

// function outerlineMotion(){
//     var tl = gsap.timeline();
//     tl.to("#purple-outer-line",{motionPath:{path:"#circularpath", align: "#circularpath", alignOrigin: [0.5, 0.5], autoRotate:true},duration:1},"sameTime")
//     .to("#blue-outer-line",{motionPath:{path:"#circularpath", align: "#circularpath", autoRotate:true},duration:1},"sameTime")
//     return tl;
// }





var mainTL = gsap.timeline();
mainTL.add(arrowMotion(),"playTogether")
.add(rectangleMotion(),"playTogether")
.add(squareMotion(),"playTogether")
.add(arrowsquareMotion())
.add(arrowsquareMorph())
.add(outerlineDraw())
// .add(outerlineMotion())



GSDevTools.create();