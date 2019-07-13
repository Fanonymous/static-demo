shopName="";
function getName(){
	 var urlInfo=window.location.href; 
	 
	 shopName = decodeURI(urlInfo.split("=")[1]);
	 
}

function getAllcomment(){
	getName();	
	console.log(shopName);
	var table = document.getElementById('table');
	for (var i = 0; i < localStorage.length; i++) {
		var getkey = localStorage.key(i);
		if (getkey.substring(0, getkey.indexOf("*")) == shopName) {
			var order=localStorage.getItem(getkey);
			var orders=JSON.parse(order);
			for (var n = 0; n < orders.length; n++) {
				table.innerHTML+="<tr><td width='15%' align='center' bgcolor='red'>评价人会员昵称：</td><td width='15%' align='left'>"+orders[2]+"</td><td width='10%' align='center'>发表时间：</td><td width='20%' align='left'>"
				+orders[1]+"</td><td>打分：</td><td width='32%' align='left'><img src='../graphics/"+orders[0]+"star.jpg'></td></tr><tr>"+orders[3]+"</tr>";
				break;
			}
		}
	}
}

window.onload = getAllcomment();




function clear() {

				document.form1.webUserEntity.name = "";
				document.form1.webUserEntity.address = "";
				document.form1.webUserEntity.postcode = "";
				document.form1.webUserEntity.phone = "";
			}