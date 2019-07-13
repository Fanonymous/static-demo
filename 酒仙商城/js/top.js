function getName(){
	var name=sessionStorage.getItem("userName");
	var uname = document.getElementById('uname');
	uname.innerHTML = name;
}
window.onload=getName;

function tuichu(){
	sessionStorage.clear( );
	
	window.location.href="top_nologin.htm";
	
}
