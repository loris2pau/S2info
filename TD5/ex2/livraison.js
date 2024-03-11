nom = new Array();
valeur = new Array();
/* On enlève le ? */
url = window.location.search.slice(1,window.location.search.length);
/* récupérer les différents paramètres séparés par un & */
listParam = url.split("&");
for(i=0;i<listParam.length;i++){
    laListe = listParam[i].split("=");
    nom[i] = laListe[0];
    valeur[i] = laListe[1];
    document.write("<p>"+nom[i]+" : "+valeur[i] +"</p>")
}
console.log(nom+ ' - ' + valeur);