orders=[];


function creditSelect(){
	
	
	var jifen=0;
	var name = sessionStorage.getItem("userName");
	var table = document.getElementById('table');
	for (var i = 0; i < localStorage.length; i++) {
		var getkey = localStorage.key(i);
		if (getkey.substring(0, getkey.indexOf("*")) == name) {
			var order=localStorage.getItem(getkey);
			orders=JSON.parse(order);
			for (var n = 0; n < orders.length; n++) {				
				jifen+=orders[8];				
				table.innerHTML+="<tr><td width='10%' align='center'>"+orders[0]+"</td> <td width='36%' align='center'>"+orders[5]+"</td> <td width='20%' align='center'>"+orders[7]+"</td> <td width='10%' align='center'>"+orders[8]+"</td></tr>";
				break;
			}
		}
	}
	var cr=document.getElementById('credit');
	cr.innerHTML=jifen;
}
window.onload = creditSelect;


function clear() {

				document.form1.webUserEntity.name = "";
				document.form1.webUserEntity.address = "";
				document.form1.webUserEntity.postcode = "";
				document.form1.webUserEntity.phone = "";
			}