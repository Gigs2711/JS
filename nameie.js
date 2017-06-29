var yourname= prompt('Please enter your name');
var i=0;
var counter=0;
while(i<yourname.length){
if(yourname[i]==='a'|| yourname[i]==='A'){
counter=counter+1;
}
i=i+1;
}
document.write("the number of a's in your name are"+' '+counter);

