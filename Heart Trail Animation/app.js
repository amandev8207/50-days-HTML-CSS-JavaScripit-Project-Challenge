const body = document.querySelector("body");
body.addEventListener("mousemove",(event) => {
    const posX = event.offsetX;
    const posY = event.offsetY;
    const spanE1 = document.createElement("span");
    spanE1.style.left = posX + "px";
    spanE1.style.top = posY + "px";
    const size = Math.random() * 100;
    spanE1.style.width = size + "px"
    spanE1.style.height = size + "px"
    body.appendChild(spanE1);
    setTimeout(()=> {
        spanE1.remove();
    },3000);
})