jQuery(document).ready(function ($) {

    function firstSection (locationToGrab, placeToGrab){
        $.ajax({
            url:"/javascript/rexburg.json",
            dataType: 'json',
            success: function (data) {
                console.log(data);
//                var image = data[locationToGrab][placeToGrab]['image'];
//                var title = data[locationToGrab][placeToGrab]['title'];
//                var address = data[locationToGrab][placeToGrab]['address'];
//                var detail = data[locationToGrab][placeToGrab]['detail'];
                var list_element = $('.list');
                var main_title = $('.main-title');
$.each(data[locationToGrab] , function(key, value) {


         var template =  '<div class="sub-content">' +
         '<div class="sub-image"><img src="' + value.image + '" /></div>' +
                '<div class="address-div">' +
                   '<h2 class="sub-title">' + value.title+ '</h2><address class="sub-address">' + value.address +'</address></div>' +
                '<p class="sub-detail">'+ value.detail + '</p></div>';
    list_element.append(template);
});
//                var main_title = $('.main-title');
//                var place_image = $('.sub-image');
//                var place_title = $('.sub-title');
//                var place_address = $('.sub-address');
//                var place_detail = $('.sub-detail');
//
//                main_title.html(locationToGrab);
//                place_image.html('<img src="' + image + '" />');
//                place_title.html(title);
//                place_address.html(address);
//                place_detail.html(detail);
            }
        });
    }
    firstSection('Indoor');
});
