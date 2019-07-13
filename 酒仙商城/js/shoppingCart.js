function loadShop() {

	for (var i = 0; i < localStorage.length; i++) {
		var getkey = localStorage.key(i);
		var name = sessionStorage.getItem("userName");
		var things = new Array();
		if (getkey.substring(0, getkey.indexOf("_")) == name) {
			var shop = localStorage.getItem(getkey);
			var shops = JSON.parse(shop);
			
			for (var n = 0; n < shops.length; n++) {
				var table = document.getElementById('table');
				var num = shops[0];
				table.innerHTML += "<tr>" + "<td align='center'><button class='delete' na='" + num + "' >删除</button><button class='update' na='" + num + "'>修改</button></td><td align='center'>" + shops[0] + "</td>" + "<td align='center'>" + shops[1] + "￥</td>" + "<td align='center'>" + shops[2] + "￥</td>" + "<td align='center'>" 
				+ "<input style='text-align:center;' class='number' type='text' value='" + shops[3] + "'/>" + "</td>" + "</tr>";

				break;
			}
		}

	}
	var btn = document.getElementsByClassName("delete");
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function() {
			//			alert("nihao");
			//console.log(this.attributes[1].value);
			var str = confirm("确认删除吗？");
			if (str == true) {
				localStorage.removeItem(sessionStorage.getItem("userName") + "_" + this.attributes[1].value);
			} else {
				return false;
			}

		}

	}

	var butt = document.getElementsByClassName("update");

	for (var j = 0; j < butt.length; j++) {
		butt[j].onclick = function() {
			var tishi = confirm("确认修改吗？");
			if (tishi == true) {
				var key = sessionStorage.getItem("userName") + "_" + this.attributes[1].value;
				var shop = localStorage.getItem(key);
				var shop1 = JSON.parse(shop);
				var name = shop1[0];
				var marketPrice = shop1[1];
				var memberPrice = shop1[2];
				var shuliang = this.parentNode.parentNode.lastChild.firstChild.value;
				var shopList = new Array();
				shopList[0] = name;
				shopList[1] = marketPrice;
				shopList[2] = memberPrice;
				shopList[3] = parseInt(shuliang);
				var str = JSON.stringify(shopList);
				localStorage.setItem(key, str);
				alert("修改成功！");
			} else {

				return false;
			}

			/* console.log(shop1[0]);
		console.log(shuliang);*/

			/*var strs=confirm("确认修改吗？");
			if(strs==true){
				*/
		}
	}

}

window.onload = loadShop;

/*function getNumber(e) {
	
	console.log(e.parentNode.parentNode.lastChild.firstChild.value);
}*/