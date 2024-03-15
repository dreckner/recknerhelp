function showHide(did) {
	var s = "block";
	if (document.getElementById(did).style.display == "block") s = "none";
	document.getElementById(did).style.display = s;
}

window.onload = function () {
	document.getElementById("af1").addEventListener("click", showHide('f1'));
	document.getElementById("af2").addEventListener("click", showHide('f2'));
	document.getElementById("af3").addEventListener("click", showHide('f3'));
	document.getElementById("af4").addEventListener("click", showHide('f4'));
	document.getElementById("af5").addEventListener("click", showHide('f5'));
	document.getElementById("af5a1").addEventListener("click", showHide('f5a1'));
	document.getElementById("af5a2").addEventListener("click", showHide('f5a2'));
	document.getElementById("af5a3").addEventListener("click", showHide('f5a3'));
	document.getElementById("af5a4").addEventListener("click", showHide('f5a4'));
	document.getElementById("af5a5").addEventListener("click", showHide('f5a5'));
	document.getElementById("af5a6").addEventListener("click", showHide('f5a6'));
	document.getElementById("af5a7").addEventListener("click", showHide('f5a7'));
	document.getElementById("af5a8").addEventListener("click", showHide('f5a8'));
	document.getElementById("af5a9").addEventListener("click", showHide('f5a9'));
	document.getElementById("af5b").addEventListener("click", showHide('f5b'));
	document.getElementById("af5b1").addEventListener("click", showHide('f5b1'));
	document.getElementById("af5b2").addEventListener("click", showHide('f5b2'));
	document.getElementById("af5b3").addEventListener("click", showHide('f5b3'));
	document.getElementById("af5b4").addEventListener("click", showHide('f5b4'));
	document.getElementById("af5b5").addEventListener("click", showHide('f5b5'));
	document.getElementById("af5b6").addEventListener("click", showHide('f5b6'));
	document.getElementById("af5b7").addEventListener("click", showHide('f5b7'));
	document.getElementById("af5c").addEventListener("click", showHide('f5c'));
	document.getElementById("af5c1").addEventListener("click", showHide('f5c1'));
	document.getElementById("af5c2").addEventListener("click", showHide('f5c2'));
	document.getElementById("af5c3").addEventListener("click", showHide('f5c3'));
	document.getElementById("af5c4").addEventListener("click", showHide('f5c4'));
	document.getElementById("af5c5").addEventListener("click", showHide('f5c5'));
	document.getElementById("af5c6").addEventListener("click", showHide('f5c6'));
	

}