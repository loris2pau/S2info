var l1=0;
var l2=0;
var l3=0;
var score=0;
var taille=(4*4)/2;
var temp;
function retourne(params) {
        //console.log(params.getAttribute('class'));
        temp =params.getAttribute('id');
        switch (params.getAttribute('class')) {
                case "i1":
                        params.src='../images/1.jpg';
                        break;               
                case "i2":
                        params.src='../images/2.png';
                        break;                       
                case "i3":
                        params.src='../images/3.jpg';
                        break;
                case "i4":
                        params.src='../images/4.jpg';
                        break;
                case "i5":
                        params.src='../images/5.jpg';
                        break;
                case "i6":
                        params.src='../images/6.png';
                        break;
                case "i7":
                        params.src='../images/7.jpg';
                        break;                        
                case "i8":
                        params.src='../images/8.png';
                        break;                        
                default:
                        params.src='../images/blanc.jpg';
                        break;

                }

                l3=l2;
                l2=l1;
                l1=temp;
                console.log(temp+"|"+ l1+"|"+ l2+"|"+ l3);
                if(l2!==0){
                        if((document.getElementById(l2).getAttribute('class'))==(document.getElementById(l1).getAttribute('class'))){
                                document.getElementById(l2).alt="oui";
                                document.getElementById(l1).alt="oui";
                                score++;
                                console.log(score);
                                if(score>=taille){
                                        alert("bravo");
                                }
                        }
                }
                if(l3!==0){
                        if(document.getElementById(l3).alt=="non"){
                                document.getElementById(l3).src="../images/blanc.jpg";
                        }
                }
}