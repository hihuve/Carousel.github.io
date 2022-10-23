// CONSTS *******************************************************************************************************************

const btnL = document.getElementById("btn-left")
const btnR = document.getElementById("btn-right")
const imgs = document.querySelectorAll(".img")
const circles = document.querySelectorAll(".circle")

// LISTENERS *******************************************************************************************************************

btnL.addEventListener("click", moveLeft)
btnL.addEventListener("click", removeFade)
btnR.addEventListener("click", moveRight)
btnR.addEventListener("click", removeFadeR)


// FUNCTIONS *******************************************************************************************************************
function moveRight() {
    imgs.forEach((obj) => {
        obj.removeAttribute("id")
    })
    let elemento2 = window.getComputedStyle(imgs[1])
    let elemento2BG = elemento2.getPropertyValue("background-image")
    let elemento3 = window.getComputedStyle(imgs[2])
    let elemento3BG = elemento3.getPropertyValue("background-image")
    let elemento1 = window.getComputedStyle(imgs[0])
    let elemento1BG = elemento1.getPropertyValue("background-image")


    imgs[1].style.backgroundImage = elemento3BG
    imgs[2].style.backgroundImage = elemento1BG
    imgs[0].style.backgroundImage = elemento2BG


    if (imgs[1].style.backgroundImage == `url("http://127.0.0.1:5500/img/3.jpg")`) {
        circles.forEach((o) => {
            o.removeAttribute("id")
        })
        circles[2].setAttribute("id", "fillCircle")
    } else if (imgs[1].style.backgroundImage == `url("http://127.0.0.1:5500/img/2.jpg")`) {
        circles.forEach((o) => {
            o.removeAttribute("id")
        })
        circles[1].setAttribute("id", "fillCircle")
    } else if (imgs[1].style.backgroundImage == `url("http://127.0.0.1:5500/img/1.jpg")`) {
        circles.forEach((o) => {
            o.removeAttribute("id")
        })
        circles[0].setAttribute("id", "fillCircle")
    } else {
        alert("ERROR")
    }
}


function moveLeft() {
    imgs.forEach((obj) => {
        obj.removeAttribute("id")
    })
    let elemento2 = window.getComputedStyle(imgs[1])
    let elemento2BG = elemento2.getPropertyValue("background-image")
    let elemento3 = window.getComputedStyle(imgs[2])
    let elemento3BG = elemento3.getPropertyValue("background-image")
    let elemento1 = window.getComputedStyle(imgs[0])
    let elemento1BG = elemento1.getPropertyValue("background-image")

    imgs[1].style.backgroundImage = elemento1BG
    imgs[2].style.backgroundImage = elemento2BG
    imgs[0].style.backgroundImage = elemento3BG

    if (imgs[1].style.backgroundImage == `url("http://127.0.0.1:5500/img/3.jpg")`) {
        circles.forEach((o) => {
            o.removeAttribute("id")
        })
        circles[2].setAttribute("id", "fillCircle")
    } else if (imgs[1].style.backgroundImage == `url("http://127.0.0.1:5500/img/2.jpg")`) {
        circles.forEach((o) => {
            o.removeAttribute("id")
        })
        circles[1].setAttribute("id", "fillCircle")
    } else if (imgs[1].style.backgroundImage == `url("http://127.0.0.1:5500/img/1.jpg")`) {
        circles.forEach((o) => {
            o.removeAttribute("id")
        })
        circles[0].setAttribute("id", "fillCircle")
    } else {
        alert("ERROR")
    }
}



function removeFade() {
    imgs.forEach((o) => {
        o.setAttribute("id", "fade")
    })
}
function removeFadeR() {
    imgs.forEach((o) => {
        o.setAttribute("id", "fadeR")
    })
}