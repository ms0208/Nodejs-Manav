console.log("Welcome to Node JS");
var a = 20 ;
var b = 30;
var c = 40;
console.warn(a+b+c);
let x = 20;
if(x>18)
{
    console.log("ELIGINLE FOR VOTE")
}
else{
    console.log("not Eligible");
}
let y = "20";
if(y===20)
{
    console.log("Matched");
}
else
{
    console.log("No");
}
if(y==20)
{
    console.log("Matched");
}
else
{
    console.log("No");
}
var i;
for(i=0;i<10;i++)
{
    console.log(i);
}
let arr=[2,3,4,5,6,78];
console.log(arr);
console.log(arr[3]);
arr.filter((item)=>{
      console.log(item)   
})
let result = arr.filter((item)=>{
        return item===78,item>4;
})
console.log(result);
