$('#query').keyup(function(){
    // All code will be inside of this block
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data);
        var output = '<ol>';
        $.each(data.RESULTS, function(key, val){
            if (val.name.search(rExp) != -1){
                output += '<li>';
                output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        });//end each
        output += '</ol>';
        $("#searchResults").html(output);
    }); // end getJSON

    // Get weather data from wunderground.com
    function getData(input) {
        // Get the data from the wunderground API
        $.ajax({
            url: "//api.wunderground.com/api/e45cfef1ebf0e5ba/geolookup/conditions/q/"
            + input + ".json"
            , dataType: "jsonp"
            , success: function (data) {
                console.log(data);
                var location = data.location.city + ', ' + data.location.state;
                var temp_f = data.current_observation.temp_f;
                console.log('Location is: ' + location);
                console.log('Temp is: ' + temp_f);
                $("#cityDisplay").text(location);
                $("title").html(location + " | Weather Center");
                $("#currentTemp").html(Math.round(temp_f) + '°');
                $("#summary").text(toTitleCase(data.current_observation.icon));
                $("#cover").fadeOut(250);
            }
        });
    }

    // Intercept the menu link clicks
    $("#searchResults").on("click", "a", function (evt) {
        evt.preventDefault();
        // With the text value get the needed value from the weather.json file
        var jsonCity = $(this).text();
        console.log(jsonCity);
        $.ajax({
            url: "//api.wunderground.com/api/e45cfef1ebf0e5ba/geolookup/conditions/q/"
            + jsonCity + ".json"
            , dataType: "jsonp"
            , success: function (data) {
                console.log(data);
                console.log(data[jsonCity]);
                var zip = data[jsonCity].zip;
                console.log(zip);
                getData(zip);
            }
        });
    });



    // A function for changing a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
}); // end keyup


