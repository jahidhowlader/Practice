let count = 1;

const randomUsers = _ => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayResult(data))
}

const displayResult = data => {
    const name = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    const gender = data.results[0].gender
    const street = `${data.results[0].location.street.number}, ${data.results[0].location.street.name}`
    const state = data.results[0].location.state
    const country = data.results[0].location.country
    const pic = data.results[0].picture.thumbnail

    const displayName = document.getElementById('name')
    const displayGendar = document.getElementById('gendar')
    const displayStreet = document.getElementById('street')
    const displayState = document.getElementById('state')
    const displayPicture = document.getElementById('image')

    displayName.innerText = name
    displayGendar.innerText = gender
    displayStreet.innerText = street
    displayState.innerText = `${state}, ${country}`
    displayPicture.innerHTML = `
    <img src="${pic}" alt="">
    `

    console.log(data.results[0].picture.thumbnail);
}

randomUsers()