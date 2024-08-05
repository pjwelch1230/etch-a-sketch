const container = document.querySelector("#container");

container.style.display="flexbox";
container.style.flexDirection="row";
container.style.width="fit-content";
container.style.marginRight="auto";
container.style.marginLeft="auto";
container.style.flexWrap="nowrap";

let opa = 0.01;

for (let i = 0; i < 16; i++) {
    const xSquare = document.createElement("div");
    xSquare.style.display="inline-block";
    xSquare.style.flexDirection="column";
    xSquare.style.flexWrap="nowrap";
    for (let j = 0; j < 16; j++) {
        let entered = false;
        const ySquare = document.createElement("div");
        if (i === 15 && j != 15) {
            ySquare.classList.add("rightB");
        }  else if (i === 15 & j === 15) {
            ySquare.classList.add("bottomR");
        }  else if (i != 15 & j === 15) {
            ySquare.classList.add("bottom");
        }  else {
            ySquare.classList.add("square");
        }
        const r = Math.floor(Math.random() * 256);
        const g= Math.floor(Math.random() * 256);
        const b= Math.floor(Math.random() * 256);
        ySquare.style.flexWrap="nowrap";
        ySquare.addEventListener("mouseenter", () => {
            if (!entered) {
                ySquare.style.backgroundColor = "rgb("+r+","+g+","+b+","+opa+")";
                opa < 0.99 ? opa += 0.1 : opa = 1;
                console.log(opa);
            }
            entered = true;
        });
        xSquare.appendChild(ySquare);
    }
    container.appendChild(xSquare);
}