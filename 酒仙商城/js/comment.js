function checkcommentform() {
	var k = 0;
	for (i = 0; i < document.form1.xing.length; i++) {
		if (document.form1.xing[i].checked)
			k = 1;
	}
	if (k === 0) {
		window.alert("请打分！");
		return false;
	} else {
		getName();
		getComment();
	}
	
}

shopName="";
function getName(){
	 var urlInfo=window.location.href; 
	 
	 shopName = decodeURI(urlInfo.split("=")[1]);
	 //console.log(shopName);
}


function getComment(){
	var va=document.getElementsByName('xing');
	var message=document.getElementById('message').value;
	var name=sessionStorage.getItem('userName');
	xing="";
	for(var i=0;i<va.length;i++){
		if(va[i].checked){
			xing=va[i].value;
			break;
		}
	}
	
	//获得系统时间
	
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var time=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
	
	//6为随机数
	var num="";
	for(var i=0;i<6;i++){
		num+=Math.floor(Math.random()*10);
	}
	
	
	
	var com=new Array();
	com[0]=xing;
	com[1]=time;
	com[2]=name;
	com[3]=message;
	var str=JSON.stringify(com);
	localStorage.setItem(shopName+"*"+num,str);
	alert("评论成功！");
	
	
}
 
