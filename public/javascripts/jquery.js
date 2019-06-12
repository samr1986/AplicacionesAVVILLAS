function onAClick(modalidad,Toperacion,NroUtilizacion){
	alert(modalidad + ' ' + Toperacion + ' ' + NroUtilizacion);
	$('#EnvioDatos').val(modalidad +',' + Toperacion +',' + NroUtilizacion);
	$('#lblmensaje').html(modalidad +',' + Toperacion +',' + NroUtilizacion);
	alert("asigno: " + $('#EnvioDatos').val());
	document.getElementById("FormConsultarUtilizaciones").submit();
}