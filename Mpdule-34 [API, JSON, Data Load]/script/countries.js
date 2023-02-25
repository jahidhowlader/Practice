const loadCountries = _ => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = country => {
    const container = document.getElementById('countries')

    country.forEach(data => {
        const element = document.createElement('div')
        element.innerHTML = `
        <h2><strong>Country Name:</strong> ${data.name.common}</h2>
        <h3><strong>Capital:</strong> ${data.capital}</h3>
        <button onclick="countriesDetails('${data.cca2}')" class="py-2 px-4 bg-red-400 rounded mt-2">Details</button>
        `
        element.classList.add('border', 'p-2', 'rounded-lg')
        container.appendChild(element)

        // console.log(data.cca2);

    })
}

const countriesDetails = data => {
    const URL = `https://restcountries.com/v3.1/alpha/${data}`

    fetch(URL)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails = details => {
    const container = document.getElementById('countries-details')
    // const element = document.createElement('div')
        container.innerHTML =   `
        <div>
        <h2><strong>Country Name:</strong> ${details[0].name.common}</h2>
        <h3><strong>Capital:</strong> ${details[0].capital}</h3>
        <h3><strong>Code:</strong> ${details[0].cca2}</h3>
        </div>
        `

        // container.appendChild(element)
    // console.log(element);
    // console.log('data');
    // const chilElement = document.createElement('div')
    // chilElement.innerHTML = `
    // <h2>Country Name: ${data.name.common}</h2>
    // `
    // container.appendChild(chilElement)
}

loadCountries()