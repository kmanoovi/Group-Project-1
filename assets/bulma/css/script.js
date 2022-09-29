//var watchMode = "cNHgc2tlBjDMC5uBwxaTOiQW7JcNPhnKgLdML3Si";
//var omdb = "140f259f";
var userInput= "";
var inputValue = document.getElementById("userInput");//may need to change the lables from the HTML
var content = document.getElementById("results");//may need to change the lables from the HTML
var button = document.getElementById("submit");

function omdbCall(parameter){
    var omdb = "c56181db"
    const apiURL ="https://www.omdbapi.com/?t="+ parameter + "&apikey="+ omdb;
    

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        content.innerHTML = ""
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

        content.append(newH3)
        content.append(newImg)
        content.append(newP)
        content.append(newP2)
        content.append(newP3)
        
    })
}


// function watchModeCall(parameter){
//     var watchMode = "cNHgc2tlBjDMC5uBwxaTOiQW7JcNPhnKgLdML3Si";
//     const apiURL ="https://watchmode.com/v1/title/{title_id}/sources/?apiKey=" + watchMode + "&";
//     parameter;

// fetch(apiURL)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.Title);
//         console.log(data.Actors);
//         result.textContent = data.Title;
//         //create containers to hold more data
//     })
// }

button.addEventListener("click", function(){
    console.log("button clicked");
    userInput= inputValue.value;
    console.log(userInput);
    omdbCall(userInput);
    //omdb2Call(userInput);
   // watchModeCall(userInput);
})



