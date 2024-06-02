let button=document.getElementById("button");
let modal=document.getElementById("modal");



let newDiv=document.createElement("div")
let div=document.body.append(newDiv)
button.addEventListener("click",function(){
    newDiv.style.width="100px";
    newDiv.style.height="100px";
    newDiv.style.opacity="0.6";
    newDiv.style.backgroundColor="black"
}
)

let input=document.getElementById("input");


let inputButton=document.getElementById("input-button");
let body=document.querySelector("body")
inputButton.addEventListener("click",function(){
    if(input.value == "red"){
        body.style.backgroundColor="red"
    }else if(input.value == "blue"){
        body.style.backgroundColor="blue"
    }else if(input.value=="green"){
        body.style.backgroundColor="green"
    }else if(input.value=="black"){
        body.style.backgroundColor="black"
    }else if(input.value=="white"){
        body.style.backgroundColor="white"
    }else{
        alert("Error")
    }
})

let result=document.getElementById("result")
let counterButton=document.getElementById("counter");

counterButton.addEventListener("click",function(){
    let numbers=document.getElementById("numbers").value;
    let numArray=numbers.split(":");
    console.log(numArray)

    let newArray=[]
    let sum=0;
    let average;
    for(let i=0;i<numArray.length;i++){
        newArray.push(parseInt(numArray[i]))
        sum+=newArray[i];
        average=Math.floor(sum/newArray.length);
        
    }
    console.log(average);
    result.innerHTML=`Average number: ${average}`;
})