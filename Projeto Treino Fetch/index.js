APYKEY = "d5e9c0e4"

let resultDataFetch = ''
let valueSearch = ""

function handleSearch() {
    const inputValue = document.getElementById('search').value
    valueSearch = inputValue
    fetchSearch(valueSearch)
    // if (resultDataFetch === '') {
        
    // } else {
        populateCard(resultDataFetch)
    // }
}

function fetchSearch(searchValue) {
    fetch(`https://www.omdbapi.com/?t=${searchValue}&apikey=${APYKEY}`)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        populateCard(data)
    })
}

function populateCard(data) {
    document.querySelector('.card-filme').innerHTML = 'Carregando...'
    setTimeout(() => {
        document.querySelector('.card-filme').innerHTML = `
        <div class="image">
                <img src="${data.Poster}" alt="${data.Title}">
            </div>
            <div class="infos">
                <h2>${data.Title}</h2>
                <p>${data.Director}</p>
                <p>${data.Genre}(s)</p>
                <p>${data.Plot}</p>
                <p>${data.Year}</p>
            </div>
    `
    }, 2000)
    
    // document.querySelector('.card-filme').in("beforebegin", cardhtml)
}