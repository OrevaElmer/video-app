const switchBtn = document.querySelector(".switch-btn")
const switchSpan = document.querySelector(".switch-btn .switch")
const video = document.querySelector(".video-controller")
const preloader = document.querySelector(".preloader")

switchBtn.addEventListener("click", ()=>{
    if(!switchSpan.classList.contains("active")){
        switchSpan.classList.add("active")
        video.pause()
    }else{
        switchSpan.classList.remove("active")
        video.play()
    }
})

window.addEventListener("load",()=>{
    preloader.classList.add("hide")
})