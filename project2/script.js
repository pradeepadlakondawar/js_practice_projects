 
//using throotle to control the mouse move event 

const btn=document.querySelector("#throttle");
     
// Throttling Function
const throttleFunction=(func, delay)=>{
 
  // Previously called time of the function
  let prev = 0; 
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime(); 
 
    // Logging the difference between previously 
    // called and current called timings
    // console.log(now-prev, delay); 
     
    // If difference is greater than delay call
    // the function again.
    if(now - prev> delay){ 
      prev = now;
 
      // "..." is the spread operator here 
      // returning the function with the 
      // array of arguments
      return func(...args);  
    }
  }
}


document.querySelector('#center').addEventListener("mousemove", throttleFunction((e)=>{

    const div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add("center_div")

    div.style.left=e.clientX+'px';
    div.style.top=e.clientY+'px';

    const img = document.createElement('img');
    img.setAttribute("src","https://th.bing.com/th/id/OIP.MFu_FQK8Wis3EnHJ5CQ4-gHaEK?pid=ImgDet&rs=1")

    div.appendChild(img);

    // for animation we will use gsap
    gsap.to(div,{
        y:-30,
        ease:"power2",
        duration:0.3
    })
    gsap.to(img,{
        y:-30,
        ease:"power2",
        duration:0.3
    })
    gsap.to(div,{
        y:0,
        ease:"power2",
        delay:0.4,
        duration:0.3
    })
    gsap.to(img,{
        y:0,
        ease:"power2",
        delay:0.4,
        duration:0.3
    })


    setTimeout(function(){
        div.remove();
    },700);


  console.log("button is clicked")
}, 80));

