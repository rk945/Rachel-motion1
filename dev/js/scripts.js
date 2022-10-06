import { gsap } from "gsap";

const tl = gsap.timeline({repeat:-1});
tl.set("#header2", { color: "repeat([white, white, white, white])" }, 3);	
tl.from("#header2", { opacity: 0, duration: 1.5});
tl.to("#header2", { opacity: 0, duration: 1});



let button = document.querySelector("#blue-btn");

button.addEventListener("mouseenter",function(){
gsap.to("#blue-btn", {rotation: 360, z: 100, duration: 1});
});