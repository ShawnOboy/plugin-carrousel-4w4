(function() {
  // Variables
  let bouton = document.querySelector(".carrousel__ouvrir")
  let carrousel  = document.querySelector(".carrousel")
  let carrousel__x = document.querySelector(".carrousel__x")
  let carrousel__figure = document.querySelector(".carrousel__figure")
  let carrousel__form = document.querySelector(".carrousel__form")
  let galerie = document.querySelector(".galerie")
  let galerie__img = galerie.querySelectorAll("img")
  let flechG = document.querySelector(".flch_G")
  let flechD = document.querySelector(".flch_D")
  let articles = document.querySelectorAll(".blocflex__article")
  let position = 0
  let index = 0
  let ancien_index = -1

  // Événements
  carrousel__x.addEventListener('mousedown', function() {
    carrousel.classList.remove('carrousel--activer')
    for (const article of articles) {
      article.style.pointerEvents = "all";
    }
    clearInterval(redimension_Carrousel)
  })

  flechG.addEventListener("mousedown", function() {
    index = index > 0 ? index - 1 : galerie__img.length - 1
    afficher_image(index)
  })

  flechD.addEventListener("mousedown", function() {
    index = index < galerie__img.length - 1 ? index + 1 : 0
    afficher_image(index)
  })

  // Fonctions
  for (const elm of galerie__img) {
    elm.dataset.index = position
    elm.addEventListener('mousedown', function(evt) {
      carrousel.classList.add('carrousel--activer')
      index = evt.target.dataset.index
      afficher_image(index)
    })

    let img = document.createElement('img')
    img.classList.add('carrousel__img')
    img.src = elm.src
    carrousel__figure.appendChild(img)

    let rad = document.createElement('input')
    rad.setAttribute('type','radio')
    rad.setAttribute('name', 'carrousel__rad')
    rad.classList.add('carrousel__rad')
    rad.dataset.index = position
    rad.addEventListener('mousedown', function() {
      index = this.dataset.index
      afficher_image(index)
    })
    position++
    carrousel__form.appendChild(rad)
  }

  function afficher_image(index) {
    if (ancien_index != -1) {
      carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
    }
    carrousel__figure.children[index].classList.add('carrousel__img--activer')
    for (const article of articles) {
      article.style.pointerEvents = "none";
    }
    ancien_index = index
    // redimension_Carrousel()
    verif_index()
  }

  function verif_index() {
    let btnsRad = document.querySelectorAll(".carrousel__rad")
    for (let i = 0; i < btnsRad.length; i++) {
      btnsRad[i].checked = i == index
    }
    clearInterval(redimension_Carrousel)
    setInterval(redimension_Carrousel, 100)
  }

  function redimension_Carrousel(){
    const imageWidth = carrousel__figure.children[index].naturalWidth
    const imageHeight = carrousel__figure.children[index].naturalHeight
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
  
    let carrouselHeight = windowHeight 
    if (windowWidth > 1000) {
      carrouselHeight = windowHeight - windowHeight/3
    }
  
    let carrouselWidth = windowWidth - windowWidth/3 //carrouselHeight * imageWidth/imageHeight
  
    carrousel.style.width = `${carrouselWidth}px`
    carrousel.style.height = `${carrouselHeight}px`
    carrousel.style.top= `${-(windowHeight-carrouselHeight)/2}px`
    carrousel.style.left= `${0}px`

  }
  
})()
