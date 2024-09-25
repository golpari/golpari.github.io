// use a script tag or an external JS file
// Apply GSAP animation to all images within the container
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    // Create a master timeline to control the sequence of animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.container',
            start: 'top top',
            end: '+=100%', // Adjust based on the required animation length
            pin: true,
            scrub: true,
            // markers: true, // Uncomment for debugging markers
        }
    });

    // First animation: img-1 zooms in
    tl.to('#img-2', {
        scale: 1.5,
        ease: "none",
        duration: 3
    });

    // Second animation: img-2 zooms in after img-1
    tl.to('#img-1', {
        scale: 1.5,
        ease: "none",
        duration: 3
    });
});