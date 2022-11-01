import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function patternMotion(){

    var tl = gsap.timeline({repeat: -1, repeatDelay:1.5});
    tl.from(".odd",{rotation:120, transformOrigin:"center center", duration:2,  ease: "power4.out"},0)
    .from(".even",{rotation:-120, transformOrigin:"center center", duration:2,  ease: "power4.out"})
    .fromto(".odd",{rotation:120, transformOrigin:"center center", duration:2,  ease: "power4.out"},0)
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(patternMotion())

GSDevTools.create();