// Reading and Accessing(fetching) data in data.JSON

// SYNTAX : fetch().then().then().catch()

function fetchJSONData(){

    fetch("./data.json")
    .then((res) => {
        if(!res.ok){
            throw new Error(`HTTP error! Status : ${res.status}`)
        }

        return res.json(); /* Converts JSON into a JS Object */
    })
    .then((data) => 
        // Accessing data in the data object
    console.log(data))

    .catch((error) => 
    console.log("Unable to fetch data", error))

}

fetchJSONData()