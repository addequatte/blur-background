/**
 * Created by ADDEQUATTE on 12.03.2017.
 */
$(function () {
    $('.parent').prepend('<img class="blur-background" src="' + $('.child:first').attr('src') + '">');
    $(document).on('mouseover','.child', function () {
        $('.blur-background').animate({'opacity':'0'},1000, function () {
            $(this).remove();
        });
        $('.parent').prepend('<img class="blur-background" src="' + $(this).attr('src') + '">');
    });
});
