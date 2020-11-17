function sendMail(contactForm) {
	emailjs.send("gmail", "PizzeriaOnline", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.emailaddress.value,
			"project_request": contactForm.textArea.value
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);
			},
			function (error) {
				console.log("FAILED", error);
			}
		);
        //The reset function is working only alternatively to sendMail function and not together. Need to fix it.
        /*form.reset();   
    $('#order-form').modal('hide');*/
	return false; // To block from loading a new page
}


