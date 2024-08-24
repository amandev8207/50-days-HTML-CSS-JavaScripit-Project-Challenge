const kits = ["crash","kick","snare","tom"];
const container = document.querySelector(".container");

kits.forEach((kit) => {
    const btnE1 = document.createElement("button");
    btnE1.classList.add("btn")
    btnE1.innerText = kit;
    btnE1.style.backgroundImage = "url(Assets/image/" + kit + ".png)";
    container.appendChild(btnE1);
    const audio = document.createElement("audio");
    audio.src = "Assets/sound/" + kit + ".mp3"
    container.appendChild(audio);
    btnE1.addEventListener("click",() => {
        audio.play();
    });
    window.addEventListener("keydown",(event) => {
       if(event.key === kit.slice(0,1)){
        audio.play();
        btnE1.style.transform = "scale(.9)";
        setTimeout(() => {
            btnE1.style.transform = "scale(1)";
        },100);
       };
    });
});