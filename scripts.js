const button = document.getElementById ('convert_button')
const select = document.getElementById("currency_select");

const dolar = 5.45
const euro = 6.57
const bitCoin = 298.340000

const convert_values = () => {
    const inputReais = document.getElementById("input_real").value;
    const realValueText = document.getElementById("real_value_text");
    const currencyValueText = document.getElementById("currency_value_text");

    realValueText.innerHTML =new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputReais);

    if (select.value === "US$ Dólar Americano"){
      currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputReais / dolar);
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
}

    if (select.value === "₿ Bitcoin") {
      currencyValueText.innerHTML = inputReais / bitCoin;
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency_name");
    const currencyImg = document.getElementById("currency_img")

    if (select.value === "US$ Dólar Americano") {
      currencyName.innerHTML = "Dólar Americano";
      currencyImg.src = "./assets/estados-unidos (1) 1.svg";
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/eur.svg";
    }

    if (select.value === "₿ Bitcoin") {
      currencyName.innerHTML = "Bitcoin";
      currencyImg.src = "./assets/bitcoin.svg";
    }
    convert_values()
}
button.addEventListener('click', convert_values)
select.addEventListener('change', changeCurrency);