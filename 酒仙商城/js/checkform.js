// JavaScript Document

function checkregform_order() {
	if (document.form1.email.value === "") {
		window.alert("请输入有效的邮箱地址！");
		document.form1.email.focus();
		return false;
	}
	if (!checkEmail(document.form1.email.value)) {
		window.alert("邮箱地址格式不正确");
		return false;
	}
	if (document.form1.password1.value === "") {
		window.alert("请输入密码！");
		document.form1.password1.focus();
		return false;
	}
	if (document.form1.passwordConfirm.value === "") {
		window.alert("请再次输入密码！");
		document.form1.passwordConfirm.focus();
		return false;
	}
	if ((document.form1.passwordConfirm.value) != (document.form1.password1.value)) {
		window.alert("两次密码不一致，请重新输入！");
		document.form1.passwordConfirm.value = "";
		document.form1.password1.value = "";
		document.form1.password1.focus();
		return false;
	}
	if (document.form1.passwordConfirm.value.length < 6 || document.form1.password1.value < 6) {
		window.alert("密码长度必须大于6位！");
		document.form1.passwordConfirm.value = "";
		document.form1.password1.value = "";
		document.form1.password1.focus();
		return false;
	} else {
		window.location.href = "order_confirm_new.htm";
	}
}

function checkloginform() {
	if (document.form1.name.value === "") {
		window.alert("请输入用户名！");
		document.form1.name.focus();
		return false;
	}
	if (document.form1.password.value === "") {
		window.alert("请输入密码！");
		document.form1.password.focus();
		return false;
	} else {
		login();
	}

}

function login() {
	var name = document.getElementById('name').value;
	
	var password = document.getElementById('password').value;
	var userList = localStorage.getItem(name);
	var users = JSON.parse(userList);
	console.log(users);
	if(!users){
		alert("您还没有注册，请先注册！");
		return false;
	}else{
		for (var i = 0; i < users.length; i++) {
		if (users[1] == name && users[2] == password) {
           var topName = sessionStorage.setItem("userName", name);
			window.location.href = "home.htm";
			alert("登录成功！");
			break;

		} else {
			alert("用户名或密码错误！");
			break;
		}

	}
	}
	
}

function checkloginform_order() {
	if (document.form1.name.value === "") {
		window.alert("请输入用户名！");
		document.form1.name.focus();
		return false;
	}
	if (document.form1.password.value === "") {
		window.alert("请输入密码！");
		document.form1.password.focus();
		return false;
	} else {
		window.location.href = "order_confirm.htm";
	}

}

function checkaddressform() {
	if (document.form1.name.value === "") {
		window.alert("请输入用户名！");
		document.form1.name.focus();
		return false;
	}
	if (document.form1.address.value === "") {
		window.alert("请输入地址！");
		document.form1.address.focus();
		return false;
	}
	if (document.form1.phone.value === "") {
		window.alert("请输入手机号码！");
		document.form1.phone.focus();
		return false;
	}
	if (!checkTel(document.form1.phone.value)) {
		window.alert("手机号码格式不对！");
		document.form1.phone.value = "";
		document.form1.phone.focus();
		return false;
	} else {
		window.location.href = "address.htm";
	}

}

function checkaddressnew() {
	if (document.form1.name.value === "") {
		window.alert("请输入用户名！");
		document.form1.name.focus();
		return false;
	}
	if (document.form1.address.value === "") {
		window.alert("请输入地址！");
		document.form1.address.focus();
		return false;
	}
	if (document.form1.phone.value === "") {
		window.alert("请输入手机号码！");
		document.form1.phone.focus();
		return false;
	}
	if (!checkTel(document.form1.phone.value)) {
		window.alert("手机号码格式不对！");
		document.form1.phone.value = "";
		document.form1.phone.focus();
		return false;
	} else {
		window.location.href = "order_confirm.htm";
	}

}

function checkpwdform() {
	if (document.form1.email.value === "") {
		window.alert("请输入邮箱！");
		document.form1.email.focus();
		return false;
	} else {
		window.alert("密码已发送到您的邮箱，请查收！");
		window.location.href = "pwd_find.htm";
	}

}

function checkinfoeditform() {
	if (document.form1.passwordold.value === "") {
		window.alert("请输入原始密码！");
		document.form1.passwordold.focus();
		return false;
	}
	if (document.form1.passwordnew.value === "") {
		window.alert("请输入新密码！");
		document.form1.passwordnew.focus();
		return false;
	}
	if (document.form1.passwordConfirm.value === "") {
		window.alert("请再次输入新密码！");
		document.form1.passwordConfirm.focus();
		return false;
	} else {
		window.location.href = "home.htm";
	}
}

function checkcredit() {
	var creditVal = trim(document.form1.credit.value);
	if (creditVal === "") {
		window.alert("请输入积分数！");
		return false;
	}
	if (checkIsNum(creditVal)) {
		window.alert("您使用了" + creditVal + "个积分！");
	} else {
		window.alert("积分数必须为大于0的整数！");
		document.form1.credit.value = "";
		document.form1.credit.focus();
	}

}

function checkaddressdaohang() {
	if (document.form1.name.value === "") {
		window.alert("请输入用户名！");
		document.form1.name.focus();
		return false;
	}
	if (document.form1.address.value === "") {
		window.alert("请输入地址！");
		document.form1.address.focus();
		return false;
	}
	if (document.form1.phone.value === "") {
		window.alert("请输入手机号码！");
		document.form1.phone.focus();
		return false;
	}
	if (!checkTel(document.form1.phone.value)) {
		window.alert("手机号码格式不对！");
		document.form1.phone.value = "";
		document.form1.phone.focus();
		return false;
	} else {
		window.location.href = "address_daohang.htm";
	}

}

//以下是辅助函数

//判断是不是数字
function isDigit(num) {

	var string = "1234567890";

	if (string.indexOf(num) != -1) {

		return true;

	}

	return false;

}

//判断是不是整数
function isInteger(val) {

	for (var i = 0; i < val.length; i++) {

		if (!isDigit(val.charAt(i))) {
			return false;
		}

	}

	return true;

}
//去左空格; 
function ltrim(s) {
	return s.replace(/^\s*/, "");
}
//去右空格; 
function rtrim(s) {
	return s.replace(/\s*$/, "");
}
//去左右空格; 
function trim(s) {
	return rtrim(ltrim(s));
}

//将表单提交的数据去除空格后，判断数据是否为大于0的整数
function checkIsNum(str) {
	var strTrim = trim(str);
	var zero = 0;
	if (strTrim != "" && strTrim <= 0) {

		return false;
	}
	if (strTrim != "" && strTrim > 0) {
		if (!isInteger(strTrim)) {
			return false;
		}
		if (strTrim.indexOf("0") === zero) {

			return false;
		} else {
			return true;
		}

	} else {
		return false;
	}
}
// 判断字符串是否每个字符均为数字
function checkNumStr(msg) {

	var norma = "0123456789";

	//msg = trim(msg); 

	for (var i = 0; i < msg.length; i++)

	{

		var temp = "" + msg.substring(i, i + 1);

		if (norma.indexOf(temp) < 0)

		{

			return false;

		}

	}

	return true;

}

//检查手机号码格式是否正确
function checkTel(tel) {
	//var str1="13";
	//var str2="15";
	if (!checkNumStr(tel)) {
		return false;
	} //包含不是数字的字符
	if (tel.length != 11) {
		return false;
	} //位数不为11
	if (tel.substring(0, 2).indexOf("13", 0) < 0 && tel.substring(0, 2).indexOf("15", 0) < 0) {
		return false; //不是以13或者15开头
	} else {
		return true;
	}

}