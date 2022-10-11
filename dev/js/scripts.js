import { gsap } from "gsap";

function header2(){

  var tl = gsap.timeline();
gsap.from("#header2", {duration:0.75, autoAlpha:0, y:100});
gsap.from("#second-line", {duration:0.75, autoAlpha:1, y:-100});
gsap.from("#third-line",{duration:0.5, autoAlpha:2, y:-50});
gsap.from("#blue-btn",{duration:0.75, delay: 0.90, autoAlpha:0, y:100});
return tl;
   
}

let mm = gsap.matchMedia();
var buttonSize = 2;

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  buttonSize = 1.65;
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  buttonSize = 1.35;
});

var mainTL = gsap.timeline();
mainTL.add(header2());


var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#blue-btn",{duration:0.40, scale:buttonSize})
.to("#blue-btn",{duration:0.40, rotateZ: 360})
.to("#first-line",{duration:0.25, alpha:0, y:25})
.to("#second-line",{duration:0.25, alpha:0, y:25});


let button = document.querySelector("#blue-btn");

button.addEventListener("mouseenter",function(){
    buttonAnimation.play();

});

button.addEventListener("mouseout",function(){
    buttonAnimation.reverse();

});

