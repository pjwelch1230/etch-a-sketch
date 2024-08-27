// number of pixels to be used by board
const pixelSize = 500;

// parent container of the button and the container for the board
const bigContainer = document.querySelector("#bigContainer");
bigContainer.style.display = "flex";
bigContainer.style.flexDirection = "column";
bigContainer.style.minWidth = pixelSize+"px";

// creates header
const header = document.createElement("div");
header.style.backgroundColor = "#011257";
header.style.margin = "-8px";
header.style.borderBottom = "4px solid black";

// title text and styling
const title = document.createElement("p");
title.textContent = "Etch a Sketch"
title.style.marginTop = "2%";
title.style.color = "white";
title.style.textAlign = "center";
title.style.fontSize = "32px";
title.style.fontWeight = "600"
title.style.fontFamily = "Roboto, sans-serif, serif";
header.appendChild(title);

// subtitle text and styling
const subtitle = document.createElement("p");
subtitle.textContent = "Drag your cursor over the board to start drawing!";
subtitle.style.color = "#f0f0f2";
subtitle.style.textAlign = "center";
subtitle.style.fontSize = "18px";
subtitle.style.fontWeight = "600"
subtitle.style.marginTop = "-30px";
subtitle.style.fontFamily = "Roboto, sans-serif, serif";
header.appendChild(subtitle);

// initializes button and styling
const sizeBtn = document.createElement("button");
sizeBtn.textContent = "Click to Change Size";
sizeBtn.style.color = "#011257";
sizeBtn.style.fontSize = "14px";
sizeBtn.style.width = "12%";
sizeBtn.style.padding = "0px";
sizeBtn.style.display = "block";
sizeBtn.style.marginTop = "12px";
sizeBtn.style.marginBottom = "6px";
sizeBtn.style.alignSelf = "center";


// initializes container for the board
const lilContainer = document.createElement("div");
lilContainer.style.display = "flex";
lilContainer.style.flexDirection = "row";
lilContainer.style.justifyContent = "center";
lilContainer.style.flexWrap = "nowrap";
lilContainer.style.maxWidth = pixelSize+"px";
lilContainer.style.maxHeight = pixelSize+"px";
lilContainer.style.marginLeft = "auto";
lilContainer.style.marginRight = "auto";
lilContainer.style.marginTop = "2%";

bigContainer.appendChild(header);
bigContainer.appendChild(lilContainer);
bigContainer.appendChild(sizeBtn);

function createGrid (size = 16) {
    // variable for incrementing opacity
    let opa = 0.1;

    // calculates the size of the square using the pixel size
    // and number of squares
    let squareSize = pixelSize/size;
    for (let i = 0; i < size; i++) {
        // creates horizontal axis to append squares vertically from
        const xSquare = document.createElement("div");
        xSquare.style.display = "inline-block";
        xSquare.style.flexDirection = "column";
        
        // loop for appending squares in column format
        for (let j = 0; j < size; j++) {
            // boolean tracking if a square has been entered,
            // used for opacity
            let entered = false;

            // column squares divs
            const ySquare = document.createElement("div");

            // if/else statements for styling squares based on
            // where they are on the grid (avoiding double borders)
            // borders defined in CSS
            if (i === (size - 1) && j != (size - 1)) {
                // class for right side squares
                ySquare.classList.add("rightB");
            }  else if (i === (size - 1) && j === (size - 1)) {
                // class for square on bottom-right corner
                ySquare.classList.add("bottomR");
            }  else if (i != (size - 1) && j === (size - 1)) {
                // class for squares on bottom row
                ySquare.classList.add("bottom");
            }  else {
                // class for all other squares
                ySquare.classList.add("square");
            }
            // sets width and height for all squares
            ySquare.style.width = squareSize+"px";
            ySquare.style.height = squareSize+"px";
            ySquare.style.borderWidth = (squareSize*0.05)+"px";
            ySquare.style.boxSizing = "border-box";
            // generates random rgb values
            const r = Math.floor(Math.random() * 256);
            const g= Math.floor(Math.random() * 256);
            const b= Math.floor(Math.random() * 256);
            ySquare.addEventListener("mouseenter", () => {
                if (!entered) {
                    ySquare.style.backgroundColor = "rgb("+r+","+g+","+b+","+opa+")";
                    opa < 1 ? opa += 0.1 : opa += 0;
                    console.log(opa);
                }
                entered = true;
            });
            // ySquares append to x-axis to build vertically
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