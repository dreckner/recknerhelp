function showHide(did) {
	var s = "block";
	if (document.getElementById(did).style.display == "block") s = "none";
	document.getElementById(did).style.display = s;
}