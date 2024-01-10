var home = document.querySelector(".nav-left-a2")
var search = document.querySelector(".nav-left-a1")
var page = document.querySelector(".page")
var page1 = document.querySelector(".page1")

home.onclick = () => {
    page.style.display = "none"
    page1.style.display = "block"
    home.style.filter = "invert(0)"
    search.style.filter = "invert(0.6)"
}
search.onclick = () => {
    home.style.filter = "invert(0.6)"
    search.style.filter = "invert(0)"
    page.style.display = "block"
    page1.style.display = "none"
}


var box = document.querySelectorAll(".pa1-bo-box");
var cardbtn = document.querySelectorAll(".card-btn button")
var card1 = document.querySelector(".card1")
var cardcon = document.querySelector(".card-con");
var img = document.querySelector(".card1 img");
// var boxcolor = document.querySelector("name");

box.forEach((box1) => {
    box1.onclick = () => {
        var boxid = box1.id
        var boxclass = box1.className
        img.src = boxid
        cardcon.style.display = "flex";
        if(boxclass == "pa1-bo-box") {
            card1.style.backgroundImage = "linear-gradient(180deg, #683636, #2E2929)"
        }
        else if (boxclass == "pa1-bo-box pa2-bo-box") {
            card1.style.backgroundImage = "linear-gradient(180deg, #000000, #2E2929)"
        }
        else if (boxclass == "pa1-bo-box pa3-bo-box") {
            card1.style.backgroundImage = "linear-gradient(180deg, #355e55, #2E2929)"
        }
        else if (boxclass == "pa1-bo-box pa4-bo-box") {
            card1.style.backgroundImage = "linear-gradient(180deg, #443f64, #090505)"
        }
        else if (boxclass == "pa1-bo-box pa5-bo-box") {
            card1.style.backgroundImage = " linear-gradient(180deg, #491414, #090505)"
        }
        // const mq = window.matchMedia( "(min-width: 450px)" );
        // const mq1 = window.matchMedia( "(min-width: 45px)" );
    // if (mq.matches) {
    //     if(boxclass == "pa1-bo-box") {
    //         cardcon.style.backgroundImage = "linear-gradient(180deg, #683636, #2E2929)"
    //     }
    //     else if (boxclass == "pa1-bo-box pa2-bo-box") {
    //         cardcon.style.backgroundImage = "linear-gradient(180deg, #000000, #2E2929)"
        //     }
        //     else if (boxclass == "pa1-bo-box pa3-bo-box") {
    //         cardcon.style.backgroundImage = "linear-gradient(180deg, #355e55, #2E2929)"
    //     }
    //     else if (boxclass == "pa1-bo-box pa4-bo-box") {
    //         cardcon.style.backgroundImage = "linear-gradient(180deg, #443f64, #090505)"
    //     }
    //     else if (boxclass == "pa1-bo-box pa5-bo-box") {
    //         cardcon.style.backgroundImage = " linear-gradient(180deg, #491414, #090505)"
    //     }
    // }
    // else if(mq1.matches){
    //     if(boxclass == "pa1-bo-box") {
    //         cardcon.style.backgroundImage = "none !important"
    //     }
    //     else if (boxclass == "pa1-bo-box pa2-bo-box") {
    //         cardcon.style.backgroundImage = "none !important"
    //     }
    //     else if (boxclass == "pa1-bo-box pa3-bo-box") {
    //         cardcon.style.backgroundImage = "none !important"
    //     }
    //     else if (boxclass == "pa1-bo-box pa4-bo-box") {
    //         cardcon.style.backgroundImage = "none !important"
    //     }
    //     else if (boxclass == "pa1-bo-box pa5-bo-box") {
    //         cardcon.style.backgroundImage = " none !important"
    //     }
    // }
    }
})






cardbtn.forEach((b) => {
    b.onclick = () => {
        cardcon.style.display = "none";
    }
})


