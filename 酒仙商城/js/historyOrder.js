//查出所有的订单信息
dandu=[];
function getallOrder() {
	var name = sessionStorage.getItem("userName");
	var table = document.getElementById('table');
	for (var i = 0; i < localStorage.length; i++) {
		var getkey = localStorage.key(i);
		if (getkey.substring(0, getkey.indexOf("*")) == name) {
			var order=localStorage.getItem(getkey);
			var orders=JSON.parse(order);
			for (var n = 0; n < orders.length; n++) {
				table.innerHTML+="<tr><td width='6%' align='center' bgcolor='red'>订单号:</td> <td width='15%' align='left'>"+orders[0]+"</td><td width='8%' align='center'>账户昵称:</td> <td width='10%' align='left'>"+orders[6]
				+"</td><td width='8%' align='center'>下单时间:</td> <td width='15%' align='left'>"+orders[5]+"</td></tr><tr> <td width='8%' align='center'>订单金额:</td><td width='15%' align='left'>￥"+orders[7]
				+"</td><td width='8%' align='center'>支付方式:</td><td width='15%' align='left'>"+orders[4]+"</td><td width='8%' align='center'>送货方式:</td><td width='15%' align='left'>送货上门</td></tr><tr><td width='8%' align='center'>收货人:</td><td width='15%' align='left'>"+orders[1]+"</td><td width='8%' align='center'>收货人地址:</td><td width='15%' align='left'>"+orders[2]
				+"</td></tr><tr><td width='8%' align='center'>本单积分:</td><td width='15%' align='left'>"+orders[8]+"</td><td width='8%' align='center'>收货人手机:</td><td width='15%' align='left'>"+orders[3]+"</td></tr>";
				break;
			}
		}
	}
		
}
window.onload = getallOrder;


function clear() {

	document.form1.webUserEntity.name = "";
	document.form1.webUserEntity.address = "";
	document.form1.webUserEntity.postcode = "";
	document.form1.webUserEntity.phone = "";
}

