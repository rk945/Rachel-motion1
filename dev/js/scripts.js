import { gsap } from "gsap";

let button = document.querySelector("#blue-btn");
button.addEventListener("mouseover",function(){
gsap.to("#blue-btn", {rotation: 360, x: 100, duration: 1});
});