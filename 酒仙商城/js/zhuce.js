function savaForm() {
	if (localStorage.length < 1) {
		var userList = new Array();
		userList[0] = document.getElementById('email').value;
		userList[1] = document.getElementById('name').value;
		userList[2] = document.getElementById('password').value;
		var str = JSON.stringify(userList);

		if (window.localStorage) {

			localStorage.setItem(document.getElementById('name').value, str);
			alert("注册成功！");
      
		} else {
			alert("浏览器不支持localStorage");
		}
	} else {
		var a = 0;
		for (var i = 0; i < localStorage.length; i++) {

			var getkey = localStorage.key(i);
			if (getkey == document.getElementById('name').value) {
				a = a + 1;
				break;
			}

		}

		if (a == 1) {
			alert("该用户名已被注册，请重新输入！");
		} else {
			var userList = new Array();
			userList[0] = document.getElementById('email').value;
			userList[1] = document.getElementById('name').value;
			userList[2] = document.getElementById('password').value;
			var str = JSON.stringify(userList);

			if (window.localStorage) {

				localStorage.setItem(document.getElementById('name').value, str);
				alert("注册成功！");
			} else {
				alert("浏览器不支持localStorage");
			}
		}
	}
}

function checkregform() {
	if (document.form1.email.value === "") {
		window.alert("请输入有效的邮箱地址！");
		document.form1.name.focus();
		return false;
	}
	if (!checkEmail(document.form1.email.value)) {
		window.alert("邮箱地址格式不正确");
		return false;
	}
	if (document.form1.password.value === "") {
		window.alert("请输入密码！");
		document.form1.password.focus();
		return false;
	}
	if (document.form1.passwordConfirm.value === "") {
		window.alert("请再次输入密码！");
		document.form1.passwordConfirm.focus();
		return false;
	}
	if (document.form1.passwordConfirm.value.length < 6 || document.form1.password.value < 6) {
		window.alert("密码长度必须大于6位！");
		document.form1.passwordConfirm.value = "";
		document.form1.password.value = "";
		document.form1.password.focus();
		return false;
	}
	if ((document.form1.passwordConfirm.value) != (document.form1.password.value)) {
		window.alert("两次密码不一致，请重新输入！");
		document.form1.passwordConfirm.value = "";
		document.form1.password.value = "";
		document.form1.password.focus();
		return false;
	} else {
		savaForm();
	}
}
//判断邮箱地址是否有效
function checkEmail(email) {
	var pos1 = email.indexOf("@", 0);
	var pos2 = email.indexOf(".", 0);
	//var   pos3 = email.lastIndexOf("@");
	// var   pos4 = email.lastIndexOf(".");
	if ((pos1 <= 0) || (pos1 === email.length) || (pos2 <= 0) || (pos2 === email.length))
		return false;
	else
		return true;

	/*if(email.indexOf("@",0)<0){
		return false;
	}
	if(email.indexOf)
	*/

}