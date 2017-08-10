//
// Alpha Form
//
var alpha = function(){
  (function() {

    var constraints = {
      email: {
        presence: true,
        email: true
      },
      honey: {
        length: {
          minimum: 0,
          maximum: 0,
          tooLong: ", you're a robot!",
        }
      }
    };

    // Hook up the form so we can prevent it from being posted
    var form = document.querySelector("form#alpha-signup");
    form.addEventListener('submit', function(ev) {
      ev.preventDefault();
      handleFormSubmit(form);
    });

    // Hook up the inputs to validate on the fly
    var inputs = document.querySelectorAll("input, textarea, select");
    for (var i = 0; i < inputs.length; ++i) {
      // hook up both keyup & change, since keyup doesn't fire for browser auto-fill
      // but change doesn't fire until the input is blurred
      inputs.item(i).addEventListener("change", handleInputChange);
      inputs.item(i).addEventListener("keyup", handleInputChange);
    }

    function handleInputChange(ev) {
      var errors = validate(form, constraints) || {};
      showErrorsForInput(this, errors[this.name]);
      hideSubmitMessages();
    }

    function handleFormSubmit(form, input) {
      hideSubmitMessages();

      // validate the form aainst the constraints
      var errors = validate(form, constraints);
      // then we update the form to reflect the results
      showErrors(form, errors || {});
      if (!errors) {
        showSuccess();
      }
    }

    // Hide any result of a prevous submission
    function hideSubmitMessages() {
      $('#alpha-signup .success-message:visible').hide();
    }

    // Updates the inputs with the validation errors
    function showErrors(form, errors) {
      // We loop through all the inputs and show the errors for that input
      _.each(form.querySelectorAll("input[name], select[name]"), function(input) {
        // Since the errors can be null if no errors were found we need to handle
        // that
        showErrorsForInput(input, errors && errors[input.name]);
      });
    }

    // Shows the errors for a specific input
    function showErrorsForInput(input, errors) {
      // This is the root of the input
      var formGroup = closestParent(input.parentNode, "form-group")
        // Find where the error messages will be insert into
        , messages = formGroup.querySelector(".messageBox");
      // First we remove any old messages and resets the classes
      resetFormGroup(formGroup);
      // If we have errors
      if (errors) {
        // we first mark the group has having errors
        formGroup.classList.add("error");
        // then we append all the errors
        _.each(errors, function(error) {
          addError(messages, error);
        });
      } else {
        // otherwise we simply mark it as success
        formGroup.classList.add("valid");
      }
    }

    // Recusively finds the closest parent that has the specified class
    function closestParent(child, className) {
      if (!child || child == document) {
        return null;
      }
      if (child.classList.contains(className)) {
        return child;
      } else {
        return closestParent(child.parentNode, className);
      }
    }

    function resetFormGroup(formGroup) {
      // Remove the success and error classes
      formGroup.classList.remove("error");
      formGroup.classList.remove("valid");
      // and remove any old messages
      _.each(formGroup.querySelectorAll(".help-block.error"), function(el) {
        el.parentNode.removeChild(el);
      });
    }

    function addError(messages, error) {
      var block = document.createElement("p");
      block.classList.add("help-block");
      block.classList.add("error");
      block.innerText = error;
      messages.appendChild(block);
    }

    // -----------------------------------------
    // Send Alpha Form on Successful Validation
    // -----------------------------------------
    function showSuccess(ev) {
      var form = $('#alpha-signup'),
          emailVal = form.find('#email').val(),
          dataEncoded = encodeURIComponent(emailVal),
          formAction = form.attr('action') + dataEncoded,
          submit = form.find('input[type="submit"]'),
          submitOriginalValue = submit.val();

      // Prevent redundant submissions
      form.prop('disabled', true);
      submit.prop('disabled', true)
            .prop('value', 'Please wait...');

      $.ajax({
        url: formAction,
        dataType: 'text',
        type: 'PUT'
      }).always(function () {
        // Re-enable the form
        form.prop('disabled', false);
        submit.prop('disabled', false)
              .prop('value', submitOriginalValue);
      }).done(function ( data, textStatus, jqXhr ){
        $('#alpha-signup .show-on-success').fadeIn(500);
        console.log(data+' | '+textStatus+' | '+jqXhr);
      }).fail(function ( jqXhr, textStatus, errorThrown ){
        var msg = jqXhr.status / 100 == 4 ?
                  'Please enter a valid email' :
                  'Something went wrong. Please try again later.';
        $('#alpha-signup .show-on-fail p.mb').text(msg);
        $('#alpha-signup .show-on-fail').fadeIn(500);
      });
    }
  })();

}

//
// Ready
//
$(function() {
    alpha();
});
