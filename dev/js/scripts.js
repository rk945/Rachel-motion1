import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function patternMotion(){

    var tl = gsap.timeline({repeat: -1, repeatDelay:1});
    tl.to(".odd",{rotation:120, transformOrigin:"center center", strokeDasharray:6, duration:3,  ease: "power4.out"},0)
    tl.to(".even",{rotation:-120, transformOrigin:"center center", duration:3,  ease: "none"})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(patternMotion())

GSDevTools.create();