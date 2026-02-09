// Corazones flotantes
for (let i = 0; i < 30; i++) {
  let heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
}

// Botón "No" que se escapa
const noButton = document.querySelector(".no");
const options = document.querySelector(".options");

noButton.addEventListener("mouseenter", () => {
  const x = Math.random() * (options.offsetWidth - noButton.offsetWidth);
  const y = Math.random() * (options.offsetHeight - noButton.offsetHeight);
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});

// Botón "Sí" con mensaje especial
const yesButton = document.querySelector(".yes");
yesButton.addEventListener("click", () => {
  alert("¡Sabía que dirías que sí 💖!");
});
