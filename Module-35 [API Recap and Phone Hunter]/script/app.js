const loadPhones = async (searchText) => {
    if (searchText) {
        const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        const res = await fetch(URL)
        const data = await res.json()
        displayPhone(data.data);
        console.log(data.data);
    } else {
        const URL = `https://openapi.programming-hero.com/api/phones?search=iphone`
        const res = await fetch(URL)
        const data = await res.json()
        displayPhone(data.data);
        console.log(data.data);
    }

}

const displayPhone = phones => {
    const showAll = document.getElementById('showAll')
    if(phones.length < 6) {
        showAll.classList.add('d-none')
    } else {
        showAll.classList.remove('d-none')
    }
    phones = phones.slice(0, 6)

    const totalPhone = document.getElementById('total-phone')
    totalPhone.innerText = phones.length

    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerHTML = ''

    const notFounded = document.getElementById('not-found')

    if (!phones.length) {
        notFounded.classList.remove('d-none')

    } else {
        phones.forEach(phone => {
            const card = document.createElement('div')
            card.classList.add('col')
            card.innerHTML = `
            <div class="card">
                <img class="img-fluid p-3 border bg-light " src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">Brand: ${phone.brand}</p>
                </div>
            </div>
            `
            phoneContainer.appendChild(card)
        })

        notFounded.classList.add('d-none')
    }
    spiner.classList.add('d-none')
}

document.getElementById('search-btn').addEventListener('click', function () {
    const input = document.getElementById('search-input').value

    const spiner = document.getElementById('spiner')
    spiner.classList.remove('d-none')

    loadPhones(input)
})

loadPhones()