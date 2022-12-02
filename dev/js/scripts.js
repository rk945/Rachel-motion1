import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function caprDraw (){
    var tl = gsap.timeline();
    tl.from("#cap-r",{drawSVG:"0%", duration:0.75, transformOrigin:"center"})
    .to("#cap-r",{duration:0.5, transformOrigin:"center", fill:"#DDBB40"})
    return tl;
}

function capkDraw (){
    var tl = gsap.timeline();
    tl.from("#cap-k",{drawSVG:"0%", duration:0.75, transformOrigin:"center"})
    .to("#cap-k",{duration:0.5, transformOrigin:"center", fill:"#D0912C"})
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
    tl.to("#rk-logo",{duration:0.5, scale:1.5, transformOrigin:"50% 50%", yoyo:true})
      .to("#rk-logo",{duration:0.75, scale:0, autoAlpha:0, transformOrigin:"50% 50%"})
      .to("#rk-logo",{duration:1, scale:1, autoAlpha:2, transformOrigin:"50% 50%"})
    return tl;
}





var mainTL = gsap.timeline();
mainTL.add(caprDraw())
.add(capkDraw())
.add(firstnameMotion(),"playTogether")
.add(surnameMotion(),"playTogether")
.add(scaleMotion())


GSDevTools.create();