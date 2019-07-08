function onAClick(modalidad, Toperacion, NroUtilizacion) {
    $('#EnvioDatos').val(modalidad + ',' + Toperacion + ',' + NroUtilizacion);
    $('#lblmensaje').html(modalidad + ',' + Toperacion + ',' + NroUtilizacion);
    document.getElementById("FormConsultarUtilizaciones").submit();
}