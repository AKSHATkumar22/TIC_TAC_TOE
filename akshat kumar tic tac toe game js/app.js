let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");

let turnO = true; //PLAYER 0, PLAYER X

const winPatterns = [
  [1, 2, 3],
  [1, 3, 4],
  [2, 4, 6],
  [2, 3, 5],
  [3, 5, 6],
  [3, 4, 5],
  [4, 5, 6],
  [4, 6, 5],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("This box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
      }
    }
  }
};
