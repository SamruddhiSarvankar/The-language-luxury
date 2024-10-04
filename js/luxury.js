
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "100px";
  }
  prevScrollpos = currentScrollPos;
}



var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});



window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);

  const targets = gsap.utils.toArray(".ullist li");

  gsap.set(".ullist", { autoAlpha: 1 });

  const timeline = gsap.timeline({
    defaults: {
      overwrite: "auto"
    },
    scrollTrigger: {
      end: "+=600",
      pin: true,
      pinSpacing: true,
      scrub: true,
      start: "top top",
      // snap: 0.1,
      trigger: ".ullist"
    }
  });

  const stagger = 0.8;
  const duration = 1;

  gsap.set(".ullist", { autoAlpha: 1 });

  timeline.set(targets, { transformOrigin: "center bottom" });

  timeline
    .from(targets.slice(1), {
      duration: duration,
      opacity: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      stagger: stagger,
      y: 60
    })
    .to(
      targets,
      {
        duration: duration,
        opacity: 0,
        rotationX: 20,
        rotationY: 5,
        scale: 0.15,
        stagger: stagger,
        y: -100
      },
      0
    );
};

let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".section5main",
    // start: "top top",
        // end: "+=500",
    pin: true,   
  }});

  document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.section5main'), // Replace with the ID or class of your scroll container
      smooth: true, // Enable smooth scrolling
      // Other configuration options can be added here
    });
  });
  
// extra
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}