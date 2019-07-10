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
    let ConsultaUtilizacionesSchema = {
        codigoRespuesta: respuestaSubsanarExcepciones.salida.codigoRespuesta,
        respuesta: respuestaSubsanarExcepciones.salida.respuesta
    }
    if (respuestaSubsanarExcepciones.salida.codigoRespuesta == 0) {
        if (respuestaSubsanarExcepciones.salida.Utilizaciones.length == 1) {
            ConsultaUtilizacionesSchema = {
                TipoIdentificacion: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_tipo_Identificacion,
                NumeroIdentificacion: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Nro_Identificacion,
                nombre: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl52_Nom_Empresa,
                tamEmpresa: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl52_Tamano_Empresa,
                NumeroSolicitud: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Ki60_Numero_Credito_Tot,
                TipoOperacion: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Tipo_Operacion,
                Modalidad: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_modalidad,
                Monto: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Monto,
                AmortK: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Amortizacion,
                PerGraK: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Gracia_Capital,
                Plazo: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Plazo,
                AmortI: '0', //falto migrar el dato
                PerGraI: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Gracia_Intereses,
                Tasa: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Tasa_Base,
                NPreExecGAP: '0', //falto migrar el dato
                CodCarte: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Cod_Cartera,
                Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].Kl60_Estado,
                ConvFactoring: respuestaSubsanarExcepciones.salida.Utilizaciones[0].KL60_SERIAL_CONVENIO_FACT,
                SerialCartaIntencion: respuestaSubsanarExcepciones.salida.Utilizaciones[0].SERIAL_CARTA_INTEN,
                SerialCartaInstruccion: respuestaSubsanarExcepciones.salida.Utilizaciones[0].SERIAL_CARTA_INTRUC,
                SerialPagare: respuestaSubsanarExcepciones.salida.Utilizaciones[0].SERIAL_PAGARE,
                SerialSegVida: respuestaSubsanarExcepciones.salida.Utilizaciones[0].SERIAL_SEG_VIDA,
                SerialContrato: respuestaSubsanarExcepciones.salida.Utilizaciones[0].SERIAL_CONTRATO_CCTE,
                SerialFNG: respuestaSubsanarExcepciones.salida.Utilizaciones[0].SERIAL_ACEPTACION_FNG,
                ReservaFNG: respuestaSubsanarExcepciones.salida.Utilizaciones[0].RESERVA_FNG,
                ConsCodExcep: [{
                    Descripcion: 'Cupo vencido',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_VENCIMIENTO
                }, {
                    Descripcion: 'Extracupo por grupo',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_LEA_GRUPO
                }, {
                    Descripcion: 'Extracupo por empresa',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_LEA_EMPRESA
                }, {
                    Descripcion: 'Extracupo por cupo',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_LEA_CUPO
                }, {
                    Descripcion: 'Extracupo por línea',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_LEA_LINEA
                }, {
                    Descripcion: 'Período de gracia capital solicitado > período de gracia aprobado',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_GRACIA_K
                }, {
                    Descripcion: 'Período de gracia interés solicitado > período de gracia aprobado',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_GRACIA_I
                }, {
                    Descripcion: 'Plazo solicitado > plazo aprobado',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_PLAZO
                }, {
                    Descripcion: 'Forma pago capital > forma de pago aprobada',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_AMORTIZ_K1
                }, {
                    Descripcion: 'Forma pago interés > forma de pago aprobada',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_AMORTIZ_I1
                }, {
                    Descripcion: 'Tasa solicitada < tasa política',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_TASA
                }, {
                    Descripcion: 'Garantía diferente a hipoteca incompleta o inconsistente',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_OTRAS_GARANT
                }, {
                    Descripcion: 'Pagaré mal diligenciado o incompleto',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_PAGARE
                }, {
                    Descripcion: 'Forma pago capital > forma pago aprobada',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_AMORTIZ_K2
                }, {
                    Descripcion: 'Forma pago interés > forma pago aprobada',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXCEP_AMORTIZ_I2
                }, {
                    Descripcion: 'Garantía hipotecaria con boleta pendiente de registro',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_GARANT_HIPOT
                }, {
                    Descripcion: 'Falta póliza seguro incendio y terremoto',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_SEGURO_IT
                }, {
                    Descripcion: 'Falta póliza seguro vida',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_SEGURO_VIDA
                }, {
                    Descripcion: 'Vigencia de la sociedad < fecha corte + plazo',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_VIGENCIA_SOC
                }, {
                    Descripcion: 'Falta acta de junta o se exceden las facultades',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_ACTA_JUNTAS
                }, {
                    Descripcion: 'Carta de instrucciones mal diligenciada o incompleta',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_CARTA_INSTRUC
                }, {
                    Descripcion: 'Falta documento especial',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_DOCUMENTO_ESP
                }, {
                    Descripcion: 'Falta estatutos',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_ESTATUTOS
                }, {
                    Descripcion: 'Falta certificado vigencia sobre acta de junta',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_VIGENCIA_ACTA
                }, {
                    Descripcion: 'Carta de intención mal diligenciada o incompleta',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_CARTA_INTENCION
                }, {
                    Descripcion: 'CERL vencido (mas de 40 días de expedido)',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_VTO_CERL
                }, {
                    Descripcion: 'Cliente con Excepciones pendientes por subsanar',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_CARTA_INST_CODEU
                }, {
                    Descripcion: 'Visto Bueno Comercial por Montos Inferiores',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_28
                }, {
                    Descripcion: 'Visto Bueno Comercial por Montos Superiores',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_29
                }, {
                    Descripcion: 'Visto Bueno Credito',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_30
                }, {
                    Descripcion: 'Contrato y/o Convenio mal diligenciado o incompleto',
                    Estado: respuestaSubsanarExcepciones.salida.Utilizaciones[0].IND_EXC_31
                }, ]
            };
        }

    }
    return ConsultaUtilizacionesSchema;
};