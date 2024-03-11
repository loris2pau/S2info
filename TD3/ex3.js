let j=0;

function clik(i) {
    j=(j+1)%1;
    if(j==0){
        i.src=shrek.png;
    }
    else{
        i.src=spodermen.png;
    }
}