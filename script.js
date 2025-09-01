const key = `01010101`;
let input = document.getElementById("inputText");
let container = document.getElementById("main");

async function SearchClimate() {
  container.innerHTML = ``;

  if (!input.value) {
    alert("Escreva o nome de uma cidade para efetuar a busca...");
    return;
  }

  try {
    const api = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${input.value}&aqi=no`;
    const response = await fetch(api);
    const data = await response.json();

    // Verifica se a API retornou erro
    if (data.error) {
      alert(`Cidade não encontrada: ${input.value}`);
      input.value = "";
      return;
    }

    container.innerHTML = `
      <section class="container" id="container">
        <h1>🌤️ Clima</h1>
        <div class="cidade" id="cidade">${data.location.name}</div>
        <div class="temperatura" id="temperatura">${data.current.temp_c} °C</div>
        <div class="condicao" id="condicao">${data.current.condition.text}</div>
        <img src="${data.current.condition.icon}" alt="Ícone do clima" class="icone" id="icone" />
        <footer>Powered by WeatherAPI</footer>
      </section>
    `;

    input.value = "";
  } catch (error) {
    alert("Ocorreu um erro na requisição. Tente novamente.");
    console.log("ERRO: " + error);
  }
}
