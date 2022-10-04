var inputValue = document.getElementById("userInput");
var submitButton = document.querySelector("#submit");
var SearchHistory = document.querySelector("#search-history");
var content = document.getElementById("results");
var streamingResults = document.getElementById("streaming-results");

// search history:
if(localStorage.getItem("storedList") !== null) {
    SearchHistory.innerHTML = JSON.parse(localStorage.getItem("storedList"))
}

SearchHistory

submitButton.addEventListener("click", function (){
    runSearch();
    console.log("button clicked");
    omdbCall(inputValue.value);
    
})

function runSearch() {
    omdbCall();
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
    newContainer.textContent = inputValue.value;

    for(i=0;i<SearchHistory.children.length;i++) {
        if(SearchHistory.children[i].textContent == inputValue.value) {
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


function omdbCall(parameter){
    var omdb = "c56181db"
    const apiURL ="https://www.omdbapi.com/?t="+ parameter + "&apikey="+ omdb;
    
    
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        content.innerHTML = "";
        var newH3 = document.createElement("h3");
        newH3.textContent = data.Title;
        var newImg = document.createElement("img");
        newImg.setAttribute("src", data.Poster);
        var newP = document.createElement("p");
        newP.textContent = data.Plot;
        var newP2 = document.createElement("p");
        newP2.textContent = data.Rated;
        var newP3 = document.createElement("p");
        newP3.textContent = data.Ratings[0].Source + data.Ratings[0].Value;
        
        
        var watchMode = "cNHgc2tlBjDMC5uBwxaTOiQW7JcNPhnKgLdML3Si";
        const apiURL2 = "https://api.watchmode.com/v1/title/"+ data.imdbID + "/sources/?apiKey=" + watchMode;

        content.append(newH3)
        content.append(newImg)
        content.append(newP)
        content.append(newP2)
        content.append(newP3)
        

        fetch(apiURL2)
        .then(response => response.json())
        .then(secondData => {
            var streaming = [];
            var streamingData = [];
            streamingResults.innerHTML = "";

            for(i=0; i< secondData.length; i++){
                if(!streaming.includes(secondData[i].name)){
                    streaming.push(secondData[i].name)
                    streamingData.push(secondData[i])
                }
                

            }
            for(i=0; i<streamingData.length; i++){
                var newStreaming = document.createElement("a");
                newStreaming.setAttribute("target", "_blank");
                newStreaming.textContent = streamingData[i].name;
                newStreaming.href = streamingData[i].web_url;
    
                streamingResults.append(newStreaming);

            }
            console.log(streaming);
            console.log(streamingData);
            console.log(secondData);
            
        })
    })
}