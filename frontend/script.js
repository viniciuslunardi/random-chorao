window.onload = async () => {
  await generateNewQuote();
};

const generateNewQuote = async () => {
  const data = await (await fetch(`${window.location}api/quote`)).json();

  document.getElementById("quote").innerHTML = data
    ? data.choris
    : "porra champs... deu pau!";
};
