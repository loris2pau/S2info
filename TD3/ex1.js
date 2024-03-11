let n=1000;
n = prompt("saisissez un rang");
let suite =[0, 1];
for( i=2; i<=n;i++){
    suite.push(suite[i-1]+suite[i-2])
    console.log(i+":"+suite[i])

}
d = new Date();
let h=d.getHours();
let m=d.getMinutes();

document.writeln("<p>");
document.writeln("à "+h+"h"+m+"min")
document.writeln("le "+n+"e elt de la suite de fibonachi est "+ suite[n-1] );
document.writeln("</p>");

document.writeln("<p>");
document.writeln("voici la suite : <br>");
document.writeln("</p>");
let text = "";

suite.forEach(myFunction);
function myFunction(item, index) {
    document.writeln(index +":"+ item);
    document.writeln("<br>");
  }




// console.log(suite[n-1])