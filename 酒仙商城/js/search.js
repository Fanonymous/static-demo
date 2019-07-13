function clear() {
	document.form1.webUserEntity.email = "";
	document.form1.webUserEntity.name = "";
	document.form1.webUserEntity.password = "";
	document.form1.webUserEntity.passwordConfirm = "";
}

function searchShop(){
	var guanjianzi=document.getElementById("guanjianzi").value;
	var name=document.getElementById('test');
	var index=name.selectedIndex;
	var val=name.options[index].value;
	//都为空
	if(val==0&&guanjianzi==""){
		top.location.href="home.htm";
	}
	//下拉框值为0但输入框有值
	if(val==0&&guanjianzi=="国产啤酒"){
		top.location.href="item_青岛啤酒.htm";
	}
	if(val==0&&guanjianzi=="进口啤酒"){
		top.location.href="item_百威啤酒.htm";
	}
	if(val==0&&guanjianzi=="西凤酒"){
		top.location.href="item_info.htm";
	}
	if(val==0&&guanjianzi=="洋河大曲"){
		top.location.href="item_洋河大曲.htm";
	}
	if(val==0&&guanjianzi=="茅台"){
		top.location.href="item_list.htm";
	}
	if(val==1&&guanjianzi==""){
		top.location.href="item_青岛啤酒.htm";
	}
	if(val==2&&guanjianzi==""){
		top.location.href="item_百威啤酒.htm";
	}
	if(val==3&&guanjianzi==""){
		top.location.href="item_info.htm";
	}
	if(val==4&&guanjianzi==""){
		top.location.href="item_洋河大曲.htm";
	}
	if(val==5&&guanjianzi==""){
		top.location.href="item_list.htm";
	}
}
