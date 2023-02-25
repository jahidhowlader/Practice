const loadData = _ => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showAllCountry(data))
}

const showAllCountry = countries => {
    document.getElementById('total-country').innerText = countries.length
    const container = document.getElementById('container')
    container.innerHTML = ''

    countries.forEach(country => {
        const flag = document.createElement('div')
        flag.classList.add('col-3', 'pb-3')
        flag.innerHTML = `
        <img src="${country.flags.png}">
        `
        container.appendChild(flag)
    })

    console.log(countries[0]);
}

/*
---------------------------------------------------------------------
------------------------RELIGION------------------------------------
--------------------------------------------------------------------
*/

document.getElementById('africa').addEventListener('click', function () {
    const loadRegion = region => {
        const URL = `https://restcountries.com/v3.1/region/${region}`
        fetch(URL)
            .then(res => res.json())
            .then(data => displayRegion(data))
    }

    const displayRegion = countries => {
        document.getElementById('total-country').innerText = countries.length

        const container = document.getElementById('container')
        container.innerHTML = ''

        countries.forEach(country => {
            const flag = document.createElement('div')
            flag.classList.add('col-3', 'pb-3')
            flag.innerHTML = `
            <img src="${country.flags.png}">
            `
            container.appendChild(flag)
        })
        console.log(countries.length);

    }


    loadRegion('africa')
})

document.getElementById('americas').addEventListener('click', function () {
    const loadRegion = region => {
        const URL = `https://restcountries.com/v3.1/region/${region}`
        fetch(URL)
            .then(res => res.json())
            .then(data => displayRegion(data))
    }

    const displayRegion = countries => {
        document.getElementById('total-country').innerText = countries.length

        const container = document.getElementById('container')
        container.innerHTML = ''

        countries.forEach(country => {
            const flag = document.createElement('div')
            flag.classList.add('col-3', 'pb-3')
            flag.innerHTML = `
            <img src="${country.flags.png}">
            `
            container.appendChild(flag)
        })
        console.log(countries.length);

    }


    loadRegion('americas')
})

document.getElementById('asia').addEventListener('click', function () {
    const loadRegion = region => {
        const URL = `https://restcountries.com/v3.1/region/${region}`
        fetch(URL)
            .then(res => res.json())
            .then(data => displayRegion(data))
    }

    const displayRegion = countries => {
        document.getElementById('total-country').innerText = countries.length

        const container = document.getElementById('container')
        container.innerHTML = ''

        countries.forEach(country => {
            const flag = document.createElement('div')
            flag.classList.add('col-3', 'pb-3')
            flag.innerHTML = `
            <img src="${country.flags.png}">
            `
            container.appendChild(flag)
        })

    }

    loadRegion('asia')
})

document.getElementById('europe').addEventListener('click', function () {
    const loadRegion = region => {
        const URL = `https://restcountries.com/v3.1/region/${region}`
        fetch(URL)
            .then(res => res.json())
            .then(data => displayRegion(data))
    }

    const displayRegion = countries => {
        document.getElementById('total-country').innerText = countries.length

        const container = document.getElementById('container')
        container.innerHTML = ''

        countries.forEach(country => {
            const flag = document.createElement('div')
            flag.classList.add('col-3', 'pb-3')
            flag.innerHTML = `
            <img src="${country.flags.png}">
            `
            container.appendChild(flag)
        })
    }
    loadRegion('europe')
})

document.getElementById('oceania').addEventListener('click', function () {
    const loadRegion = region => {
        const URL = `https://restcountries.com/v3.1/region/${region}`
        fetch(URL)
            .then(res => res.json())
            .then(data => displayRegion(data))
    }

    const displayRegion = countries => {
        document.getElementById('total-country').innerText = countries.length

        const container = document.getElementById('container')
        container.innerHTML = ''

        countries.forEach(country => {
            const flag = document.createElement('div')
            flag.classList.add('col-3', 'pb-3')
            flag.innerHTML = `
            <img src="${country.flags.png}">
            `
            container.appendChild(flag)
        })
    }
    loadRegion('oceania')
})


/*
---------------------------------------------------------------------
------------------------Language------------------------------------
--------------------------------------------------------------------
*/




loadData()