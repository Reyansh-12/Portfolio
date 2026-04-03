console.clear(); // Start with a clean console on refesh 
// //gsap.to()... infinity and beyond!

// //To learn more about using GreenSock's bonus plugins for free on CodePen visit: https://gsap.com/trial
gsap.registerPlugin(SplitText) 
const elm = document.querySelector('.div-block-3')

var split = new SplitText("#title-a", {type: "chars"});
var splitb = new SplitText("#title-aa", {type: "chars"});


const tl = gsap.timeline({ // Create a timleine to control all the animations
  paused: true, // Set it to paused, because we want to .play() them at a specific moment
});

tl.fromTo(split.chars, { 
  y: 0, 
},
{
  duration: 0.5, 
  y: -20, 
  stagger: 0.05
}
);

tl.fromTo(splitb.chars, { 
  y: 38, 
},
{
  duration: 0.5, 
  y: -20, 
  stagger: 0.05
}, "<" // Start tween at the same time as previous tween, check the docs for more info position parameter https://greensock.com/position-parameter
);

    // Normal Javascript, add event listener to a specifc elment 
elm.addEventListener('mouseenter', () => {
  tl.play(); // play the timeline 
});
elm.addEventListener('mouseleave', () => {
  tl.reverse(); // reverse the timeline
});