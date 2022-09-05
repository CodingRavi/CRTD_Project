var t1=gsap.timeline();
t1
.from("nav",{
    y: -20,
    opacity:0,
    duration:1
})
.from(".sright",{
    x:40,
    opacity: 0,
    duration:.5
})
.from(".text_part",{
    x:-40,
    opacity: 0,
    duration:2
})
.from("#s_heading",{
    onStart:$(function(){
        $('#s_heading').textillate({ in: { effect: 'tada' } });
    }),
    duration:2
})
.from(".heading_services",{
    scrollTrigger:{
        trigger:".heading_services",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:6
    },
    x:-100,
    // opacity: 0,
    duration:2
})
.from(".clsseslive",{
    scrollTrigger:{
        trigger:".clsseslive",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:3
    },
    x:-100,
    // opacity: 0,
    duration:2,
    delay:2
})