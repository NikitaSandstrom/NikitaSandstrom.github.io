$(document).ready(function () {

    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img>');

    $overlay.append($image);
    $("body").append($overlay);

    $('.albumGallery').on('click', 'a', function (e) {
        console.log("click");

        var imageLocation = $(this).attr("href");

        $image.attr("src", imageLocation);

        $overlay.show();

        e.preventDefault();

    });



    $(document).on('click', function (e) {
        if ($(e.target).has('img').length) {
            $overlay.hide();
        }
    });


    $("#LinkedIn").click(function () {
        alert("This User currently does not have a LinkedIn account, please check later in the year 2019.");
    });
});
