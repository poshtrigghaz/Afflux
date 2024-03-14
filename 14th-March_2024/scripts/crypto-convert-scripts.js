// parameters used to get prices:
//      ids=name_of_the_coin
//      vs_currencies=name_of_the_base_currency
//      precision=number_of_decimal_places

const apiAddress = "https://api.coingecko.com/api/v3/simple/price?";
let crypto;
let fiat;
let rate;
let conversionType = true;

document.addEventListener("DOMContentLoaded", function() {

    const cryptoInput = document.getElementById("crypto-input");
    const fiatInput = document.getElementById("fiat-input");

    const cryptoList = document.getElementById("crypto-list");
    const fiatList = document.getElementById("fiat-list");


    document.getElementById("swap").onclick = function() {
        const conversionInfo = document.getElementById("swap");
        const convertFromElement = document.getElementById("convert-from");
        const convertToElement = document.getElementById("convert-to");

        if (conversionType) {
            // convert from fiat to crypto
            conversionType = !conversionType;
            conversionInfo.innerHTML = "Fiat to Crypto";
            convertFromElement.appendChild(fiatInput);
            convertToElement.appendChild(cryptoInput);

        } else {
            // convert from crypto to fiat
            conversionType = !conversionType;
            conversionInfo.innerHTML = "Crypto to Fiat";
            convertFromElement.appendChild(cryptoInput);
            convertToElement.appendChild(fiatInput);
        }
    }

    document.getElementById("convert").onclick = async function() {
        crypto = cryptoInput.value;
        fiat = fiatInput.value;

        console.log(`crypto = ${crypto} | fiat = ${fiat}`);
        
        // compare crypto and fiat with ever option on crypto-list and fiat-list to find selected
        let selectedCrypto;
        let selectedFiat;

        Array.from(cryptoList.options).forEach(o => {
            if (o.dataset.ticker === crypto) {
                selectedCrypto = o;
            }
        })

        Array.from(fiatList.options).forEach(o => {
            if (o.dataset.ticker === fiat) {
                selectedFiat = o;
            }
        })

        // get ids
        const cryptoId =  selectedCrypto.dataset.id;
        const fiatId = selectedFiat.dataset.id;

        // get tickers
        const cryptoTicker = selectedCrypto.dataset.ticker;
        const fiatTicker = selectedFiat.dataset.ticker;
        
           

        const response = await fetch(`${apiAddress}ids=${cryptoId}&vs_currencies=${fiatId}&precision=3`);
        const data = await response.json();    
        rate = data[cryptoId][fiatId];
    
        const amount = document.getElementById("amount").value;
        let conversion;

        if (conversionType) {
            conversion = amount * rate;
            document.querySelector("#display h3").innerHTML = `${conversion.toLocaleString(undefined)} ${fiatTicker}`;
            document.querySelector("#display h5").innerHTML = `1 ${cryptoTicker} = ${rate.toLocaleString(undefined)} ${fiatTicker}`;
            document.querySelector("h4").hidden = true;

        } else {
            conversion = amount * (1 / rate);
            document.querySelector("#display h3").innerHTML = `${conversion.toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 5})} ${cryptoTicker}`;
            document.querySelector("#display h5").innerHTML = `1 ${fiatTicker} = ${(1 / rate).toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 5})} ${cryptoTicker}`;

            document.querySelector("h4").hidden = true;
        }
    }
});