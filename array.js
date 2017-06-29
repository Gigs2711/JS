var myarray=[];
var i=1;
while(i<=5){
var mynumber= Number(prompt('please enter a number'));
myarray.push(mynumber);
i=i+1;
}
document.write(myarray +'<br>');
document.write(myarray[0]+myarray[1]+myarray[2]+myarray[3]+myarray[4]);


