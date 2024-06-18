function scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
scroll();



function page1Animation(){
    var tl = gsap.timeline()
tl.from("nav a,nav h4, nav button ",{
    y: - 30,
    opacity:0,
    duration: 1,
    delay:1,
    stagger: 0.2
})

tl.from("#center1 h1",{
    x:-10,
    opacity:0,
    duration:0.5
})
tl.from("#center1 p, #center1 button",{
    x:-10,
    opacity:0,
    duration:0.5
})

gsap.from("#center2 img",{
    x:600,
    opacity:0,
    delay:3.5,
    duration:1
})

gsap.from("#section1bottom img",{
    y:600,
    opacity:0,
    delay:3.5,
    duration:1.5,
    stagger:0.15
})

}

page1Animation();


// gsap.from("#services h3",{
//     x:-200,
//     duration:1,
//     delay: 1,
//     scrollTrigger:{
//         scrollTrigger:" .section2 #services h3",
//         scroller: "body",
//         markers:true,
//         start: "bottom 50%",
//         end: "bottom 60%"

//     }
// })

// gsap.from("#services p",{
//     x:-1200,
//     duration:2,
//     delay: 1,
//     scrollTrigger:{
//         scrollTrigger:" .section2 #services h3",
//         scroller: "body",
//         markers:true,
//         start: "bottom 50%",
//         end: "bottom 60%"

//     }
// })

var tl2 = gsap.timeline({
    scrollTrigger:{
        scrollTrigger:" .section2",
        scroller: "#main",
        // markers:true,
        start: "bottom 30%",
        end: "bottom 10",
        scrub:2
    }
})

tl2.from("#services",{
    y:30,
    duration:1,
    opacity:0
})

tl2.from(".elem.right",{
    x:30,
    opacity:0,
    delay:1,
    duration:18,
    stagger:1,
},"anim")

tl2.from(".elem.left",{
    x:-30,
    opacity:0,
    delay:1,
    duration:18,
    stagger:1
},"anim")

var tl3 = gsap.timeline({
    scrollTrigger:{
        scrollTrigger:" .foot",
        scroller: "#main",
        // markers:true,
        start: "bottom 0%",
        // end: "top 100",
        scrub:2
    }
})

tl3.from("#f1 p, #f1 button, #f1 img",{
    y:30,
    opacity:0,
    delay:1
})