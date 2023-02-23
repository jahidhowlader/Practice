const URL = 'https://jsonplaceholder.typicode.com/users'
const greeting = 'Good Evening'

function onClick(){
    fetch(URL)
      .then(response => {
        console.log(response);
        return response.json()
    })
      .then(json => json.forEach(element => console.log(element.id)))
}