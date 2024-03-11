function image(img){
    var nom=trouvenom(img);
    var src=img.src;
    var l = img.clientWidth;
    var L = img.clientHeight;
    alert("SOURCE : "+src+"\nNOM : "+nom+"\nTAILLE : "+l+"*"+L);

}

function trouvenom(img){
    var nom="";
    src=img.src;
    l=src.length;
    p=0;
    for(i=0;i<l;i++){
        if(src[i]=="/"){
            p=i;
            console.log(p);
        }
    }
    for(i=p+1;i<l;i++){
        nom=nom+src[i];
    }
    return nom;
}


function changement(){
    var max=10;
    var nb=Math.floor(Math.random() * max);
    console.log(nb);
}