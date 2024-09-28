// Use a script tag or an external JS file
// Apply GSAP animation to all images within the container
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a master timeline to control the sequence of animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hcontainer',
            start: 'top top',
            end: "+=200%", // Adjust based on the required animation length
            pin: true,
            scrub: true,
            markers: true, // Uncomment for debugging markers
        },
    });

    // First animation: img-2 zooms in
    tl.to('#img-2', {
        scale: 1.5,
        ease: 'none',
        duration: 3,
    });

    // Fade text at the same time the img2 animation happens
    tl.to(
        '.header-text h1',
        {
            opacity: 0,
            duration: 3,
            y: 10,
        }, 0 // this last part marks a delay, this has 0 delay so it happens at the same time as the #img-2 animation
    );

    //move up the subtitles texts to the center of the screen as name fades out
    tl.to(
        '.header-text .subtitle',
        {
            duration: 3,
            y: -100,
        } // this last part marks a delay
    );

    // fade out the main subtitle (eg: 'UI Engineer')
    tl.to(
        '.header-text .subtitle',
        {
            opacity: 0,
            duration: 3,
            y: -100,
        }, 5 // this last part marks a delay
    );

    // Second animation: img-1 zooms in after img-2
    tl.to('#img-1', {
        scale: 1.5,
        ease: 'none',
        duration: 3,
    }); 

    // fade IN the button to go to the next section
    tl.to(
        '.header-text .button',
        {
            opacity: 1,
            duration: 2,
            y: -20,
        }, "<");

    
});
