document.addEventListener("DOMContentLoaded", function(event) {
    const texts = [                                                     //create an array with each text element with id
        document.getElementById("text1"),
        document.getElementById("text2"),
        document.getElementById("text3"),
        document.getElementById("text4")
    ];
    const buttonsPlus = [
        document.getElementById("buttonPlus1"),
        document.getElementById("buttonPlus2"),
        document.getElementById("buttonPlus3"),
        document.getElementById("buttonPlus4")
    ];
    const buttonsMoins = [
        document.getElementById("buttonMoins1"),
        document.getElementById("buttonMoins2"),
        document.getElementById("buttonMoins3"),
        document.getElementById("buttonMoins4")
    ];
    function handlePlusButtonClick(buttonIndex) {                    //button index = parameter of function handlePlusButtonClick
        texts.forEach((text, index) => {      //enter a loop where you go through each id "text[index]"
            if (index === buttonIndex) {                                  //compare the index with indexbutton
                text.style.display = "block";
                buttonsPlus[index].style.display = "none";
                buttonsMoins[index].style.display = "block";
            } else {                                                      //if not the same index--> close the text
                text.style.display = "none";
                buttonsPlus[index].style.display = "block";
                buttonsMoins[index].style.display = "none";
            }
        });
    }
    function handleMoinsButtonClick(buttonIndex) {                 //buttonindex work as the index for the array
        texts[buttonIndex].style.display = "none";
        buttonsPlus[buttonIndex].style.display = "block";
        buttonsMoins[buttonIndex].style.display = "none";
    }
    buttonsPlus.forEach((button, index) => {                   //go through the array once to add the eventlistener
        button.addEventListener("click", () => handlePlusButtonClick(index));       //add event when click the button
    });
    buttonsMoins.forEach((button, index) => {
        button.addEventListener("click", () => handleMoinsButtonClick(index));
    });
});
