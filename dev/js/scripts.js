import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function initialMotion (){
    var tl = gsap.timeline();
    tl.from("#cap-k",{scale:0, duration:1, stagger:0.5, x: 300, drawSVG: 0})
    .from("#cap-r",{scale:0, duration:1, stagger:0.5, x: 300})
    return tl;
}

function firstnameMotion (){
    var tl = gsap.timeline();
    tl.from("#r-1",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"r-1"},"-=50%")
    .from("#a",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"a"},"-=50%")
    .from("#c",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"c"},"-=50%")
    .from("#h",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"h"},"-=50%")
    .from("#e",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"e"},"-=50%")
    .from("#l",{duration: 0.75, scale:0, y:-150, stagger:0.5, transformOrigin:"l"},"-=50%")
    return tl;
}

function surnameMotion (){
    var tl = gsap.timeline();
    tl.from("#k",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"k"},"-=50%")
    .from("#h-2",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"h-2"},"-=50%")
    .from("#u",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"u"},"-=50%")
    .from("#r-2",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"r-2"},"-=50%")
    .from("#g",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"g"},"-=50%")
    .from("#i",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"i"},"-=50%")
    .from("#n",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"n"},"-=50%")
    .from("#a-2",{duration: 0.75, scale:0, y:150, stagger:0.5, transformOrigin:"a-2"},"-=50%")
    return tl;
}


function scaleMotion (){
    var tl = gsap.timeline();
    tl.to("#rk-logo",{duration:1, scale:1.5, transformOrigin:"rk-logo"})
      .to("#rk-logo",{duration:1, scale:-1.5, transformOrigin:"rk-logo"})
      .to("#rk-logo",{duration:1, scale:1, transformOrigin:"rk-logo"})
    return tl;
}

// function scaleMotion (){
//     var tl = gsap.timeline();
//     tl.to("#rk-logo",{duration:1, scale:1.5, transformOrigin:"center"})
//       .to("#rk-logo",{duration:1, scale:-1.5, transformOrigin:"center"})
//       .to("#rk-logo",{duration:1, scale:1, transformOrigin:"center"})
//     return tl;
// }


// function scaleMotion (){
//     var tl = gsap.timeline();
//     tl.from("#rk-logo",{duration:1, scale:1.5, transformOrigin:"center"})
//       .from("#rk-logo",{duration:1, scale:-1.5, transformOrigin:"center"})
//       .from("#rk-logo",{duration:1, scale:1, transformOrigin:"center"})
//     return tl;
// }


var mainTL = gsap.timeline();
mainTL.add(initialMotion())
.add(firstnameMotion())
.add(surnameMotion())
.add(scaleMotion())

GSDevTools.create();