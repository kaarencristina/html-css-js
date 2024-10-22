const key = "8c9dd91ba83623b69eb1cbfb40bd4baa"


async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric`).then(response=>response.json())

    DadosnaTela(dados);

}


function cliqueinoBotao(){
    const cidade=document.querySelector(".input-cidade").value;

    buscarCidade(cidade)
}
function DadosnaTela(dados) {
    document.querySelector(".city").innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)} °C`;  // Adiciona o símbolo de grau Celsius
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description;
    document.querySelector(".hum").innerHTML = `Humidity: ${dados.main.humidity}%`;  // Adiciona símbolo de porcentagem
}