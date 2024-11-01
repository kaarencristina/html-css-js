const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.2;
const euro = 6.7;

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValue = document.getElementById("real-value");
  const currencyValue = document.getElementById("currency-value");

  realValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar americano") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyIMG = document.getElementById("currency-img");

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyIMG.src = "assets/dolar.png";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyIMG.src = "assets/euro.jpg";
  }
  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
