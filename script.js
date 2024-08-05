const container = document.querySelector("#container");

container.style.display="flexbox";
container.style.flexDirection="row";
for (let i = 0; i < 16; i++) {
    const xSquare = document.createElement("div");
    // if (i == 15) {
    //     xSquare.classList.add("rightB");
    // }  else {
    //     xSquare.classList.add("square");
    // }
    xSquare.style.display="inline-block";
    xSquare.style.flexDirection="column";
    for (let j = 0; j < 16; j++) {
        const ySquare = document.createElement("div");
        i === 15 ?
            ySquare.classList.add("rightB") : ySquare.classList.add("square");        
        // if (j === 15) {
        //     ySquare.classList.add("bottomB");
        // }
        xSquare.appendChild(ySquare);
    }
    container.appendChild(xSquare);
}