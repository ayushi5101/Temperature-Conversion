
const textBox = document.getElementById("textBox");
const toFa = document.getElementById("toFa");
const toCe = document.getElementById("toCe");
const result = document.getElementById("result");

let temp;


function convert(){
    if(toFa.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " F";
    }
    else if(toCe.checked){
        temp = Number(textBox.value);
        temp = (temp -32) *(5/9);
        result.textContent = temp.toFixed(1) + " C";
    }
    else{
        result.textContent= "PLEASE! SELECT A UNIT";
    }
}