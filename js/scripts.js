function login(event) {

  event.preventDefault();

  var json = {
    username : $('#user_id').val(),
    password : $('#pass_id').val()
  };

  var URL = "http://192.168.1.63:8000/weather/login/";
  $.ajax({
    url : URL,
    type: "POST",
    data: JSON.stringify(json),
    contentType: "application/json",
    xhrFields: {
      withCredentials: true
    },
  }).success(function(res) {
    $('#log_form').css({ 'display' : 'none' });
    $('#logged_user').css({ 'display' : 'block' });
    $('#logged_user').text( json.username );
    $('#logout_button').css({ 'display' : 'block' });
    hide_error();
  }).error(function(res) {
    $('#error_text').text("User/password is incorrect");
    $('#error').css({ 'display' : '' });
  });
});
















// $(document).ready(function(){
// 	$(".login").click(function(){
// 		event.preventDefault();
// 		if( $("#loginusername").val()=='' && $("#loginpassword").val()=='password') {
// 			$("#first").hide();
// 			$("#second").show();
// 			$("#second").append("<p>Hello, admin</p> <br/><input type='button' class='logout' value='Log Out' />");
// 		}
// 		else {
// 			alert("Please try again");
//                 }
// 								$(".logout").click(function() {
//                 $("form")[0].reset();
//                 $("#second").children('p, input').remove();
//                 $("#first").show();
//                 $("#second").hide();
//              });
//          });

     });

















// $(document).ready(function(){
// 	$("#btn").click(function(){
// 		event.preventDefault();
//
//
// 	})
//
// })
//
//





// $(".login").addClass(fadeOut);
// $(".login").show();
// $(".login").addClass(fadeIn)
//
// // BUSINESS LOGIC
// //
// //
// // PROTOTYPE
// //
// //
// // UI LOGIC
// $(document).ready(function(){
// $()
// })
// // =======
// function SignUp(email){
//   this.email = email
// }
//
//
//
// $(document).ready(function() {
//
//     $('#submit').click(function() {
//       event.preventDefault();
//
//         $(".error").show();
//         var hasError = false;
//         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//
//         var emailaddress = $("#email").val();
//         // var SignUp = new newEmail(emailaddress);
//
//         if(emailaddress == '') {
//             $("#email").after('<span class="error">Please enter your email address.</span>');
//             hasError = true;
//         }
//
//         else if(!emailReg.test(emailaddress)) {
//             $("#email").after('<span class="error">Enter a valid email address.</span>');
//             hasError = true;
//         }
//         $("#email").val();
//         if(hasError == true) { return false; }
//
//     });
// });
//
