async function convertCurrency() {
    const amount = document.getElementById('amount').value;

    const fromCurrency = document.getElementById('fromCurrency').value;

    const toCurrency = document.getElementById('toCurrency').value;

    const resultElement = document.getElementById('result');

    if (amount === "" || amount <= 0) {

        resultElement.innerText = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];
        
        const convertedAmount = (amount * rate).toFixed(2);

        resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultElement.innerText = "Error fetching exchange rates. Please try again later.";
    }
}


