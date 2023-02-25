const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = data => {
    const display = document.getElementById('quote')
    display.innerText = data.quote
}

loadQuote()