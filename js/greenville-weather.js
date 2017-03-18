// Get the data from the wunderground API
$.ajax({
    url: "//api.wunderground.com/api/e45cfef1ebf0e5ba/geolookup/conditions/q/29601.json"
    , dataType: "jsonp"
    , success: function (data) {
        console.log(data);
        var city = data['location']['city'];
        var state = data['location']['state'];
        var temp = parseInt(data['current_observation']['temp_f']);
        var hum = data['current_observation']['relative_humidity'];
        var wind = data['current_observation']['wind_string'];

        var cur_location = $('#place');
        var title_location = $('#location_home');
        var cur_temp = $('#temp2');
        var feel_temp = $('#add1');
        var windString = $('#wind');
        var humidity = $('#humid');

        cur_location.html(city + ', ' + state);
        title_location.html(city + ', ' + state + ' | ' + 'Weather' + ' Home' );
        cur_temp.html(temp + '&deg; F');
        windString.html(wind);
        humidity.html(hum);

    }
});

$("#cover").fadeOut(250);
// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
