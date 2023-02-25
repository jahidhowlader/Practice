const loadAdvice = _ => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    const display = document.getElementById('display')
    display.innerHTML = `
    <h5 class="card-title pb-5">Advice #${data.slip.id}</h5>
    <h3 class="card-text pb-5">${data.slip.advice}</h3>
    <hr>
    <button onclick="loadAdvice()" class="bg-dark text-light rounded">Refresh</button>
    `

    const input = document.getElementById('input')
    input.value = ''

}

const loadData = async (id) => {
    const URL = `https://api.adviceslip.com/advice/${id}`
    const res = await fetch(URL)
    const data = await res.json()
    displayAdvice(data)
    
}

const displayAdvice = data => {
    const display = document.getElementById('display')
    display.innerHTML = `
    <h5 class="card-title pb-5">Advice #${data.slip.id}</h5>
    <h3 class="card-text pb-5">${data.slip.advice}</h3>
    <hr>
    <button onclick="loadAdvice()" class="bg-dark text-light rounded">Refresh</button>
    `
}

document.getElementById('input').addEventListener('keyup', function(){
    const input = document.getElementById('input').value
    loadData(input)
})

loadAdvice()