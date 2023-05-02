
(function(){
  let bouton = document.querySelector(".carrousel__ouvrir")
  /* -------------------------------------------------------- Variable du carrousel */
  let carrousel  = document.querySelector(".carrousel")
  let carrousel__x = document.querySelector(".carrousel__x")
  let carrousel__figure = document.querySelector(".carrousel__figure")
  let carrousel__form = document.querySelector(".carrousel__form")
  /* -------------------------------------------------------- Variable de la galerie */
  let galerie = document.querySelector(".galerie")
  let galerie__img = galerie.querySelectorAll("img")
  // console.log("galerie__img: " + galerie__img.length)
  // console.log(carrousel.tagName)
  /* ------------------------------------------ positionnement de l'image active du carrousel */
  let position = 0 // permet d'indexer les image de la galerie et 
  let index = 0
  let ancien_index = -1
  
  /* ----------------------------------------------------  ouvrir boîte modale */
  bouton.addEventListener('mousedown', function(){
    console.log('ouvrir la boîte modale')
    carrousel.classList.add('carrousel--activer')
    ajouter_img_dans_carrousel()
  
  })
  /* ----------------------------------------------------  fermer boîte modale */
  carrousel__x.addEventListener('mousedown', function(){
    console.log('fermer la boîte modale')
    carrousel.classList.remove('carrousel--activer')
  
  })
   
  /** 
  * ajouter_img_dans_carrousel
  * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
  */
  // function ajouter_img_dans_carrousel()
  // {
    for (const elm of galerie__img)
    {
      elm.dataset.index = position
      elm.addEventListener('mousedown', function(evt){
        index = evt.target.dataset.index
        afficher_image(index)
      })
  
      creation_img_carrousel(elm)
      creation_radio_carrousel()
    }
  // }
  
  function creation_img_carrousel(elm){
    //console.log(elm.getAttribute('src'))
    let img = document.createElement('img')
    // img.setAttribute('src', elm.getAttribute('src'))
    img.classList.add('carrousel__img')
    img.src = elm.src
    //console.log (img.getAttribute('src'))
    carrousel__figure.appendChild(img)
  }
  /**
  * Création d'un radio-bouton
  */
  
  function  creation_radio_carrousel(){
    let rad = document.createElement('input')
    rad.setAttribute('type','radio')
    rad.setAttribute('name', 'carrousel__rad')
    rad.classList.add('carrousel__rad')
    rad.dataset.index = position
    rad.addEventListener('mousedown', function(){
      index = this.dataset.index
      afficher_image(index)
    })
    position++
    carrousel__form.appendChild(rad)
  }
  
  function afficher_image(index){
  
    if (ancien_index != -1){
    carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
    }
    carrousel__figure.children[index].classList.add('carrousel__img--activer')
    ancien_index = index
  }
  
  /*
  permet de vérifier si la classe « carrousel--activer » 
  se trouve dans la liste des classe carrousel
    carrousel.classList.contain('carrousel--activer')
    mdn classList.contain()
  */
  
  })()