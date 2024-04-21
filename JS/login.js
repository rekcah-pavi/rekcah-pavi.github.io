

function show_sign(){
	document.getElementById("login").style.display = "none";
	document.getElementById("sign").style.display = "inline";

}


function show_login(){
	document.getElementById("sign").style.display = "none";
	document.getElementById("login").style.display = "inline";

}


function check_sign(){
	var pass = document.getElementById("txtPassword").value;
	var cpass = document.getElementById("txtConfirmPassword").value;

	if (pass != cpass){
		alert("Passwords not math");
		return false
	}
	return true

}