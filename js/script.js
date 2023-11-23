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
.to(".top h1",{
    top:"70%",
},'c')
.to(".bottom",{
    bottom:"-50%",
},'c')
.to(".bottom h1",{
    bottom:"70%",
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

let tl2 = gsap.timeline({scrollTrigger:{
    trigger: '.hero',
    scrub: 3,
    start: "top top",
}})

tl2.to('.big-title',{
    y: '30rem',
}, 'a')
.to('.caption',{
    opacity:0,
    y: '20rem',
}, 'a')
.to('.button',{
    opacity:0,
    y: '15rem',
}, 'a')



// Split typr
const splitText = document.querySelector('.split')

const text = new SplitType(splitText, {types: 'chars'})

gsap.from(text.chars,{
    scrollTrigger: {
        trigger: splitText,
        star: "top 80%",
        end: "top 40%",
        toggleActions: 'play play reverse reverse',
    },
    scaleY: 0,
    transformOrigin: "top",
    y: -20,
    stagger: 0.2,
    duration: 0.3,
})


