gsap.registerPlugin(ScrollTrigger)


const menuBar = document.querySelector('.mynavbar .nav-extra i')
const navbarNav = document.querySelector('.mynavbar .navbar-nav');


menuBar.addEventListener('click',() => {
    navbarNav.classList.toggle('active')
    menuBar.classList.toggle('active')
})


// GSAP
let tl = gsap.timeline({scrollTrigger:{
    trigger: ".portfolio",
    scrub:3,
    pin:true,
    start: "top top",
}});

tl.to(".main", {
}, 'c')
.to(".top",{
    top:"-50%",
},'c')
.to(".bottom",{
    bottom:"-50%",
},'c')
.to(".main .content",{
    delay: -0.4,
    margin: "10% 0"
},'d')


gsap.to('.hero',{
    opacity: 0,
    scrollTrigger:{
        trigger: ".hero",
        scrub: .3,
        start: "top top",
    }
})


