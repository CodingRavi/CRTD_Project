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
    // onStart:$(function(){
    //     $('#s_heading').textillate({ in: { effect: 'fadeInDown' } });
    // }),
    x:-40,
    opacity: 0,
    duration:2
})
// .from(".csrd",{
//     x:-100,
//     opacity: 0,
//     duration:1
// })
// .from(".heading_services",{
//     x:-100,
//     opacity: 0,
//     duration:1,
// })