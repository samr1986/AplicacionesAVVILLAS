module.exports.FncConsultarExcep = function(ID) {
    let InvocaRestService = require("../models/Invocarservicio");
    let metodo = 'GET'
    let url = 'https://ws-rest-creditoempresarial.azurewebsites.net/subsanarExcepciones?colaboradorResponsable=' + ID;
    let respuestaSubsanarExcepciones = InvocaRestService.invocarServicio(metodo, url);
    if (respuestaSubsanarExcepciones.salida.codigoRespuesta == 0) {
        let datosRet = [];
        for (let i = 0; i < respuestaSubsanarExcepciones.salida.ExcepcionesSubsables.length; i++) {
            datosRet.push({
                FecIngresoEta: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].FecIngresoEta,
                HoraReporteEtapa: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].HoraReporteEtapa,
                TipoOperacion: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].TipoOperacion,
                Modalidad: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].Modalidad,
                NroSolicitud: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].NroSolicitud,
                RegionalCCIAL: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].RegionalCCIAL,
                TamEmpresa: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].TamEmpresa,
                TipoID: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].TipoID,
                ID: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].ID,
                NomCliente: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].NomCliente,
                ValorSolicitado: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].ValorSolicitado,
                DesExcep: respuestaSubsanarExcepciones.salida.ExcepcionesSubsables[i].DesExcep
            });
        }
        return datosRet;
    } else {
        return {};
    }
};

module.exports.FncConsultarUtiliza = function(Modalidad, TipoOperacion, NSolicitud) {
    let InvocaRestService = require("../models/Invocarservicio");
    let metodo = 'GET'
    let url = 'https://ws-rest-creditoempresarial.azurewebsites.net/utilizaciones?TipoOperacion=' + TipoOperacion + '&NumeroSolicitud=' + NSolicitud + '&Modalidad=' + Modalidad;
    let respuestaSubsanarExcepciones = InvocaRestService.invocarServicio(metodo, url);
    if (respuestaSubsanarExcepciones.salida.codigoRespuesta == 0) {
        if (respuestaSubsanarExcepciones.salida.Utilizaciones.length == 1) {
            let ConsultaUtilizacionesSchema = {
                TipoIdentificacion: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_tipo_Identificacion,
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
            return ConsultaUtilizacionesSchema;
        } else {
            let ConsultaUtilizacionesSchema = {
                TipoIdentificacion: respuestaSubsanarExcepciones.salida.Utilizaciones.length,
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
            return ConsultaUtilizacionesSchema;
        }

    } else {
        return {};
    }
};