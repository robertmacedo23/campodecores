const input = document.getElementById("corInput");
const mensagemErro = document.getElementById("mensagemErro");

function corValida(cor) {
  const s = new Option().style;
  s.color = cor;
  return s.color !== '';
}

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const cor = input.value.trim();

    if (corValida(cor)) {
      document.body.style.backgroundColor = cor;
      mensagemErro.textContent = "";
    } else {
      mensagemErro.textContent = "Cor inválida! Tente algo como 'red', '#00ff00' ou 'rgb(0,0,255)'.";
    }
  }
});
