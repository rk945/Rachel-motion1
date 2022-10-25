import $ from "jquery";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


let $nav = $('nav[data-nav]');
let isVisible = false;

$(".nav-btns").on("click", function(){
    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
})

var mainTl = gsap.timeline();


function historyAnimation(){
var tl = gsap.timeline();
let config = {strength: 1};

gsap.set("#history-first", {zPercent: -50, x: -1});

tl.to("#history-first", {repeat: 15,yoyo: true,x: 1,duration: 0.2,ease: "power1.inOut",modifiers: {x: gsap.utils.unitize(value => value * config.strength, "px")}})

tl.to(config, {strength: 100, ease: "power1.inOut", scrollTrigger: {scrub: true}})

return tl;
}

function textAnimation(){
var tl = gsap.timeline({scrollTrigger:{trigger:"#text", scrub: true, markers:false, start:"top 75%", end:"bottom 65%"}, stagger:0.25});
tl.from("#history-middle p",{x:"600",alpha:0},"-=0.25");
tl.from("#history-last",{x:"-600",alpha:0}, "-=0.25");
return tl;
}

function skillsAnimation(){
var tl = gsap.timeline();
tl.to("#skills", {ease: "power1.inOut",scale: 1.2,scrollTrigger: {trigger: "skills",pin: true,scrub: true}})
  
tl.to("#skills", {ease: "power1.inOut",scale: 1.2,scrollTrigger: {trigger: "skills",pin: true, scrub: true}})

return tl;
}

function hero2Animation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#hero2", scrub: true, markers:false, start:"top 75%", end:"bottom 65%"}, stagger:0.25});
    tl.to("#hero-2",{scale: 0.75,alpha:0});
    tl.to("#hero-2",{scale: 0.75,alpha:1});
    return tl;
    }


let proxy = {skew: 0},skewSetter = gsap.quickSetter("#skynet", "skewY", "deg"),clamp = gsap.utils.clamp(-20, 20); 

ScrollTrigger.create({onUpdate: (self) => {let skew = clamp(self.getVelocity() / -300);if (Math.abs(skew) > Math.abs(proxy.skew)){proxy.skew = skew;gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
}
}
});
gsap.set("#skynet", {transformOrigin: "right center", force3D: true});






mainTl.add(historyAnimation());
mainTl.add(skillsAnimation());
mainTl.add(textAnimation());
mainTl.add(hero2Animation());

