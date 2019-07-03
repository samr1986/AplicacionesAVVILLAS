module.exports.FncConsultarExcep = function(ID) {
    let InvocaRestService = require("../models/Invocarservicio");
    let metodo = 'GET'
    let url = 'https://ws-rest-creditoempresarial.azurewebsites.net/subsanarExcepciones?colaboradorResponsable=' + ID;
    let respuestaSubsanarExcepciones = InvocaRestService.invocarServicio(metodo, url);
    if (respuestaSubsanarExcepciones.salida.codigoRespuesta == 0) {
        return respuestaSubsanarExcepciones.salida.ExcepcionesSubsables;
    } else {
        return {};
    }
};
let ConsultaUtilizacionesSchema = {
    TipoIdentificacion: 'NIT',
    NumeroIdentificacion: '850133065',
    nombre: 'Empresa xxxx',
    tamEmpresa: 'CORPORATIVA I',
    NumeroSolicitud: '',
    TipoOperacion: '',
    Modalidad: '',
    Monto: '10000000',
    AmortK: '',
    PerGraK: '',
    Plazo: '20 dias',
    AmortI: '',
    PerGraI: '',
    Tasa: 'politica + .00%',
    NPreExecGAP: '0',
    CodCarte: '0',
    Estado: 'Desembolsada',
    ConvFactoring: '0',
    SerialCartaIntencion: '0',
    SerialCartaInstruccion: '0',
    SerialPagare: '9467004958',
    SerialSegVida: '0',
    SerialContrato: '0',
    SerialFNG: '0',
    ReservaFNG: '0',
    ConsCodExcep: [{
        Descripcion: 'Cupo vencido',
        Estado: 'OK'
    }, {
        Descripcion: 'Extracupo por grupo',
        Estado: 'OK'
    }, {
        Descripcion: 'Extracupo por empresa',
        Estado: 'OK'
    }, {
        Descripcion: 'Extracupo por cupo',
        Estado: 'OK'
    }, {
        Descripcion: 'Extracupo por línea',
        Estado: 'OK'
    }, {
        Descripcion: 'Período de gracia capital solicitado > período de gracia aprobado',
        Estado: 'OK'
    }, {
        Descripcion: 'Período de gracia interés solicitado > período de gracia aprobado',
        Estado: 'OK'
    }, {
        Descripcion: 'Plazo solicitado > plazo aprobado',
        Estado: 'OK'
    }, {
        Descripcion: 'Forma pago capital > forma de pago aprobada',
        Estado: 'OK'
    }, {
        Descripcion: 'Forma pago interés > forma de pago aprobada',
        Estado: 'OK'
    }, {
        Descripcion: 'Tasa solicitada < tasa política',
        Estado: 'OK'
    }]
};
//let ConsultaUtiliza = module.exports = ConsultaUtilizacionesSchema;
module.exports.FncConsultarUtiliza = function(Modalidad, TipoOperacion, NSolicitud) {
    ConsultaUtilizacionesSchema.NumeroSolicitud = NSolicitud;
    ConsultaUtilizacionesSchema.TipoOperacion = TipoOperacion;
    ConsultaUtilizacionesSchema.Modalidad = Modalidad;

    return ConsultaUtilizacionesSchema;
};