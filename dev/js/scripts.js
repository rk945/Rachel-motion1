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

gsap.to("#history-first", {repeat: -1,yoyo: true,x: 1,duration: 0.2,ease: "power1.inOut",modifiers: {x: gsap.utils.unitize(value => value * config.strength, "px")}})

gsap.to(config, {strength: 100, ease: "power1.inOut", scrollTrigger: {scrub: true}})

return tl;
}

function skillsAnimation(){
var tl = gsap.timeline();
gsap.to("#skills", {ease: "power1.inOut",scale: 1.2,scrollTrigger: {trigger: "skills",pin: true,scrub: true}})
  
gsap.to("#skills", {ease: "power1.inOut",scale: 1.2,scrollTrigger: {trigger: "skills",pin: true, scrub: true}})

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
