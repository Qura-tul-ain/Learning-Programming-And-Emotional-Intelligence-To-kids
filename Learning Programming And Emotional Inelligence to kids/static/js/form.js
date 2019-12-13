$(document).ready(function() {

	$('form').on('submit', function(event) {

		$.ajax({
			type : 'POST',
			url : '/app'
		})
		

	});

});