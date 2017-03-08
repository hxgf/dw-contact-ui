

$(function(){

  $("#contact-process").on('click', function(){


    $("#contact-process").css('opacity','0.5');

    $.ajax({
      type: "POST",
      url: '/contact/process',
      dataType: 'json',
      data: {
        email: $("input[name='email']").val(),
        subject: $("input[name='subject']").val(),
        message: $("textarea[name='message']").val()
      }
    }).done(function(data) {

      $("form input").val('');
      $("form textarea").val('');
      alert("Thanks for contacting us. We'll be in touch soon.");
      $("#contact-process").css('opacity','1');

   });


  });


});
