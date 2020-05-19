function printSymbol(e) {
    let listdigit = [0,1,2,3,4,5,6,7,8,9];
    let result = document.getElementById("result");
    let obj = e.target;
    if (obj.textContent in listdigit & result.value === "0") {
        result.value = obj.textContent;
    }
    else {
        result.value = result.value + obj.textContent;
    }
    
 } 


let result = document.getElementById("result");
let clear = document.getElementById("clear");
let del = document.getElementById("del")
let equal = document.getElementById("equal");
let symbols = document.getElementsByClassName("symbol")

for (let i = 0; i < symbols.length; i++) {
         symbols[i].addEventListener("click", printSymbol);
}

clear.addEventListener("click", () => result.value = 0);

equal.addEventListener("click", () => result.value = eval(result.value));

del.addEventListener("click", () => result.value = result.value.slice(0, -1));

let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let num = document.getElementsByClassName("num");




function bluecolor () {
    //let col = e.color;
    for (let i = 0; i < num.length; i++) {
      
        num[i].style.cssText = "background-color:blue;";
}
}

function greencolor () {
    //let col = e.color;
    for (let i = 0; i < num.length; i++) {
      
        num[i].style.cssText = "background-color:green;";
}
}

function orangecolor () {
    //let col = e.color;
    for (let i = 0; i < num.length; i++) {
      
        num[i].style.cssText = "background-color:orange;";
}
}

blue.addEventListener("click", bluecolor);
orange.addEventListener("click", orangecolor);
green.addEventListener("click", greencolor);
