function popUp(){
    alert("Hello, world!");
}

function makeBigger(){

    document.getElementById("textEntry").style.fontSize = "24pt";
}

/*
function fancify(){
    document.getElementById("textEntry").style.textDecoration="underline";
    document.getElementById("textEntry").style.color="red";
    document.getElementById("textEntry").style.fontWeight="bold";
    document.getElementById("textEntry").style.fontStyle = "italic";
}

function borify(){

    document.getElementById("textEntry").style = "";
}*/


const fancyfy = document.getElementById("Fancy");
const boringfy = document.getElementById("Boring");
const textBoxEntry = document.getElementById("textEntry");

// Add event listeners to the radio buttons
fancyfy.addEventListener("change", function() {
    textBoxEntry.style.fontWeight = "bold";
    textBoxEntry.style.color = "blue";
    textBoxEntry.style.fontStyle = "italic";
    textBoxEntry.style.textDecoration="underline";
    alert("Text got a new style");
});

boringfy.addEventListener("change", function() {
    textBoxEntry.style.fontWeight = "";
    textBoxEntry.style.color = "";
    textBoxEntry.style.fontStyle = "";
    textBoxEntry.style.textDecoration = "";
    alert("Text is not stylish anymore");
});

function makeMoo() {

    let capitalLetter = document.getElementById("textEntry").value.toUpperCase();
    document.getElementById("textEntry").value = capitalLetter;

    let sentences = document.getElementById("textEntry").value.split(".");

    document.getElementById("textEntry").value = sentences.join("-Moo");

}