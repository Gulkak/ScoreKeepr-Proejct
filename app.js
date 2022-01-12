console.log("readyToKeepScore");
const pAbutton = document.querySelector("#pAbtn");
const pBbutton = document.querySelector("#pBbtn");
const resetButton = document.querySelector("#resetBtn");
const pAscoreContainer = document.querySelector("#pAscoreContainer");
const winScore = document.querySelector("#winScore");
console.log(pAscoreContainer);
let pAscore = 0;
let pBscore = 0;
let winningScore = 3;
let isGameOver = false;
winScore.addEventListener("change", function () {
  // console.log(this.value);
  winningScore = parseInt(this.value);
  reset();
});
pAbutton.addEventListener("click", function () {
  //   pAscore += 1;
  //   console.log("pAbutton clicked");
  //   console.log(pAscore);
  //   pAscoreContainer.append(pAscore);
  //   pAscoreContainer.textContent = pAscore;
  //   pAscoreContainer.append(pAscoreContainer.textContent);
  if (!isGameOver) {
    pAscore++;
    if (pAscore === winningScore) {
      isGameOver = true;
      pAbutton.classList.add("is-primary");
      pBbutton.classList.add("is-danger");
      console.log("A wins");
      console.log(pAscore);

      pAscoreContainer.classList.add("is-primary");
      pAscoreContainer.classList.add("tag");
      pAscoreContainer.classList.add("is-large");

      pBscoreContainer.classList.add("is-danger");
      pBscoreContainer.classList.add("tag");
      pBscoreContainer.classList.add("is-large");
    }
    pAscoreContainer.textContent = pAscore;
    // console.log(pAscore);
  }
});
pBbutton.addEventListener("click", function () {
  //   console.log("pAbutton clicked");
  //   //   pAscoreContainer.append(pAscore);
  //   if (pBscore !== winningScore) {
  //     ++pBscore;
  //     pBscoreContainer.textContent = pBscore;
  //     console.log(pBscore);
  //   } else if (pAscore === winningScore) {
  //     console.log("A wins");
  //     console.log(pAscore);
  //   } else {
  //     console.log;
  //   }
  //   pAscoreContainer.append(pAscoreContainer.textContent);
  if (!isGameOver) {
    ++pBscore;
    if (pBscore === winningScore) {
      isGameOver = true;
      pBscoreContainer.classList.add("is-primary");
      pBscoreContainer.classList.add("tag");
      pBscoreContainer.classList.add("is-large");

      pAscoreContainer.classList.add("is-danger");
      pAscoreContainer.classList.add("tag");
      pAscoreContainer.classList.add("is-large");

      pBbutton.classList.add("is-primary");
      pAbutton.classList.add("is-danger");
      console.log("B wins");
      console.log(pBscore);
    }
    pBscoreContainer.textContent = pBscore;
    // console.log(pAscore);
  }
});
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  //if pAscore!==0 then for the next game pAscore will start from previous winning score
  pAscore = 0;
  pAscoreContainer.textContent = 0;

  //   pAscoreContainer.classList.remove("winner", "loser");
  //   //   pAscoreContainer.classList.remove("loser");
  //   pBscoreContainer.classList.remove("winner", "loser");
  pBbutton.classList.remove("is-primary", "is-danger");
  pAbutton.classList.remove("is-primary", "is-danger");
  //   pBscoreContainer.classList.remove("loser");
  //if pBscore!==0 then for the next game pAscore will start from previous winning score
  pAscoreContainer.classList.remove(
    "is-danger",
    "is-primary",
    "tag",
    "is-large"
  );

  pBscoreContainer.classList.remove(
    "is-danger",
    "is-primary",
    "tag",
    "is-large"
  );

  pBscore = 0;
  pBscoreContainer.textContent = 0;
}
