var watchMode = "cNHgc2tlBjDMC5uBwxaTOiQW7JcNPhnKgLdML3Si";
var omdb = "140f259f";
var inputValue = document.getElementById("userInput");
var userInput = document.querySelector("#searchbar");
var submitButton = document.querySelector("#submit");
var SearchHistory = document.querySelector("#search-history");

if(localStorage.getItem("storedList") !== null) {
    SearchHistory.innerHTML = JSON.parse(localStorage.getItem("storedList"))
}

SearchHistory

submitButton.addEventListener("click", runSearch)

function runSearch() {
    //Kristry's function to run API functions
    HistoryEntry();
    
}

function HistoryEntry() {
    const newContainer = document.createElement("button");
    newContainer.classList.add("movie-entry");
    newContainer.classList.add("button");
    newContainer.classList.add("is-link");
    newContainer.classList.add("is-light");
    newContainer.classList.add("column");
    newContainer.classList.add("is-full");
    newContainer.textContent = userInput.value;

    for(i=0;i<SearchHistory.children.length;i++) {
        if(SearchHistory.children[i].textContent == userInput.value) {
            SearchHistory.children[i].remove();
        }
    }

    SearchHistory.prepend(newContainer);

    if(SearchHistory.children.length>5) {
        SearchHistory.children[5].remove();
    }

    saveHistory();
}

function saveHistory () {
    localStorage.setItem("storedList", JSON.stringify(SearchHistory.innerHTML));
}

function addButtonMemory () {
    // const movieData 
}
