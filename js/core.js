function core(){
	this.sendXhr = function(datas,successFun,act,urls){
		var keys = "account=China_Shan_Api&key=E4A96452332AA21FEA9E30B6AB7896E4&act="+act;
		keys = md5(keys).toLowerCase();
		console.log(keys)
		if(urls){
			var url =urls+"?&sign="
			+keys
			+"&account=China_Shan_Api"
		}else{
			var url ="http://103.27.5.53:8070/App/MyCenterApi.ashx?&sign="
			+keys
			+"&account=China_Shan_Api"
		}
		
		mui.ajax(url, {
			data: datas,
			dataType: 'json',
			type: 'post',
			timeout: 5000, //超时时间设置为5秒；
			success: successFun
		});
	}
	
		
}
