function countChild() {
    let taille = document.getElementById("mySelect").children.length;
    let child = document.getElementById("mySelect").children;
    document.getElementById("taille").innerHTML = taille;
}

function killChild() {
    let list = document.getElementById("mySelect");
    list.removeChild(list.firstElementChild);
}
function addChild() {
    let ajout = document.getElementById("add").value;
    let node = document.createElement("option");
    let textnode = document.createTextNode(ajout);
    node.appendChild(textnode);
    document.getElementById("mySelect").appendChild(node);
}
function colorChild(){
    let c = document.getElementById("mySelect").children;
    c[0].style.backgroundColor = "red";
}

function deleteElement() {
    let name = document.getElementById("kill").value;
    let list = document.getElementById("mySelect");
    let taille = document.getElementById("mySelect").children.length;
    let child = document.getElementById("mySelect").children;
    let trouve=0;
    let i=0;
    while(i<taille && !trouve){
        if (name==child[i].text){
            trouve=1;
            list.removeChild(child[i]);
        }
        i++;
    }
}
function removeChild(achild) {
    let list = document.getElementById("mySelect");
    list.removeChild(achild);
}
function myFunction(ligne){
    var myWindow = window.open("", "coucou", "width=500,height=500");
    myWindow.document.write("<h1>"+ligne.value+"</h1>");
    if(ligne.value=="Jungeli"){
        myWindow.document.write("<iframe src='https://drive.google.com/file/d/1bzRFSEwKvNWgewWJHKObQqylZs5XEARe/preview' width='640' height='480' allow='autoplay'></iframe>")
    }
    else{
        myWindow.document.write("<img src='../TD3/spodermen.png'>")
    }
}
