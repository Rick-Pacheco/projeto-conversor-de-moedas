const btnConvertCurrency = document.querySelector(".convert-button")
const SelectCurrencySelect1 = document.querySelector(".currency-select1")
const SelectCurrencySelect2 = document.querySelector(".currency-select2")

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const pCurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const pCurrencyValue = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.5

    //        (REFERÊNCIA ---  MOEDA REAL PARA TODOS!)

    //            Formatação de "Real", para "..."
    if (SelectCurrencySelect1.value == "real" && SelectCurrencySelect2.value == "real") {

        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if (SelectCurrencySelect1.value == "real" && SelectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (SelectCurrencySelect1.value == "real" && SelectCurrencySelect2.value == "euro") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (SelectCurrencySelect1.value == "real" && SelectCurrencySelect2.value == "libra") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    //            Formatação de "Dolar", para "..."
    if (SelectCurrencySelect1.value == "dolar" && SelectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (SelectCurrencySelect1.value == "dolar" && SelectCurrencySelect2.value == "real") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (SelectCurrencySelect1.value == "dolar" && SelectCurrencySelect2.value == "euro") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) 
    
        pCurrencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (dolarToday / euroToday))
    }

    if (SelectCurrencySelect1.value == "dolar" && SelectCurrencySelect2.value == "libra") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) 
    
        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (dolarToday / libraToday))
    }
    

    //            Formatação de "Euro", para "..."
    if (SelectCurrencySelect1.value == "euro" && SelectCurrencySelect2.value == "euro") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (SelectCurrencySelect1.value == "euro" && SelectCurrencySelect2.value == "real") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (SelectCurrencySelect1.value == "euro" && SelectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (euroToday / dolarToday))
    }

    if (SelectCurrencySelect1.value == "euro" && SelectCurrencySelect2.value == "libra") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (euroToday / libraToday))
    }

    //            Formatação de "Libra", para "..."
    if (SelectCurrencySelect1.value == "libra" && SelectCurrencySelect2.value == "libra") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (SelectCurrencySelect1.value == "libra" && SelectCurrencySelect2.value == "real") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue) 

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (SelectCurrencySelect1.value == "libra" && SelectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue) 

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (libraToday / dolarToday))
    }

    if (SelectCurrencySelect1.value == "libra" && SelectCurrencySelect2.value == "euro") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue) 
    
        pCurrencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (libraToday / euroToday))
    }


}


//           TROCA DO PRIMEIRO SELECT

function changeCurrency1() {
    const pCurrencyName1 = document.getElementById("currency-name1")
    const imageCurrencyImg1 = document.querySelector(".currency-img1")

    if (SelectCurrencySelect1.value == "dolar") {
        pCurrencyName1.innerHTML = "Dólar Americano"
        imageCurrencyImg1.src = "./assets/dollar.png"
    }
    if (SelectCurrencySelect1.value == "euro") {
        pCurrencyName1.innerHTML = "Euro"
        imageCurrencyImg1.src = "./assets/euro.png"
    }
    if (SelectCurrencySelect1.value == "libra") {
        pCurrencyName1.innerHTML = "Libra Britânica"
        imageCurrencyImg1.src = "./assets/libra.png"
    }
    if (SelectCurrencySelect1.value == "real") {
        pCurrencyName1.innerHTML = "Real Brasileiro"
        imageCurrencyImg1.src = "./assets/real.png"
    }
    convertCurrency()
   
}

//           TROCA DO SEGUNDO SELECT

function changeCurrency2() {
    const pCurrencyName2 = document.getElementById("currency-name2")
    const imageCurrencyImg2 = document.querySelector(".currency-img2")

    if (SelectCurrencySelect2.value == "dolar") {
        pCurrencyName2.innerHTML = "Dólar Americano"
        imageCurrencyImg2.src = "./assets/dollar.png"
    }
    if (SelectCurrencySelect2.value == "euro") {
        pCurrencyName2.innerHTML = "Euro"
        imageCurrencyImg2.src = "./assets/euro.png"
    }
    if (SelectCurrencySelect2.value == "libra") {
        pCurrencyName2.innerHTML = "Libra Britânica"
        imageCurrencyImg2.src = "./assets/libra.png"
    }
    if (SelectCurrencySelect2.value == "real") {
        pCurrencyName2.innerHTML = "Real Brasileiro"
        imageCurrencyImg2.src = "./assets/real.png"
    }
    convertCurrency()
    
}

btnConvertCurrency.addEventListener("click", convertCurrency)
SelectCurrencySelect1.addEventListener("change", changeCurrency1)
SelectCurrencySelect2.addEventListener("change", changeCurrency2)