function adlib() {
	var value1 = $('#value1').val();
	var value2 = $('#value2').val();
	var value3 = $('#value3').val();
	var value4 = $('#value4').val();
	var value5 = $('#value5').val();
	
	if (value1 && value2 && value3 && value4 && value5) {
		$("#result").html('<p>' + value1 + ' and ' + value2 + ' went to ' + value3 + ' to ' + value4 + ' and '
		+ value5 + '</p><button id="reset_button" type="button" onclick="reset()">Reset</button>');
		$("#form").hide("fast");
		$("#result").show("fast");	
	}
	else { alert('One or more fields are blank. Please check your form and try again.') }
	
}

function reset() {
		$('#value1').val("");
		$('#value2').val("");
		$('#value3').val("");
		$('#value4').val("");
		$('#value5').val("");
		$("#form").show("fast");
		$("#result").hide("fast");


}