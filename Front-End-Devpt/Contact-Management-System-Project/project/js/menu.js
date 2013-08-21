// main menu -----------------------
$(function() {
	$('#menulist').find('> li').hover(function(){
		$(this).find('ul')
			.removeClass('noJS')
				.stop(true, true)
					.slideToggle('fast');



	});
});

//form validation ----------------------------------
$(function(){

	$('#username_error').hide();
	$('#userage_error').hide();
	$('#email_error').hide();
	$('#usernumber_error').hide();
	$('#web_error').hide();
	$('#comments_error').hide();
	$('#contact-form').submit(function(event){
		event.preventDefault();
		var user_name=$('#userName').val();
		var user_value;
			if ((user_name)=="" || user_name.length<3){
			$('#username_error').show();
			user_value=false;

			} else {
			$('#username_error').hide();
			var user_value=true;
			}
		var user_age=$('#userAge').val();
		var age_value;
			if (isNaN(user_age)==true || user_age.length > 3) {
			$('#userage_error').show();
			age_value=false;

			} else {
			$('#userage_error').hide()
			age_value=true;
			}
		var user_email=$('#userEmail').val();
		var email_value;
			if (user_email==""){
			$('#useremail_error').show();
			email_value=false;
			} else {
			$('#useremail_error').hide();
			email_value=true;
			}
		var user_num=$('#userNumber').val();
		var num_value;
			/*if (!user_num.match('[\+]\d{2}[\(]\d{3}[\)]\d{3}[\-]\d{4}')){
				$('#usernumber_error').show();
				num_value=false;
			
			} */

			if (user_num=="" || user_num!==""/*|| user_num.match('[\+]\d{2}[\(]\d{3}[\)]\d{3}[\-]\d{4}')*/){
				$('#usernumber_error').hide();
				num_value=true;

			}
		var web_add = $('#web').val();
		var web_value;
			if (web_add.substring(0,4) !== 'http'){
			$('#web_error').show();
			web_value=false;
			} else {
			$('#web_error').hide();
			web_value=true;
		}
		var comments=$('#userComments').val();
		var comments_value;
			if (comments=="") {
			$('#comments_error').show();
			comments_value=false	
			} else {
			$('#comments_error').hide();
			comments_value=true;
		}

		if (user_value==true && age_value==true && email_value==true && num_value==true && web_value==true && comments_value==true) {
			$('#submit-form').after('<p style="font-family: Arial; font-size: 10px; color: blue">Thank you. We will get back to you in 24 hours<p>');
			$('#userName').val("");
			$('#userAge').val("");
			$('#userEmail').val("");
			$('#userNumber').val("");
			$('#web').val("");
			$('#userComments').val("");

		}
	});

});
