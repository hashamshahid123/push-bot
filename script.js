

function expoEaseInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
gsap.from('#mainNav', 1.2, {opacity: 0, y: -150, delay: 0.5})
gsap.from('.header-h1', 1.2, {opacity: 0, x: -150, delay: 1.5, ease: expoEaseInOut,})
gsap.from('.header-p', 1.2, {opacity: 0, x: -150, delay: 2, ease: expoEaseInOut,})
gsap.from('.header-btn', 1.2, {opacity: 0, y: -150, delay: 2.5, ease: expoEaseInOut,})
gsap.from('.header-img', 1.2, {opacity: 0, y: -150, delay: 3, ease: expoEaseInOut,})
gsap.from('.header-main-img', 1.2, {opacity: 0, x: -150, delay: 1, ease: expoEaseInOut,})





// SCROLLTRIGGER

gsap.registerPlugin(ScrollTrigger);

   gsap.from(".hero-text", {
    x: -150,  
    opacity: 0, 
    delay: 2,
    duration: 1.2, 
    ease: expoEaseInOut, 
    scrollTrigger: {
        trigger: ".hero-text", 
        start: "top center", 
        end: "center center", 
        scrub: 1.5, 
    },
});

   gsap.from(".hero-img-1", {x: -150, opacity: 0, delay: 2, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: ".hero-img-1", start: "top center", end: "center center", scrub: 1.5, },});
   gsap.from(".hero-img-2", {x: -150, opacity: 0, delay: 2.5, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: ".hero-img-2", start: "top center", end: "center center", scrub: 1.5, },});
   gsap.from(".hero-img-3", {x: -150, opacity: 0, delay: 3, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: ".hero-img-3", start: "top center", end: "center center", scrub: 1.5, },});
   gsap.from(".hero-img-4", {x: -150, opacity: 0, delay: 3.5, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: ".hero-img-4", start: "top center", end: "center center", scrub: 1.5, },});
   gsap.from(".hero-img-5", {x: -150, opacity: 0, delay: 4, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: ".hero-img-5", start: "top center", end: "center center", scrub: 1.5, },});
   gsap.from(".hero-img-6", {x: -150, opacity: 0, delay: 4.5, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: ".hero-img-6", start: "top center", end: "center center", scrub: 1.5, },});
   gsap.from(".key-img", {x: -150, opacity: 0, delay: 4.5, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: ".key-img", start: "top center", end: "center center", scrub: 1.5, },});

   gsap.from("#hero-col-1", {x: -150, opacity: 0, delay: 5, duration: 1.2, ease: expoEaseInOut, scrollTrigger: {trigger: "#hero-col-1", start: "top center", end: "center center", scrub: 1.5, },});



   
  
   gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-col-2",
      start: "top center", 
      end: "bottom center", 
      scrub: 1.5,
      markers: false,
    }
  })
  .from("#hero-col-2", { opacity: 0, y: -20 }, {opacity: 1, y: 20, duration: 1.5, ease: expoEaseInOut});
/////////////

var controller = new ScrollMagic.Controller();
var timeline = gsap.timeline();

timeline.from("#animation-container li", { opacity: 0, x: -50, stagger: 0.2 });

// Create a ScrollMagic scene
var scene = new ScrollMagic.Scene({
  triggerElement: "#animation-container",
  reverse: true,
  offset: 0, 
})
  .setTween(timeline)
  .addTo(controller);

  ///////
var controller = new ScrollMagic.Controller();
var timeline = gsap.timeline();

timeline.from("#animation-container-key li", { opacity: 0, x: -50, stagger: 0.2 });

// Create a ScrollMagic scene
var scene = new ScrollMagic.Scene({
  triggerElement: "#animation-container-key",
  reverse: true,
  offset: 0, 
})
  .setTween(timeline)
  .addTo(controller);

var controller = new ScrollMagic.Controller();
var timeline = gsap.timeline();

timeline.from("#key-img-col img", { opacity: 0, x: -50, stagger: 0.2 });

// Create a ScrollMagic scene
var scene = new ScrollMagic.Scene({
  triggerElement: "#key-img-col",
  reverse: true,
  offset: 0, 
})
  .setTween(timeline)
  .addTo(controller);

  //////////////

  var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from("#animation-card-container h1", { opacity: 0, x: -50, stagger: 0.2});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#animation-card-container",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);

    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from("#animation-p-container p", { opacity: 0, y: 50, stagger: 0.2});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#animation-p-container",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
//////IMG/////

    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from("#animation-img-container img", { opacity: 0, y: 50, stagger: 0.2, delay: 0.5});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#animation-img-container",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);

    //////
    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".plan-text-h1 h1", { opacity: 0, y: -50, stagger: 0.2, delay: 0.5});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".plan-text-h1",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
    //////
    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".plan-text-p p", { opacity: 0, y: -50, stagger: 0.2, delay: 1});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".plan-text-p",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
    ///////////////////////////
    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".img-plan-1", { opacity: 0, x: -50, stagger: 0.2, delay: 1.5});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".img-plan-1",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
    ///////////////////
    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".img-plan", { opacity: 0, y: 50, stagger: 0.2, delay: 1.5});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".img-plan",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);

    ////////////////////
    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".img-revenue-1", { opacity: 0, x: -50, stagger: 0.2, delay: 0.5});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".img-revenue-1",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);

    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".img-revenue-2", { opacity: 0, x: -50, stagger: 0.2, delay: 1});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".img-revenue-1",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);

    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".img-revenue-3", { opacity: 0, x: -50, stagger: 0.2, delay: 1.5});
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".img-revenue-3",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);


    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  
  timeline.from(".revenue-text", { opacity: 0, y: -50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".revenue-text",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);

    var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();

  /////BOX////////////
  
 
  timeline.from("#boxs-imgs-1", { opacity: 0, y: 50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#boxs-imgs-1",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);

  timeline.from(".last-h1", { opacity: 0, y: -50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".last-h1",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);


  timeline.from("#boxs-imgs-2", { opacity: 0, y: 50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#boxs-imgs-2",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
  timeline.from("#boxs-imgs-3", { opacity: 0, y: 50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#boxs-imgs-3",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
  timeline.from("#boxs-imgs-4", { opacity: 0, y: 50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#boxs-imgs-4",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
  timeline.from("#boxs-imgs-5", { opacity: 0, y: 50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#boxs-imgs-5",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);
  timeline.from("#boxs-imgs-6", { opacity: 0, y: 50, stagger: 0.2, });
  
  // Create a ScrollMagic scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#boxs-imgs-6",
    reverse: true,
    offset: 0, 
  })
    .setTween(timeline)
    .addTo(controller);




//////////////
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
