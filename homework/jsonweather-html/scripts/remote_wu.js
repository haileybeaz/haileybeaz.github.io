// Current Location Scripts
$(function () {
    var status = $('#status');
    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                // Call the getData function, send the lat and long
                getData(lat, long);
            });
        }
        else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }
    })();
    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
            url: "http://api.wunderground.com/api/e45cfef1ebf0e5ba/geolookup/conditions/q/autoip.json"
            , dataType: "jsonp"
            , success: function (data) {
                console.log(data);
                var city = data['location']['city'];
                var state = data['location']['state'];
                var temp = data['current_observation']['temp_f'];
                var sum = data['current_observation']['weather'];
                var feel = data['current_observation']['feelslike_f'];
                var wind = data['current_observation']['wind_string'];
                var humid = data['current_observation']['relative_humidity'];
                var time = data['current_observation']['observation_time'];
                //                var temp_f = data['current_observation']['temp_f'];
                //
                //                console.log("Current temperature in " + location + " is: " + temp_f);
                //
                var cur_location = $('#cityDisplay');
                var title_location = $('#location_home');
                var cur_temp = $('#currentTemp');
                var summary = $('#summary');
                var feel_temp = $('#add1');
                var windString = $('#add2');
                var humidity = $('#add3');
                var update = $('small');
                //                var message = $('#message');
                //
                cur_location.text(city + ', ' + state);
                title_location.text(city + ', ' + state + ' | ' + 'Weather' + ' Home' );
                cur_temp.text(temp + ' F');
                summary.text(sum);
                feel_temp.text('Feels like ' + feel + ' F');
                windString.text('Wind ' + wind);
                humidity.text('Humidity of ' + humid);
                update.text(time);
                //                temp.text(temp_f);
                //                message.text("Current temperature in " + location + " is: " + temp_f);
            }
        });
    }
    $("#cover").fadeOut(250);
});
// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
