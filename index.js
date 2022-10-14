function armstrong_check() {
    var arm = 0, a, b, c, d, n;
    n = Number(document.getElementById("input").value);
    temp = n;
    while(temp>0){
        a=temp%10;
        temp=parseInt(temp/10);
        arm += a*a*a;
    }
    
    if(arm === n){
        document.getElementById("prog").innerHTML = " It is a armstrong. ";
    }
    else{
        document.getElementById("prog").innerHTML = " It is not a armstrong. ";
    }
}