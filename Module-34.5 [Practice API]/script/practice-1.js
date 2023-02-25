// const loadData = _ => {
//     fetch('https://github.com/ProgrammingHero1/api-practice-challenge/blob/main/api-1-data.js')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// loadData()

// console.log('Hello World');

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

const displayData = persons => {
    const container = document.getElementById('container')

    persons.forEach(person => {
        const card = document.createElement('div')
        card.classList.add('col')
        card.innerHTML = `
        <div class="card shadow-lg bg-body rounded">
            <div class="card-header">
                Person Name: ${person.name.common}
            </div>
            <div class="card-body">
                <p class="">Age: ${person.age}</p>
                <p class="">Street: ${person.address.street}, House No: ${person.address.house}</p>
            </div>
        </div>
        `
        container.appendChild(card)
        // console.log(person.address.house);
    })
}

displayData(person.result)

{/* <div class="col">
            <div class="card shadow-lg bg-body rounded">
                <div class="card-header">
                  Person Name: <span id="name"></span> 
                </div>
                <div class="card-body">
                  <p class="">Age:</p>
                  <p class="">Street:</p>
                </div>
              </div>
        </div> */}