const bigContainer = document.querySelector("#bigContainer");
bigContainer.style.display="flex";
bigContainer.style.flexDirection="column";
bigContainer.style.justifyContent="center";
bigContainer.style.minWidth="960px"
bigContainer.style.marginRight="auto";
bigContainer.style.marginLeft="auto";

const sizeBtn = document.createElement("button");
sizeBtn.textContent = "Click to Change Size";
sizeBtn.style.fontSize = "2.5px";
sizeBtn.style.width = "48px";
sizeBtn.style.padding = "0px";
sizeBtn.style.display = "block";
sizeBtn.style.marginTop = "-6px";
sizeBtn.style.marginBottom = "2px";
sizeBtn.style.alignSelf = "center";
bigContainer.appendChild(sizeBtn);

const lilContainer = document.createElement("div");
lilContainer.style.display="flex";
lilContainer.style.flexDirection="row";
lilContainer.style.justifyContent="center";
lilContainer.style.flexWrap="nowrap";
bigContainer.appendChild(lilContainer);

function createGrid (size = 16) {
    let opa = 0.1;
    let squareSize = 960/size;
    for (let i = 0; i < size; i++) {
        const xSquare = document.createElement("div");
        xSquare.style.display="inline-block";
        xSquare.style.flexDirection="column";
        xSquare.style.flexWrap="nowrap";
        for (let j = 0; j < size; j++) {
            let entered = false;
            const ySquare = document.createElement("div");
            
            if (i === (size - 1) && j != (size - 1)) {
                ySquare.classList.add("rightB");
            }  else if (i === (size - 1) && j === (size - 1)) {
                ySquare.classList.add("bottomR");
            }  else if (i != (size - 1) && j === (size - 1)) {
                ySquare.classList.add("bottom");
            }  else {
                ySquare.classList.add("square");
            }
            ySquare.style.width = squareSize+"px";
            ySquare.style.height = squareSize+"px";
            ySquare.style.padding = squareSize+"px";
            ySquare.style.borderWidth = squareSize*0.1;
            const r = Math.floor(Math.random() * 256);
            const g= Math.floor(Math.random() * 256);
            const b= Math.floor(Math.random() * 256);
            ySquare.style.flexWrap="nowrap";
            ySquare.addEventListener("mouseenter", () => {
                if (!entered) {
                    ySquare.style.backgroundColor = "rgb("+r+","+g+","+b+","+opa+")";
                    opa < 1 ? opa += 0.1 : opa += 0;
                    console.log(opa);
                }
                entered = true;
            });
            xSquare.appendChild(ySquare);
        }
        lilContainer.appendChild(xSquare);
    }
}

sizeBtn.addEventListener("click", () => {
        //gather input from prompt window
        let input = window.prompt("Please enter a size up to 100");
        if (Number.isInteger(Number(input)) && Number(input) > 0 && Number(input) <= 100) {
            lilContainer.replaceChildren();
            createGrid(Number(input));
        }
});

createGrid();