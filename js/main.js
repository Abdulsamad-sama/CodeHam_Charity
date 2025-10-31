let clicked = "you clicked";


const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const slideWrapper = document.querySelector(".screen-slider-wrapper");
const slidecontainer = document.querySelector(".screen-slider-wrapper .screen-slider-container");
const learnBtn1 = document.querySelector("#learn1");
const learnBtn2 = document.querySelector("#learn2");
const learnBtn3 = document.querySelector("#learn3");
const lBtnList1 = document.querySelector(".learn1-list");
const lBtnList2 = document.querySelector(".learn2-list");
const lBtnList3 = document.querySelector(".learn3-list");
const donateBtn1 = document.querySelector(".one")
const donateBtn2 = document.querySelector(".two")
const donateBtn3 = document.querySelector(".three")
// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Toggle menu visibility
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Optional: animate the hamburger icon
    hamburger.classList.toggle("open");
  });
});


/******* SCREEN SLIDER *******/
nextBtn.onclick = function(){
    moveSlider("next");
};

prevBtn.onclick = function(){
    showSlider("prev");
    
};


let timeRunning = 3000;
let runTimeOut;

moveSlider = (type)=>{
    slindingScreen = document.querySelectorAll(".allscreen-slider")
    if(type === "next"){
        console.log(clicked)
        slidecontainer.appendChild(slindingScreen[2])
        slideWrapper.classList.add("next")
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        /* slideWrapper.classList.remove("next") */
    }, timeRunning);
}


showSlider = (type)=>{
    slindingScreen = document.querySelectorAll(".allscreen-slider")
    if(type === "prev"){
        slidecontainer.appendChild(slindingScreen[1])
        slideWrapper.classList.add("prev")
        console.log(clicked)
    }
        
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slideWrapper.classList.remove("prev")
    }, timeRunning);
    }




/******* LEARN ABOUT US *******/

learnBtn1.addEventListener("click", ()=>{
    learnBtn1.classList.remove("active")
    learnBtn2.classList.remove("show")
    learnBtn3.classList.remove("show")
    lBtnList1.classList.remove("active")
    lBtnList2.classList.remove("show")
    lBtnList3.classList.remove("show")

});

learnBtn2.addEventListener("click", ()=>{
    learnBtn2.classList.add("show")
    learnBtn1.classList.add("active")
    learnBtn3.classList.remove("show")
    lBtnList2.classList.add("show")
    lBtnList1.classList.add("active")
    lBtnList3.classList.remove("show")
});


learnBtn3.addEventListener("click", ()=>{
    learnBtn3.classList.add("show")
    learnBtn2.classList.remove("show")
    learnBtn1.classList.add("active")
    lBtnList3.classList.add("show")
    lBtnList1.classList.add("active")
    lBtnList2.classList.remove("show")
});


/******* DONATE *******/

donateBtn1.addEventListener("click", ()=>{
    donateBtn1.classList.add("active")
    donateBtn2.classList.remove("active")
    donateBtn3.classList.remove("active")
});


donateBtn2.addEventListener("click", ()=>{
    donateBtn2.classList.add("active")
    donateBtn1.classList.remove("active")
    donateBtn3.classList.remove("active")
});
donateBtn3.addEventListener("click", ()=>{
    donateBtn3.classList.add("active")
    donateBtn1.classList.remove("active")
    donateBtn2.classList.remove("active")
});