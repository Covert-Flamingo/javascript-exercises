const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize");

/* Generate a random RGB color */
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

/* Create a grid of size × size squares */
function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      let darkness = 0; // tracks progressive darkening (0 → 10)

      square.addEventListener("mouseover", () => {
        if (darkness === 0) {
          square.style.backgroundColor = getRandomColor();
        }

        darkness++;

        square.style.filter = `brightness(${100 - darkness * 10}%)`;
      });

      row.appendChild(square);
    }

    container.appendChild(row);
  }
}

/* Resize button logic */
resizeBtn.addEventListener("click", () => {
  let size = prompt("Enter grid size (1–100):");
  size = Number(size);

  if (!size || size < 1 || size > 100) {
    alert("Invalid size. Enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

/* Default grid on page load */
createGrid(16);
