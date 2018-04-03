var buttons = ["Tiger", "Panda", "Cat", "Penguin", "Wolf"];

$(document).ready(function(){
    for(var i = 0; i<buttons.length; i++){
        var newButton = $("<button class='giphyButton'>"+buttons[i]+"</button>")
        $("#button-list").append(newButton);
    }
});

