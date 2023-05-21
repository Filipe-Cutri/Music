let idx = 0;

function carrossel() {
  const img = document.querySelectorAll("#img img");
  const imgs = document.getElementById("img");

  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 600}px)`;
}

/*Busca data atual*/

function getCurrentDate() {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("pt-BR", options);
}

window.onload = function () {
  const footerDate = document.getElementById("footer-date");
  footerDate.textContent = getCurrentDate();

  setInterval(carrossel, 1800);
};
