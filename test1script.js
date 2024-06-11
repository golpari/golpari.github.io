gsap.registerPlugin(ScrollTrigger);



function show_next_hero_panel(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, {autoAlpha: 0, duration:0.5})
    gsap.to(newSection, {autoAlpha: 1, duration:0.5});
    currentSection = newSection;
  }
}


const panels = gsap.utils.toArray('.main-wrapper__panel');



gsap.set(panels[0], {autoAlpha:1});
let currentSection = panels[0];



ScrollTrigger.create({
  trigger: '.main-wrapper__panel-wrapper',
  start: () => 'top top',
  end: () => "+=" + (panels.length - 1) * innerHeight,
  pin: true
});



panels.forEach((panel, i) => {
  
  ScrollTrigger.create({
    trigger: ".main-wrapper",
    start: () => "top top-=" + (i - 0.5) * innerHeight,
    end: () => "+=" + innerHeight,
    onToggle: self => self.isActive && show_next_hero_panel(panel)
  });
  
});