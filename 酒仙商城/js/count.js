
function checkForm(){
	if(document.form1.name.value===""){
		window.alert("请输入真实姓名！");
		document.form1.name.focus();
		return false;
	}
	if(document.form1.address.value===""){
		window.alert("请输入有效的地址！");
		document.form1.address.focus();
		return false;
	}
	if(document.form1.phone.value===""){
		window.alert("请输入手机号码");
		document.form1.phone.focus();
		return false;
	}
	if(document.form1.phone.value.length<11||document.form1.phone.value.length>11){
		window.alert("手机号格式不正确！");
		document.form1.phone.focus();
		return false;
	}
	if(document.form1.pay.value===""){
		window.alert("请输入付款方式！");
		document.form1.pay.focus();
		return false;
	}
	if(!checkPay(document.form1.pay.value)){
		window.alert("付款方式不正确！");
	}else{
		submitOrder();
	}
	
}

function checkPay(pay){
	if(document.form1.pay.value=="货到付款"||document.form1.pay.value=="网上支付"){
		return true;
	}else{		
		document.form1.pay.focus();
		return false;
	}
}


totalNumber = 0;
credit=0;
function count() {
	
	var table = document.getElementById('tables');
	var total=document.getElementById('total');
	var htcredit=document.getElementById('credit');
	for (var i = 0; i < localStorage.length; i++) {
		var getkey = localStorage.key(i);
		var name = sessionStorage.getItem("userName");
		var things = new Array();
		if (getkey.substring(0, getkey.indexOf("_")) == name) {
			var shop = localStorage.getItem(getkey);
			var shops = JSON.parse(shop);
			
			for (var n = 0; n < shops.length; n++) {
				var num = shops[0];
				table.innerHTML += "<tr>" + "<td align='center'>" + shops[0] + "</td>" + "<td align='center'>" + shops[1] + "￥</td>" + "<td align='center'>" + shops[2] + "￥</td>" 
				+ "<td align='center'>" + shops[3] + "</td>" + "</tr>";
				var marketPrice = parseInt(shops[1]);
			    var shuliang = shops[3];
			    var price=marketPrice*shuliang;
			    totalNumber=totalNumber+price;
			   

				break;
			}
		}

	}
	total.innerHTML=totalNumber;
	//计算积分 每消费100元兑换1积分
	credit=totalNumber/100;
	htcredit.innerHTML=credit;
	

}
window.onload = count();
function submitOrder(){
	if(totalNumber<=0){
		alert("您还没有添加商品到购物车，请您先购买商品！");
		return false;
	}else{
		var num="";
	for(var i=0;i<6;i++){
		num+=Math.floor(Math.random()*10);
	}
	//订单号
	var dingdanhao="KB"+num;
	//用户姓名
	var name=document.getElementById('name').value;
	//用户地址
	var address=document.getElementById('address').value;
	//电话号码
	var phone=document.getElementById('phone').value;
	//支付方式
	var pay=document.getElementById('pay').value;
	//获得系统当前时间
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var time=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
	
	//存储订单
	var order=new Array();
	order[0]=dingdanhao;
	order[1]=name;
	order[2]=address;
	order[3]=phone;
	order[4]=pay;
	order[5]=time;
	var userName=sessionStorage.getItem("userName");
	order[6]=userName;
	order[7]=totalNumber;
	order[8]=credit;
	var str=JSON.stringify(order);
	
	var tishi=confirm("确认提交订单？");
	if(tishi==true){
		localStorage.setItem(userName+"*"+dingdanhao,str);
		removeShop();
		alert("订单提交成功！");
	}else{
		return false;
	}
	}
	
   
}

//当订单提交的时候移除数据库中的数据
function removeShop(){
	var name = sessionStorage.getItem("userName");
	var a = new Array();
	for(var i=0;i<localStorage.length;i++){
		var getkey = localStorage.key(i);
		
		
		if (getkey.substring(0, getkey.indexOf("_")) == name) {
			localStorage.removeItem(getkey);
			i = i-1;
			
		}
	}
}
