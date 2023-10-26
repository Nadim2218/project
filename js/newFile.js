$(function() {


    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".slide");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-sliders",
            pin: ".main",
            pinSpacing: true,
            scrub: 1,
            end: "+=3000",
        }
    });

    gsap.to('.next-block', {
        backgroundColor: 'tomato',
        scrollTrigger: {
            trigger: '.next-block',
            pinnedContainer: ".main",
            start: 'top 50%',
            toggleActions: 'play none reset none',
        }
    });



});