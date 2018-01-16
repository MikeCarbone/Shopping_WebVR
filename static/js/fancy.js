function reveal1(){
	document.getElementById("plaid1").style.display = "block";
	document.getElementById("plaid2").style.display = "none";
	document.getElementById("plaid3").style.display = "none";
	document.getElementById("plaid4").style.display = "none";
	document.getElementsByClassName("model")[0].style.display = "none";
}

function reveal2(){
	document.getElementById("plaid1").style.display = "none";
	document.getElementById("plaid2").style.display = "block";
	document.getElementById("plaid3").style.display = "none";
	document.getElementById("plaid4").style.display = "none";
	document.getElementsByClassName("model")[0].style.display = "none";
}

function reveal3(){
	document.getElementById("plaid1").style.display = "none";
	document.getElementById("plaid2").style.display = "none";
	document.getElementById("plaid3").style.display = "block";
	document.getElementById("plaid4").style.display = "none";
	document.getElementsByClassName("model")[0].style.display = "none";
}

function reveal4(){
	document.getElementById("plaid1").style.display = "none";
	document.getElementById("plaid2").style.display = "none";
	document.getElementById("plaid3").style.display = "none";
	document.getElementById("plaid4").style.display = "none";
	document.getElementsByClassName("model")[0].style.display = "block";

}