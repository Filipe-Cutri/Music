let idx = 0;

function carrossel() {
  //Seleciona todos todas as tags imagem dentro da div img
  const img = document.querySelectorAll("#img img");
  const imgs = document.getElementById("img");

  //Incrementa o índice da imagem que será exibida
  idx++;

  //Zera o contador quando chegar no último elemento
  if (idx > img.length - 1) {
    idx = 0;
  }

  //Aplica a mudança na imagem de acordo com o seu indice e o tamanho
  imgs.style.transform = `translateX(${-idx * 600}px)`;
}

function getCurrentDate() {
  //Cria uma variável do tipo data
  const date = new Date();
  //Cria a variável options com o formato da data
  const options = { year: "numeric", month: "long", day: "numeric" };
  //Retorna a data com o formato e a localização passados
  return date.toLocaleDateString("pt-BR", options);
}

window.onload = function () {
  //Faz referencia ao span da data e atualiza sempre no onload (Quando a tela é carregada)
  const footerDate = document.getElementById("footer-date");
  footerDate.textContent = getCurrentDate();

  //Inicia as chamadas do carrossel
  setInterval(carrossel, 1800);
};
