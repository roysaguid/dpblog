(function($) {
Drupal.behaviors.example_search = {
  attach: function (context, settings) {
    //code starts
 
    $(".example-form").on("keyup", "#title", function () {
        var title = $(this).val();
        $.ajax({
            url: Drupal.settings.basePath + 'example/ajax/search',
            type: 'post',
            data: 'title=' + title,
            dataType: 'json',
            success: function (data) {
                if (data.success === true) {
                    $('#form-ajax-results').removeClass('hide-form-search');
                    $('#form-ajax-results').addClass('show-form-search');
                    $('#form-ajax-results').html(data.content);
                } else {
                    $('#form-ajax-results').addClass('hide-form-search');
                    $('#form-ajax-results').removeClass('show-form-search');
                }
            }
        });
    }); // end keyup   
 
    //code ends
  }
};
})(jQuery);