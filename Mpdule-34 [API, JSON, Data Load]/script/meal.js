const searchMeal = key => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    const container = document.getElementById('container')
    container.innerHTML = ''

    meals.forEach(meal => {
        const card = document.createElement('div')
        card.classList.add('border', 'p-2', 'rounded-xl')
        card.innerHTML = `
        <img class="rounded" src="${meal.strMealThumb}">
        <h2 class="text-3xl font-semibold py-3">${meal.strMeal}</h2>
        <p>${meal.strInstructions}</p>
        `
        container.appendChild(card)
    })
}

document.getElementById('search').addEventListener('click', function(){
    const input = document.getElementById('input').value
    searchMeal(input)
})

searchMeal('burger')
