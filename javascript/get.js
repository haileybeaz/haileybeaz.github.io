function getSection(locationToGrab) {
    $.ajax({
        url: "/javascript/rexburg.json"
        , dataType: 'json'
        , success: function (data) {
            console.log(data);
            var list_element = $('.list');
            var main_title = $('.main-title');
            $.each(data[locationToGrab], function (key, value) {
                var template = '<div class="sub-content">' + '<div class="sub-image"><img src="' + value.image + '" /></div>' + '<div class="address-div">' + '<h2 class="sub-title">' + value.title + '</h2><address class="sub-address">' + value.address + '</address></div>' + '<p class="sub-detail">' + value.detail + '</p></div>';
                list_element.append(template);
            });
        }
    });
}
//  firstSection('Indoor');
