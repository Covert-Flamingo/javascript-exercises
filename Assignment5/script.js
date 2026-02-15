const container = document.querySelector("#container");
const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.classList.add("paragraph");
h3.textContent = "Hey I’m blue!";
h3.style.color = "blue";
container.appendChild(h3);

const blackdiv = document.createElement("div");
blackdiv.classList.add("blackdiv");
blackdiv.style.border = "2px solid black";
blackdiv.style.backgroundColor = "pink";
container.appendChild(blackdiv);

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "Im in a div";
blackdiv.appendChild(h1);

const p2 = document.createElement("p");
p2.classList.add("p2");
p2.textContent = "ME TOO!";
blackdiv.appendChild(p2);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "purple";
});


