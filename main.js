const residentBtn = document.querySelector('#Alderaan_Residents'); //DOM call to the alderaan_residents id (button)
const warsContainer = document.querySelector('section') //DOM call to the section

let baseURL = "https://swapi.dev/api"; //Saves the base url for easier access


axios.get(`${baseURL}/planets/?search=alderaan`) //axios.get(baseurl + the character you need to access. Here, were are trying to access everything about Alderaans)
    .then(response =>{//response parameter gives us access to the object return from the promise
        // console.log(response)
        // console.log(response.data);//returns the data in the object on the console, if the promise was successful
        // console.log(response.data.results). Take it step by step. Notice that the response returned is an ARRAY!
        console.log(response.data.results[0].residents); //Since it is an array, use bracket notation then do dot notation to access the residents
        let residentsArr = response.data.results[0].residents; //Saves the output for easier access
        for(let i = 0; i < residentsArr.length; i++){ //for loop to go through the array of the property
            //console.log(residentsArr[i])
            axios.get(residentsArr[i]) //another axios call to the individual links of the array
                .then (res => //takes another response so we can access the object
                {
                    console.log(res.data)
                    let newElement = document.createElement('h2');//Creates the new H2 element
                    newElement.innerHTML = `${res.data['name']}`; //sets the H2 element to the name property of the data object. (the data is an array, thus, we need to use bracket notation)
                    warsContainer.appendChild(newElement); //We have to connect it to the HTML page somehow. One way is to append it to an item in the HTML page. Section was chosen
                })
        }
    })                              


function getResident () {
    console.log("Button Clicked");
}

residentBtn.addEventListener("click", getResident);