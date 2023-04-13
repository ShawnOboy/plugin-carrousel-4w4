(function() {

    console.log("Début carrousel");
    let carrousel__ouvrir = document.querySelector(".carrousel__ouvrir");
    let carrousel__x = document.querySelector(".carrousel__x");
    let carrousel = document.querySelector(".carrousel");
    carrousel__ouvrir.addEventListener("mousedown", function() {

        carrousel.classList.add("carrousel--ouvrir")

    })
    carrousel__x.addEventListener("mousedown", function() {

        carrousel.classList.remove("carrousel--ouvrir")

    })

})()