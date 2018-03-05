$(document).ready(function() {
	//creating on click function for submit button
	$('#submitBtn').on('click', function() {

		//declaring function to check if information regarding name and photo are valid
		const validateForm = () => {
			let isValid = true;
			//runs through each value to check if not valid
			$('.text-bars').each(function() {
				if ($(this).val() === '') {
					isValid = false;
				}
			});

			//runs through each question to check if each has been answered
			$('.survey-answer').each(function() {
				if ($(this).val() === '') {
					isValid = false;
				}
			});

			//returns if isValid is true
			return isValid;
		}

		//if validateForm function is true...
		if (validateForm() = true) {

			//beginning to declare values for each part of friend object/array
			const newFriend = {
				name: $('#nameInput').val(),
				photo: $('#imgInput').val(),
				scores: [
					$("#surveyAnswer1").val(),
					$("#surveyAnswer2").val(),
					$("#surveyAnswer3").val(),
					$("#surveyAnswer4").val(),
					$("#surveyAnswer5").val(),
					$("#surveyAnswer6").val(),
					$("#surveyAnswer7").val(),
					$("#surveyAnswer8").val(),
					$("#surveyAnswer9").val(),
					$("#surveyAnswer10").val(),
				]
			}

			//post method used to communicate with api
			$.post('/api/findFriend', newFriend)
			.then(function(data) {
				console.log(data);

				//grabbing information to display on modal
				$('#friendName').text(data.name);
				$('#friendPic').attr('src', data.photo);
			});

			$('#myModal').modal({
				backdrop: 'show';
			});
			$('.modal-backdrop').addClass('fade-in');
		}
		//if validateForm function is not valid, alert the user to finish completing information, and questions
		else {
			alert('Please complete all information requests, and questions before submitting.')
		}
	});
})