function showMessage(){
alert("Welcome to idThirdeye Technology Solutions");
}

let c=0,p=0,d=0;

let interval=setInterval(()=>{

if(c<150){
c++;
document.getElementById("clients").innerHTML=c+"+";
}

if(p<250){
p++;
document.getElementById("projectsCount").innerHTML=p+"+";
}

if(d<45){
d++;
document.getElementById("developers").innerHTML=d+"+";
}

if(c==150 && p==250 && d==45){
clearInterval(interval);
}

},20);