const URL = 'https://jsonplaceholder.typicode.com/users'

function onClick(){
    fetch(URL)
      .then(response => {
        console.log(response);
        return response.json()
    })
      .then(json => {
        for(const name of json){
            console.log(name.id, 
                // name.name, 
                // name.username, 
                // name.email, 
                // name.address, 
                name.address.street,
                name.address.suite,
                name.address.city,
                name.address.zipcode,
                name.address.geo,
                name.address.geo.lat,
                name.address.geo.lng,

                );
        }

        console.log(json[0]);
      })
}