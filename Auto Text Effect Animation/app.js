const containerE1 = document.querySelector(".container");
const careers = ["Student","Web Developer","Freenlancer","coder"];

let careerIndex = 0;

let characterIndex = 0;

UpdateText();

function UpdateText(){
    characterIndex++;
    containerE1.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1)=== "I" ? "an" : "a "}${careers[careerIndex].slice(0,characterIndex)}</h1>`;


if(characterIndex === careers[careerIndex].length){
    careerIndex++;
    characterIndex = 0;
}

if(careerIndex === careers.length){
    careerIndex = 0;
}
setTimeout(UpdateText,300);
}