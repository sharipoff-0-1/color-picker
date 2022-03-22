"strict mode";

const simple = ["red", "green", "blue", " #4545f0", "rgb(245, 132, 200)"];

const btn = document.getElementById("btn");
const colorTitle = document.getElementById("color-title");

btn.addEventListener("click", () => {
  const randomNumber = generateNumber();
  document.body.style.backgroundColor = simple[randomNumber];
  colorTitle.textContent = simple[randomNumber];
});

function generateNumber() {
  return Math.floor(Math.random() * simple.length);
}
