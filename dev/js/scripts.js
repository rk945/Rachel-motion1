
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";




gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, polygon");
MotionPathPlugin.convertToPath("circle, rect, ellipse");



function arrowMotion(){
 var tl = gsap.timeline();
 tl.to("#arrow",{duration:1, scale:0.75, y:100, transformOrigin:"center"})
 return tl;
}


function rectangleMotion(){
    var tl = gsap.timeline();
    tl.to("#rectangle",{duration:0.75, scale:0.5, y:50, transformOrigin:"center"})
    .to("#rectangle",{duration:0.75, scale:0.5, y:50, fill:"transparent", transformOrigin:"center"})
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
    tl.to("#arrow",{fill:"#2E27F5",duration:1, scale:0.75, x:75, rotate:180, morphSVG:"#triangle"},"sameTime")
      .to("#square",{fill:"#5ACBF4",duration:1, scale:-0.75, x:-75, y:150, rotate:180, morphSVG:"#circle"},"sameTime")
      .to("#arrow",{autoAlpha:0, duration:1, scale:0.75, x:75, rotate:180, morphSVG:"#triangle"},"-=50%")
      .to("#square",{autoAlpha:0, duration:1, scale:-0.75, x:-75, y:150, rotate:180, morphSVG:"#circle"},"-=50%")
      return tl;
}

function trianglecircleMotion(){
    var tl = gsap.timeline();
    tl.to("#triangle",{motionPath:{path:"#smallcirclepath", align:"smallcirclepath", autoRotate:true, alignOrigin: [0.5, 0.5]},fill:"#2E27F5",duration:1},"sameTime")
    .to("#circle",{motionPath:{path:"#smallcirclepath", align:"smallcirclepath", autoRotate:true, alignOrigin: [0.5, 0.5]},fill:"#5ACBF4",duration:1},"sameTime")
    return tl;
}


function outerlineDraw(){
    var tl = gsap.timeline();
    tl.from("#purple-outer-line",{drawSVG:"0%", duration:0.5},"sameTime")
      .from("#blue-outer-line",{drawSVG:"0%", duration:0.5},"sameTime")
    return tl;
}

function secondouterlineDraw(){
    var tl = gsap.timeline();
    tl.from("#purple-outer-line2",{drawSVG:"0%", duration:0.5},"sameTime")
      .from("#blue-outer-line2",{drawSVG:"0%", duration:0.5},"sameTime")
    return tl;
}


function outerlineFade(){
    var tl = gsap.timeline();
    tl.to("#purple-outer-line",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    .to("#blue-outer-line",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    return tl;
    }

    function secondouterlineFade(){
        var tl = gsap.timeline();
        tl.to("#purple-outer-line2",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
        .to("#blue-outer-line2",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
        return tl;
        }

// function outerlineMotion(){
//     var tl = gsap.timeline();
//     tl.from("#purple-outer-line",{motionPath:{path:"#bigcirclepath", align:"#bigcirclepath", autoRotate:true, alignOrigin: [0.5, 0.5]},duration:1},"sameTime")
//     .from("#blue-outer-line",{motionPath:{path:"#bigcirclepath", align:"#bigcirclepath", autoRotate:true, alignOrigin: [0.5, 0.5]},duration:1},"sameTime")
//     return tl;
// }


function secondtriangleMotion(){
    var tl = gsap.timeline();
    tl.to("#triangle",{duration:1, y:-25, x:-125, rotate:360, transformOrigin:"center"})
    return tl;
   }

   function secondcircleMotion(){
    var tl = gsap.timeline();
    tl.to("#circle",{duration:1, y:75, x:75, rotate:360, transformOrigin:"center"})
    return tl;
   }

   function innerlineDraw(){
    var tl = gsap.timeline();
    tl.from("#purple-inner-line",{drawSVG:"0%", duration:0.5},"sameTime")
      .from("#blue-inner-line",{drawSVG:"0%", duration:0.5},"sameTime")
    return tl;
}

function innerlineFade(){
    var tl = gsap.timeline();
    tl.to("#purple-inner-line",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    .to("#blue-inner-line",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    return tl;
    }


function diagonallineDraw(){
    var tl = gsap.timeline();
    tl.from("#top-right-diagonal",{drawSVG:"0%", duration:0.5},"sameTime")
      .from("#top-left-diagonal",{drawSVG:"0%", duration:0.5},"sameTime")
      .from("#bottom-right-diagonal",{drawSVG:"0%", duration:0.5},"sameTime")
      .from("#bottom-left-diagonal",{drawSVG:"0%", duration:0.5},"sameTime")
    return tl;
}

function diagonallineFade(){
    var tl = gsap.timeline();
    tl.to("#top-right-diagonal",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    .to("#top-left-diagonal",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    .to("#bottom-right-diagonal",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    .to("#bottom-left-diagonal",{drawSVG:"100% 50%", stroke:"transparent", duration:0.5, transformOrigin:"center"},"sameTime")
    return tl;
    }

    function thirdtriangleMotion(){
        var tl = gsap.timeline();
        tl.to("#triangle",{duration:0.5, y:125, rotate:180, scale:0.65, fill:"#6032EE", transformOrigin:"center"})
          .to("#triangle",{duration:0.5, y:125, rotate:180, fill:"#EE81DA", transformOrigin:"center"})
        return tl;
       }

       function thirdcircleMotion(){
        var tl = gsap.timeline();
        tl.to("#circle",{duration:0.5, y:-25, rotate:180, scale:0.65, transformOrigin:"center"})
        return tl;
       }

       function fourthtriangleMotion(){
        var tl = gsap.timeline();
        tl.to("#triangle",{duration:0.5, y:-25, rotate:180, scale:0.75, fill:"#6032EE", transformOrigin:"center"})
          .to("#triangle",{duration:0.5, y:-25, rotate:180, fill:"#2E27F5", transformOrigin:"center"})
        return tl;
       }


       function fourthcircleMotion(){
        var tl = gsap.timeline();
        tl.to("#circle",{duration:0.5, y:50, rotate:180, scale:0.75, transformOrigin:"center"})
        return tl;
       }

    //    function squarearrowMorph(){
    //     var tl = gsap.timeline();
    //     tl.to("#triangle",{autoAlpha:2 ,duration:1, rotate:180, morphSVG:"#arrow"},"sameTime")
    //       .to("#circle",{autoAlpha:2 ,duration:1, rotate:180, morphSVG:"#square"},"sameTime")
    //       return tl;
    // }

    function circlesquareMorph(){
        var tl = gsap.timeline();
          tl.to("#circle",{fill:"#5ACBF4", autoAlpha:2, duration:1, rotate:180, morphSVG:"#square"})
          return tl;
    }

    function trianglearrowMorph(){
        var tl = gsap.timeline();
          tl.to("#triangle",{fill:"#2E27F5", autoAlpha:2, duration:1, rotate:180, morphSVG:"#arrow"})
          return tl;
    }

    function secondrectangleMotion(){
        var tl = gsap.timeline();
        tl.to("#rectangle",{duration:0.75, scale:0.75, y:-50, transformOrigin:"center"})
        .to("#rectangle",{duration:0.75, scale:0.75, y:-50, fill:"#EE81DA", transformOrigin:"center"})
        return tl;
    }
     
   

var mainTL = gsap.timeline();
mainTL.add(arrowMotion(),"playTogether")
.add(rectangleMotion(),"playTogether")
.add(squareMotion(),"playTogether")
.add(arrowsquareMotion())
.add(arrowsquareMorph())
.add(trianglecircleMotion(),"-=0.15")
.add(outerlineDraw(),"-=0.15")
.add(secondouterlineDraw(),"-=0.15")
.add(outerlineFade(),"-=0.25")
.add(secondouterlineFade(),"-=0.25")
// .add(outerlineMotion(),"playTogether")
.add(secondtriangleMotion(),"-=0.25")
.add(secondcircleMotion(),"-=0.25")
.add(innerlineDraw())
.add(innerlineFade())
.add(diagonallineDraw(),"-=0.35")
.add(diagonallineFade())
.add(thirdcircleMotion(),"-=0.45")
.add(thirdtriangleMotion(),"-=0.45")
.add(fourthtriangleMotion(),"-=0.55")
.add(fourthcircleMotion(),"-=0.55")
.add(circlesquareMorph(),"-=0.55")
.add(trianglearrowMorph(),"-=0.55")
.add(secondrectangleMotion(),"-=0.65")






GSDevTools.create();