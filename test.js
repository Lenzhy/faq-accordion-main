document.addEventListener("DOMContentLoaded", function(event) {
    function buttonClick(e){
        let tgt = e.target.closest(".plusButton,.minusButton");
        if (!tgt)return;
        let targetDiv = tgt.parentElement.parentElement;
        if (!targetDiv)return;
        let textElement = targetDiv.querySelector(".text");
        if (!textElement)return;

        let height = textElement.scrollHeight;
        let currentQA = this.id;
        let index = (currentQA.split("QA")[1]);
        console.log(index)
        document.querySelectorAll(".text").forEach(function(othertext){
            if (othertext !== textElement) {
                othertext.style.height = "0px";
                othertext.parentElement.querySelector(".plusButton").style.display = "block";
                othertext.parentElement.querySelector(".minusButton").style.display = "none";
            }
        });
        if (tgt.classList.contains("plusButton")) {
            textElement.style.height = height + "px";
            tgt.style.display = "none";
            targetDiv.querySelector(".minusButton").style.display = "block";
        }
        else {
            textElement.style.height = "0px";
            tgt.style.display ="none";
            targetDiv.querySelector(".plusButton").style.display = "block"
        }
    }

    document.querySelectorAll(".QA").forEach(function(qaElement) {
        qaElement.addEventListener("click", buttonClick);
    });

});
