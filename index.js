const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const loader = document.getElementById("preloader")

window.addEventListener("load",()=>{
    setTimeout(function(){
        loader.style.display="none"
    }, 2000);
})

setInterval(() => {
    let fecha = new Date();
    hour.textContent = fecha.getHours()
    min.textContent= fecha.getMinutes()
    sec.textContent= fecha.getSeconds()
}, 1000);




