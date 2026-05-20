async function convertCurrency(){

  const amount =
  document.getElementById("amount").value;

  const from =
  document.getElementById("fromCurrency").value;

  const to =
  document.getElementById("toCurrency").value;

  const result =
  document.getElementById("result");

  if(amount === ""){

    result.innerHTML =
    "⚠️ Miqdor kiriting";

    return;
  }

  result.innerHTML =
  "⏳ Yuklanmoqda...";

  try{

    const response =
    await fetch(
    `https://api.exchangerate-api.com/v4/latest/${from}`
    );

    const data =
    await response.json();

    const rate =
    data.rates[to];

    const converted =
    (amount * rate).toFixed(2);

    result.innerHTML = `
      ${amount} ${from}
      <br>
      =
      <br>
      ${converted} ${to}
    `;

  }catch(error){

    result.innerHTML =
    "❌ API xatosi yoki internet yo'q";

  }
}