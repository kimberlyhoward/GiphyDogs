$(document).ready(function () {
    console.log("ready!");
    // create an array of names.
    var dogName = [' Poodle ', ' German Shepherd ', ' Labrador Retriever ', ' Pug ', 'Beagle ', ' Bulldog ', ' Dachshund ', ' Husky '];
    function start() {
        $("#button").empty();
        for (i = 0; i < dogName.length; i++) {
            $("#button").append("<button>" + dogName[i] + "</button>");
        }

    }
    start();
    // create buttons for array. Go through the index. For Loop.
    // add a dog. create a button to add.
    $("#newName").on("click", function () {
        console.log("hello");
        // grab input from text box.
        var newDog = $("#newDog").val();
        dogName.push(newDog);
    });

    // // new button attribute= data-dog.
    $("button").on("click", function () {
        var animal = $(this).attr("data-animal");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=VtYD01u5qDuBidYMcbhrAvL5sjuPkXqg&limit=10";
            
// copied javascript. Not yet adapted to this program.
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(animalImage);

                $("#gifs-appear-here").prepend(gifDiv);
            };
        })
    
    })

});
