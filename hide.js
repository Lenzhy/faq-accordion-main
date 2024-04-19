document.addEventListener("DOMContentLoaded", function(event) { 
    
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const buttonPlus1 = document.getElementById("buttonPlus1");
const buttonPlus2 = document.getElementById("buttonPlus2");
const buttonPlus3 = document.getElementById("buttonPlus3");
const buttonPlus4 = document.getElementById("buttonPlus4");

buttonPlus1.addEventListener("click", function(){
    text1.style.display= "block";
    buttonPlus1.style.display = "none";
    buttonMoins1.style.display ="block";
})
buttonPlus2.addEventListener("click", function(){
    text2.style.display= "block";
    buttonPlus2.style.display = "none";
    buttonMoins2.style.display ="block";
})
buttonPlus3.addEventListener("click", function(){
    text3.style.display= "block";
    buttonPlus3.style.display = "none";
    buttonMoins3.style.display ="block";
})
buttonPlus4.addEventListener("click", function(){
    text4.style.display= "block";
    buttonPlus4.style.display = "none";
    buttonMoins4.style.display ="block";
})

buttonMoins1.addEventListener("click", function(){
    text1.style.display= "none";
    buttonPlus1.style.display = "block";
    buttonMoins1.style.display ="none";
})
buttonMoins2.addEventListener("click", function(){
    text2.style.display= "none";
    buttonPlus2.style.display = "block";
    buttonMoins2.style.display ="none";
})
buttonMoins3.addEventListener("click", function(){
    text3.style.display= "none";
    buttonPlus3.style.display = "block";
    buttonMoins3.style.display ="none";
})
buttonMoins4.addEventListener("click", function(){
    text4.style.display= "none";
    buttonPlus4.style.display = "block";
    buttonMoins4.style.display ="none";
})




})
