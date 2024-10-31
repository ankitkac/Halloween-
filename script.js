// GSAP Ghost Animations (Already in code)
gsap.to(".ghost1", {
    x: 20,
    yoyo: true,
    repeat: -1,
    duration: 2,
    ease: "power1.inOut"
});

gsap.to(".ghost2", {
    y: -20,
    yoyo: true,
    repeat: -1,
    duration: 3,
    ease: "power1.inOut"
});

gsap.to(".ghost3", {
    x: -20,
    yoyo: true,
    repeat: -1,
    duration: 4,
    ease: "power1.inOut"
});

// GSAP Fog Animation
gsap.to(".fog1", {
    opacity: 0.3,
    duration: 5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

gsap.to(".fog2", {
    opacity: 0.4,
    duration: 7,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

// GSAP Bat Animations
gsap.to(".bat1", {
    x: 50,
    y: -30,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

gsap.to(".bat2", {
    x: -40,
    y: 20,
    duration: 4,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

gsap.to(".bat3", {
    x: 30,
    y: -20,
    duration: 5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

// Pumpkin Click Animation (already in code)
const pumpkin = document.getElementById('pumpkin');
pumpkin.addEventListener('click', () => {
    gsap.to("#pumpkin", { 
        scale: 1.3, 
        rotation: 360, 
        duration: 0.5, 
        ease: "back.out" 
    });
    alert("Boo! Happy Halloween, Rachel!");
});
