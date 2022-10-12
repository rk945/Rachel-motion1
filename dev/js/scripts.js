import { gsap } from "gsap";
gsap.set("button",{transformOrigin:"center"});

function heroContent(){

var tl = gsap.timeline();
gsap.from("#header1", {duration:1, autoAlpha:0, y:-200});
gsap.from("#header2", {duration:1, autoAlpha:0, y:200}, ">");
gsap.from("#blue-btn",{duration:1, autoAlpha:0, y:200}, ">");
return tl;
   
}

let mm = gsap.matchMedia();
var buttonSize = 2;

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  buttonSize = 1.45;
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  buttonSize = 1.25;
});

var mainTL = gsap.timeline();
mainTL.add(heroContent());


var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#blue-btn",{duration:0.40, scale:buttonSize})
.to("#blue-btn",{duration:0.25, rotateZ: 360})
.to("#first-line",{duration:0.25, alpha:0, y:25})
.to("#second-line",{duration:0.25, alpha:0, y:25});


let button = document.querySelector("#blue-btn");

button.addEventListener("mouseenter",function(){
    buttonAnimation.play();

});

button.addEventListener("mouseout",function(){
    buttonAnimation.reverse();

});

