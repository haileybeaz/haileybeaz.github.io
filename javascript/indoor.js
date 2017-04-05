jQuery(document).ready(function ($) {

    function firstSection (locationToGrab, placeToGrab){
        $.ajax({
            url:"/javascript/rexburg.json",
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var image = data[locationToGrab][placeToGrab]['image'];
                var title = data[locationToGrab][placeToGrab]['title'];
                var address = data[locationToGrab][placeToGrab]['address'];
                var detail = data[locationToGrab][placeToGrab]['detail'];


                var main_title = $('.main-title');
                var place_image = $('.sub-image');
                var place_title = $('.sub-title');
                var place_address = $('.sub-address');
                var place_detail = $('.sub-detail');

                main_title.html(locationToGrab);
                place_image.html('<img src="' + image + '" />');
                place_title.html(title);
                place_address.html(address);
                place_detail.html(detail);
            }
        });
    }
    firstSection('Indoor', 0);

    function secondSection (locationToGrab, placeToGrab){
        $.ajax({
            url:"/javascript/rexburg.json",
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var image = data[locationToGrab][placeToGrab]['image'];
                var title = data[locationToGrab][placeToGrab]['title'];
                var address = data[locationToGrab][placeToGrab]['address'];
                var detail = data[locationToGrab][placeToGrab]['detail'];


                var main_title = $('.main-title1');
                var place_image = $('.sub-image1');
                var place_title = $('.sub-title1');
                var place_address = $('.sub-address1');
                var place_detail = $('.sub-detail1');

                main_title.html(locationToGrab);
                place_image.html('<img src="' + image + '" />');
                place_title.html(title);
                place_address.html(address);
                place_detail.html(detail);
            }
        });
    }
    secondSection('Indoor', 1);

    function thirdSection (locationToGrab, placeToGrab){
        $.ajax({
            url:"/javascript/rexburg.json",
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var image = data[locationToGrab][placeToGrab]['image'];
                var title = data[locationToGrab][placeToGrab]['title'];
                var address = data[locationToGrab][placeToGrab]['address'];
                var detail = data[locationToGrab][placeToGrab]['detail'];


                var main_title = $('.main-title2');
                var place_image = $('.sub-image2');
                var place_title = $('.sub-title2');
                var place_address = $('.sub-address2');
                var place_detail = $('.sub-detail2');

                main_title.html(locationToGrab);
                place_image.html('<img src="' + image + '" />');
                place_title.html(title);
                place_address.html(address);
                place_detail.html(detail);
            }
        });
    }
    thirdSection ('Indoor', 2);
});
