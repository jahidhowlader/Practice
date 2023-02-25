const loadAllCountryApi = _ => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayAllCountry(data))
}

const displayAllCountry = countries => {
    const allCountryElement = document.getElementById('countries')
    countries.forEach(country => {
        const singleCountryElement = document.createElement('div')
        singleCountryElement.innerHTML = `
        <h2><strong class="text-red-500">Country Name:</strong> ${country.name.common}</h2>
        <h3><strong class="text-green-500">Capital Name:</strong> ${country.capital}</h3>
        <button onclick="loadSingleCountry('${country.cca2}')" class="bg-yellow-400 mt-2 py-2 px-5 rounded">Details<button/>
        `
        singleCountryElement.classList.add('border', 'p-2', 'rounded')
        allCountryElement.appendChild(singleCountryElement)
    })
}

const loadSingleCountry = code => {
    const URL = `https://restcountries.com/v3.1/alpha/${code}`

    fetch(URL)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}

const displayCountry = country => {
    const container = document.getElementById('countries-details')
    container.innerHTML = `
    <div>
    <h2><strong class="text-red-500">Country Name:</strong> ${country.name.common}</h2>
    <h3><strong class="text-green-500">Capital Name:</strong> ${country.capital}</h3>
    <img src="${country.flags.png}">

    </div>
    `
}

loadAllCountryApi()