const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
const slideArr = Array.from(slides);
const dotdArr = Array.from(dots);
let inter;
function showSlide(slideIndex){
    for(let i = 0;i<slideArr.length;i++){
        slideArr[i].classList.remove("current");
        dotdArr[i].classList.remove("active")
    }
    slideArr[slideIndex].classList.add("current");
    dotdArr[slideIndex].classList.add("active")
}
// get the index
// let index= ()=> {
//     for(let i = 0;i<dotdArr.length;i++){
//         if(dotdArr[i].classList.contains("active")){
//             return i
//         }
//     }
// }

dotdArr.forEach((el,index) =>{
    el.addEventListener("click",()=>{
        showSlide(index);
        clearInterval(inter)
        inter = setInterval(nextSlide,2000)
    })
})


// console.log(slides)
function nextSlide(){
    const current = document.querySelector(".current")
    const dot = document.querySelector(".active");
   
    dot.classList.remove("active");
    current.classList.remove("current");
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add("current");
        dot.nextElementSibling.classList.add("active");
    }else{
        slideArr[0].classList.add("current");
        dotdArr[0].classList.add("active")
    }
    
}
// function kjlk(){
//     const current = document.querySelector(".current")
//     const dot = document.querySelector(".active");
//     for(let i = 0;i<dots.length;i++){
//         if(dots[i].classList.contains("active")){
//             return i;
//         }
//     }
    
// }
// console.log(kjlk())


// dots.forEach(dot =>{
//     dot.addEventListener("click", event=> {
//         const el = event.target
//     })
// })

// function showSlide(slideIndex){
//     const
// }
inter = setInterval(nextSlide,2000)