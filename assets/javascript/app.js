

var buttons = ["Tiger", "Panda", "Cat", "Penguin", "Wolf"];
var apiKey = "yMjWO5Rixpq4Gqhyr18X3SvMLMwAjXWb";


$(document).ready(function () {
    for (var i = 0; i < buttons.length; i++) {
        var newButton = $("<button class='giphy-button'>" + buttons[i] + "</button>")
        $("#button-list").append(newButton);
    }

    $("body").on("click", "#add-gif", function () {
        var term = $("#gif-term").val();
        console.log("Term: " + term);
        if (!(term === "")) {
            buttons.push(term);
            console.log(buttons);
            var newButton = $("<button class='giphy-button'>" + buttons[buttons.length - 1] + "</button>")
            $("#button-list").append(newButton);
        }


        return false;
    })

    $("body").on("click", ".giphy-button", function () {
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this).text() + "&api_key=" + apiKey + "&rating=pg-13";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            // After the data from the AJAX request comes back
            .then(function (response) {
                console.log(response);
                // Saving the image_original_url property
                for (var i = 0; i < 10; i++) {
                    var imageUrl = response.data[i].images.fixed_height_still.url;
                    var gifUrl = response.data[i].images.fixed_height.url
                    
                       var image = $("<img>");

                    //   // Setting the catImage src attribute to imageUrl
                        image.attr("src", imageUrl);
                        image.attr("still", imageUrl);
                        image.attr("moving", gifUrl );
                        image.attr("class", "still");

                    //   // Prepending the catImage to the images div
                      $("#giphy-list").prepend(image);
                }
            });
        return false;
    })

    $("body").on("click", ".still", function(){
        $(this).attr("src", $(this).attr("moving")).
        attr("class","moving");
    })

    $("body").on("click", ".moving", function(){
        $(this).attr("src", $(this).attr("still")).
        attr("class","still");
    })

});

