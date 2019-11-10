jQuery(document).ready(function ($) {
  "use strict";
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    dropdownContainer: document.body,
    initialCountry: "in",
    placeholderNumberType: "MOBILE",
    separateDialCode: true,
    utilsScript: "js/utils.js",
  });
  //Contact
  $('form.contactForm').submit(function () {

    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    var phExp = /^\d{10}$/;
    // phoneno = /^\d{10}$/;
    emailjs.init("user_Dq7mrzrb4AQtJEFrLqWUy");

    f.children('input').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'phone':
            if (!phExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;
    else var str = $(this).serialize();
    var action = $(this).attr('action');
    let searchParams = new URLSearchParams(str);
    if (!action) {
      var template_params = {
        "name": searchParams.get("name"),
        "email": searchParams.get("email"),
        "mobile": searchParams.get("phone"),
        "message": searchParams.get("message")
      }

      var service_id = "default_service";
      var template_id = "default";

      emailjs.send(service_id, template_id, template_params).then(function (response) {
        $("#sendmessage").innerHTML  = "Message Succssfully sent";
        $('.contactForm').find("input, textarea").val("");
      }, function (error) {
        $("#sendmessage").innerHTML  = "Failed to Send message";
      });

    }

    return false;
  });

});
