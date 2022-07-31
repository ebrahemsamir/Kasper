// let slides = document.querySelectorAll(".landing .slide img");
// let nextslide = document.querySelector(".landing .right");
// let prevslide = document.querySelector(".landing .left");
// let bullets = document.querySelectorAll(".landing .bullets li");
// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`;
// })
// let counter = 0;
// nextslide.addEventListener("click", () => {
//     counter++;
//     swaper();
//     act_bullet();
// })
// prevslide.addEventListener("click", () => {
//     counter--;
//     swaper();
//     act_bullet();
// })
// function swaper() {
//     if (counter === slides.length) {
//         counter = 0;
//     } else if (counter < 0)
//         counter = slides.length - 1;
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     })
// }
// bullets.forEach((bullet, index) => {
//     bullet.setAttribute("data-index", index);
// })
// function act_bullet() {
//     for (let i = 0; i < bullets.length; i++) {
//         if (i === counter) {
//             bullets.forEach((e) => {
//                 e.classList.remove("active");
//             })
//             bullets[i].classList.add("active");
//         }
//     }
// }

let landing = document.querySelector(".landing");
// let imgs = ["https://imgs.search.brave.com/h-aEQHAWk8aaIO0i51P5rS9yzrYw3Cge98j2gLayfx8/rs:fit:1200:1200:1/g:ce/aHR0cDovL3dhbGx1/cC5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMTAvMTIv/MTIzMTk2LWJyYW5j/aC1vd2wtYmlyZHMu/anBn", 
// "https://imgs.search.brave.com/Zhp7r_tSzMECFIX1fp1tlT2erDlu4_ttV0z76s8pKDg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/YmlyZHdhdGNoaW5n/ZGFpbHkuY29tLzIw/MjEvMDMvM18xNl8y/MDIxXy04LURlTm9p/c2VBSS1kZW5vaXNl/LXNjYWxlZC5qcGc", 
// "https://imgs.search.brave.com/o8ljhhUYdkPVdxj9ti6w1Aa23CBPzeOz1P5P9-QkuBg/rs:fit:1024:640:1/g:ce/aHR0cHM6Ly9jZG4u/dGhpbmdsaW5rLm1l/L2FwaS9pbWFnZS83/MTMzNTA2NzY1NjE3/ODg5MjgvMTAyNC8x/MC9zY2FsZXRvd2lk/dGgvMC8wLzEvMS9m/YWxzZS90cnVlP3dh/aXQ9dHJ1ZQ"];
// let imgs=[
//     {
//         "img":"./images/swiper-1.jpg"
//     },
//     {
//         "img":"./images/swiper-2.jpg"
//     },
//     {
//         "img":"./images/swiper-3.png"
//     }
// ]
let imgs = ["./images/swiper-1.jpg","./images/swiper-2.jpg","./images/swiper-3.png"]
let nextslide = document.querySelector(".landing .right");
let prevslide = document.querySelector(".landing .left");
let bullets = document.querySelectorAll(".landing .bullets li");
bullets.forEach((bullet, index) => {
    bullet.setAttribute("data-index", index);
})
let counter = 0;
nextslide.addEventListener("click", () => {
    counter++;
    swaper();
    bulletAct();
})
prevslide.addEventListener("click", () => {
    counter--;
    swaper();
    bulletAct();
})
for (let i = 0; i < imgs.length; i++) {
    bullets[i].addEventListener("click", () => {
        landing.style.backgroundImage = `url("${imgs[i]}")`;
        counter = i;
        bulletAct();
    })
}
function swaper() {
    if (counter === imgs.length)
        counter = 0;
    else if (counter < 0)
        counter = imgs.length - 1;
    landing.style.backgroundImage = `url("${imgs[counter]}")`;
}

function bulletAct() {
    for (let i = 0; i < imgs.length; i++) {
        if (i === counter) {
            bullets.forEach((e) => {
                e.classList.remove("active");
            })
            bullets[i].classList.add("active");
        }
    }
}

let designSection = document.querySelector(".design");
let designImage = document.querySelector(".design .image img");
let designText = document.querySelector(".design .text");
// window.onscroll = () => {
//     if (scrollY >= designSection.offsetTop - 100) {
//         console.log("hi");
//         designImage.style.animation = "fadeleft .5s linear forward";
//         designText.style.animation = "faderight .5s linear forward";
//     }
// }

let tabs = document.querySelectorAll(".portfolio .suhlle a li");
let boxs = document.querySelectorAll(".portfolio .content .box")
tabs.forEach((e) => {
    e.onclick = () => {
        tabs.forEach((e) => {
            e.classList.remove("active");
        })
        boxs.forEach((ele) => {
            ele.getAttribute("data-box").toUpperCase() != e.innerHTML.toUpperCase() ? ele.style.display = "none" : ele.style.display = "block";
            if (e.innerHTML.toUpperCase() == "ALL")
                ele.style.display = "block";
        })
        e.classList.add("active");

    }
})
let progress = document.querySelectorAll(".our-skills .prog span");
let skills_Section = document.querySelector(".our-skills");



let statisSection = document.querySelector(".statis");
let targetNum = document.querySelectorAll(".statis .box .number");
let startedStats = false;
window.onscroll = () => {
    if (scrollY >= skills_Section.offsetTop - 200) {
        progress.forEach((e) => {
            e.style.width = e.getAttribute("data-progress");
        })
    }
    if (scrollY >= statisSection.offsetTop - 500) {
        if (!startedStats)
            targetNum.forEach((e) => getGoal(e));
        startedStats = true;
    }
    if (scrollY >= designSection.offsetTop - 100) {
        designImage.style.animation = "fadeleft 1s linear forwards";
        designText.style.animation = "faderight 1s linear forwards";
    }
}

function getGoal(e) {
    let goal = e.getAttribute("data-target");
    let x = setInterval(() => {
        e.innerHTML++;
        if (e.innerHTML == goal)
            clearInterval(x);
    }, 2000 / goal);

}
