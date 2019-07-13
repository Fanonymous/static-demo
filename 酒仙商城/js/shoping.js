function shopping() {
	var number = 1;
	if (sessionStorage.length < 1) {
		alert("您还没有登录！请先登录。");
		return false;
	} else {
		shuruNumber = prompt("请输入要购买的数量", 1);
		if (shuruNumber != null) {
			//console.log(shuruNumber);
			number = parseInt(shuruNumber);

		} else {
			return false;
		}
		var name = document.getElementById('name').value;
		var marketPrice = document.getElementById('marketPrice').value;
		var memberPrice = document.getElementById('memberPrice').value;

		for (var i = 0; i < localStorage.length; i++) {

			var getkey = localStorage.key(i);
			//var all=JSON.stringify(getkey);

			testname = sessionStorage.getItem("userName") + "_" + name;
			if (getkey == testname) {
				//alert(testname);
				var testname1 = localStorage.getItem(testname);

				var testname2 = JSON.parse(testname1);

				// alert(testname2);
				var number1 = testname2[3] + number;
				number = number1;
				//console.log(number1);        
			}

		}

	}

	var shopList = new Array();
	shopList[0] = name;
	shopList[1] = marketPrice;
	shopList[2] = memberPrice;
	shopList[3] = number;
	var str = JSON.stringify(shopList);
	if (window.localStorage) {
		localStorage.setItem(sessionStorage.getItem("userName") + "_" + name, str);
		alert("添加购物车成功！");
	} else {
		alert("浏览器不支持localStorage");
	}

	window.location.href = "cart_list.htm.htm";
}

function clear() {

	document.form1.webUserEntity.name = "";
	document.form1.webUserEntity.address = "";
	document.form1.webUserEntity.postcode = "";
	document.form1.webUserEntity.phone = "";
}

function creatChild() {
	var name = document.getElementById('name').value;
	var url = "comment_add.htm?name=" + name;
	var iHeight = 200;
	var iWidth = 800;
	var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
	var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
	window.open(url,"childrenWindow","height="+iHeight+",width="+iWidth+",top="+iTop+",left="+iLeft+",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");   
}


function getss(){
	var name = document.getElementById('name').value;
	var url = "comment_list.htm?name=" + name;
	var iHeight = 600;
	var iWidth = 600;
	var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
	var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
	window.open(url,"childrenWindow","height="+iHeight+",width="+iWidth+",top="+iTop+",left="+iLeft+",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
}
