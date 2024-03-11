/* -------------------------------------------------  */
//Q: associer la fonction déplacer à l'attribut onclick de chaque image
function ajouterOnClick() {
  var images = document.getElementsByTagName('img');
  for (var i = images.length-1; i >= 0; i--){
    images[i].onclick = deplacer;
  }
}
/* -------------------------------------------------  */


/* -------------------------------------------------  */
/* mes noms de films (à afficher dans le bloc choix   */ 
var noms = [
  'Jurassic Parc',
  'Star Wars',
  'Hobbit',
  'Cite Or',
  'Le dernier Empereur',
  'Apocalypse now'  
]
/* -------------------------------------------------  */


/* -------------------------------------------------  */
/* À partir d'ici c'est à toi de jouer !!!            */ 
/* -------------------------------------------------  */

function recupNumFilm(nom){
  i=0;
  for(f in noms){
    i++;
    if (nom===f){
      return i;
    }
  }
  return 0;
}

/* -------------------------------------------------  */
/* Mes variables */ 
/* récupération des élements de la page */ 
/* le bloc magasin; le bloc choix, le bloc panier ... */
var films = document.getElementsByTagName('img');
var panier=0;
function countMagasin() {
  let taille = document.getElementById("magasin").children.length;
  let child = (document.getElementById("magasin").children);
  var NbDVDMagasin=taille-1;
  var AMag=Array.from(child).slice(1,undefined);
  console.log(AMag);
  // document.getElementById("taille").innerHTML = taille;
}
function countChoix() {
  let taille = document.getElementById("choix").children.length;
  let child = (document.getElementById("choix").children);
  var NbDVDChoix=taille-1;
  var AChoix=Array.from(child).slice(1,undefined);
  console.log(AChoix);
  // document.getElementById("taille").innerHTML = taille;
}

function MajVar(){
  countChoix();
  countMagasin();
  console.log(panier);
}


/* à completer */ 

/* -------------------------------------------------  */


function deplacer(e) {
  /* On selection l'image à deplacer */
  var elementImg = e.target;
  var elementSrc=e.src;
  /*  Si l'image est à gauche alors je la met à droite*/
  if(elementImg.parentNode.id === "magasin"){
    /* 1- ajouter elementImg à elementDest                  */ 
	/* 2- créer un nouvel objet de type balise span         */
    /* 3- creer un nouvel objet de type texte pour indiquer */
	/* le titre du film (dispo dans le tableau noms)        */
	/* 4 - ajouter ce texte à l'objet span                  */
	/* 5- ajouter le span juste avant elemenIMG             */
  // document.getElementById("choix").appendChild(e);


    /* 6- compter le nb d'images choisies (prix)            */
    panier+=2.5;
    /* à completer */ 
  }

  /* Si l'image est à droite alors je la met à gauche */
  else{
    /* 1. supprimer l'image à elementSrc                   */
    /* 2. ajouter l'image à elementSrc                     */
    /* 3. enlever l'image du compteur d'images choisies    */
    panier-=2.5;
  }
  
  /* Ne pas oublier d'incrémenter le prix dans le panier */ 
  
  MajVar();
}

/* ------------------------------------------------------------  */
/* On charge la fonction ajouterOnClicj au chargement de la page */
/* ------------------------------------------------------------  */
document.body.onload = ajouterOnClick;
/* ------------------------------------------------------------  */

