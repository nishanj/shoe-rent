<<<<<<< HEAD
// BUSINESS LOGIC
//
//
// PROTOTYPE
//
//
// UI LOGIC
$(document).ready(function(){
$()
})
=======
function SignUp(email){
  this.email = email
}



$(document).ready(function() {

    $('#submit').click(function() {
      event.preventDefault();

        $(".error").show();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var emailaddress = $("#email").val();
        // var SignUp = new newEmail(emailaddress);

        if(emailaddress == '') {
            $("#email").after('<span class="error">Please enter your email address.</span>');
            hasError = true;
        }

        else if(!emailReg.test(emailaddress)) {
            $("#email").after('<span class="error">Enter a valid email address.</span>');
            hasError = true;
        }
        $("#email").val();
        if(hasError == true) { return false; }

    });
});
>>>>>>> jose
