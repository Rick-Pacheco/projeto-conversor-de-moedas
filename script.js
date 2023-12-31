const btnConvertCurrency = document.querySelector(".convert-button")
const selectCurrencySelect1 = document.querySelector(".currency-select1")
const selectCurrencySelect2 = document.querySelector(".currency-select2")

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const pCurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const pCurrencyValue = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.5

    //        (REFERÊNCIA ---  MOEDA REAL PARA TODOS!)

    //            Formatação de "Real", para "..."
    if (selectCurrencySelect1.value == "real" && selectCurrencySelect2.value == "real") {

        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if (selectCurrencySelect1.value == "real" && selectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (selectCurrencySelect1.value == "real" && selectCurrencySelect2.value == "euro") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectCurrencySelect1.value == "real" && selectCurrencySelect2.value == "libra") {
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
    if (selectCurrencySelect1.value == "dolar" && selectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (selectCurrencySelect1.value == "dolar" && selectCurrencySelect2.value == "real") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (selectCurrencySelect1.value == "dolar" && selectCurrencySelect2.value == "euro") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) 
    
        pCurrencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (dolarToday / euroToday))
    }

    if (selectCurrencySelect1.value == "dolar" && selectCurrencySelect2.value == "libra") {
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
    if (selectCurrencySelect1.value == "euro" && selectCurrencySelect2.value == "euro") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (selectCurrencySelect1.value == "euro" && selectCurrencySelect2.value == "real") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (selectCurrencySelect1.value == "euro" && selectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (euroToday / dolarToday))
    }

    if (selectCurrencySelect1.value == "euro" && selectCurrencySelect2.value == "libra") {
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
    if (selectCurrencySelect1.value == "libra" && selectCurrencySelect2.value == "libra") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (selectCurrencySelect1.value == "libra" && selectCurrencySelect2.value == "real") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue) 

        pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (selectCurrencySelect1.value == "libra" && selectCurrencySelect2.value == "dolar") {
        pCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue) 

        pCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (libraToday / dolarToday))
    }

    if (selectCurrencySelect1.value == "libra" && selectCurrencySelect2.value == "euro") {
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


//                     TROCA DO SELECT

function changeCurrency() {

    const pCurrencyName1 = document.getElementById("currency-name1")
    const imageCurrencyImg1 = document.querySelector(".currency-img1")
    const pCurrencyName2 = document.getElementById("currency-name2")
    const imageCurrencyImg2 = document.querySelector(".currency-img2")

       //                 Primeiro Select

    if (selectCurrencySelect1.value == "dolar") {
        pCurrencyName1.innerHTML = "Dólar Americano"
        imageCurrencyImg1.src = "./assets/dollar.png"
    }

    if (selectCurrencySelect1.value == "euro") {
        pCurrencyName1.innerHTML = "Euro"
        imageCurrencyImg1.src = "./assets/euro.png"
    }

    if (selectCurrencySelect1.value == "libra") {
        pCurrencyName1.innerHTML = "Libra Britânica"
        imageCurrencyImg1.src = "./assets/libra.png"
    }

    if (selectCurrencySelect1.value == "real") {
        pCurrencyName1.innerHTML = "Real Brasileiro"
        imageCurrencyImg1.src = "./assets/real.png"
    }

       //                 Segundo Select

    if (selectCurrencySelect2.value == "dolar") {
        pCurrencyName2.innerHTML = "Dólar Americano"
        imageCurrencyImg2.src = "./assets/dollar.png"
    }

    if (selectCurrencySelect2.value == "euro") {
        pCurrencyName2.innerHTML = "Euro"
        imageCurrencyImg2.src = "./assets/euro.png"
    }

    if (selectCurrencySelect2.value == "libra") {
        pCurrencyName2.innerHTML = "Libra Britânica"
        imageCurrencyImg2.src = "./assets/libra.png"
    }

    if (selectCurrencySelect2.value == "real") {
        pCurrencyName2.innerHTML = "Real Brasileiro"
        imageCurrencyImg2.src = "./assets/real.png"
    }
    convertCurrency()
   
}

btnConvertCurrency.addEventListener("click", convertCurrency)
selectCurrencySelect1.addEventListener("change", changeCurrency)
selectCurrencySelect2.addEventListener("change", changeCurrency)