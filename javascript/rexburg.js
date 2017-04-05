jQuery(document).ready(function ($){
    function ajaxFromLocalJson(locationToGrab){
        $.ajax({
            url:"/javascript/content.json",
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        })
    }
    ajaxFromLocalJson('Food');
});
