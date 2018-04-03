

var buttons = ["Tiger", "Panda", "Cat", "Penguin", "Wolf"];
var apiKey = "yMjWO5Rixpq4Gqhyr18X3SvMLMwAjXWb";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key="+apiKey+"&rating=pg-13";

$(document).ready(function(){
    for(var i = 0; i<buttons.length; i++){
        var newButton = $("<button class='giphy-button'>"+buttons[i]+"</button>")
        $("#button-list").append(newButton);
    }

    $("body").on("click","#add-gif", function(){
        var term = $("#gif-term").val();
        console.log("Term: "+term);
        if(!(term==="")){
            buttons.push(term);
            console.log(buttons);
            var newButton = $("<button class='giphy-button'>"+buttons[buttons.length-1]+"</button>")
            $("#button-list").append(newButton);
        }

 
    return false;
    })

    $("body").on("click", ".giphy-button", function(){
        $.ajax({
            url: queryURL,
            method: "GET"
          })
    
          // After the data from the AJAX request comes back
            .then(function(response) {
                console.log(response);
            // Saving the image_original_url property
              var imageUrl = response.data.image_original_url;
    
              // Creating and storing an image tag
              var catImage = $("<img>");
    
              // Setting the catImage src attribute to imageUrl
              catImage.attr("src", imageUrl);
              catImage.attr("alt", "cat image");
    
              // Prepending the catImage to the images div
              $("#giphy-list").prepend(catImage);
            });
        return false;
    })

});

