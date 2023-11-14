// let rect=document.querySelector("#rect")
// window.addEventListener("mousemove", function(e){
//     console.log(e.clientX)
//     rect.style.left=e.clientX+"px";
// })


//using gsap - for animation
window.addEventListener("mousemove", function(e){
    var rect=document.querySelector("#rect")
    // console.log(e.clientX);
    console.log(rect.getBoundingClientRect().width/2);
    var xval = gsap.utils.mapRange(0,window.innerWidth,100 + rect.getBoundingClientRect().width/2,window.innerWidth - (100 +rect.getBoundingClientRect().width/2),e.clientX);
    gsap.to("#rect",{
        left: xval+"px"
    })
})

// gsap.utils.mapRange() -> ye property hamko range laga skte h

// rect.getBoundingClientRect().width - ye hamko hamare rect ka full widht deta h

