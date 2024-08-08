// number of pixels to be used by board
const pixelSize = 175;

// parent container of the button and the container for the board
const bigContainer = document.querySelector("#bigContainer");
bigContainer.style.display = "flex";
bigContainer.style.flexDirection = "column";
bigContainer.style.justifyContent = "center";
bigContainer.style.minWidth = pixelSize+"px";

// initializes button and styling
const sizeBtn = document.createElement("button");
sizeBtn.textContent = "Click to Change Size";
sizeBtn.style.fontSize = "12px";
sizeBtn.style.width = "120px";
sizeBtn.style.padding = "0px";
sizeBtn.style.display = "block";
sizeBtn.style.marginTop = "-2px";
sizeBtn.style.marginBottom = "6px";
sizeBtn.style.alignSelf = "center";
bigContainer.appendChild(sizeBtn);

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
bigContainer.appendChild(lilContainer);

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
            ySquare.style.padding = squareSize+"px";
            ySquare.style.borderWidth = (squareSize*0.1)+"px";
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