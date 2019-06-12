let ConsultaSubExepSchema = {
	FecIngresoEta:'20190560',
	TipoOperacion:'',
	Modalidad:'',
	NroSolicitud:'',
	RegionalCCIAL:'',
	TamEmpresa:'',
	TipoID:'',
	ID: '',
	NomCliente: '',
	ValorSolicitado: '',
	ResultadoEtapa: '',
	HoraReporteEtapa: '',
	CodExcep: '',
	DesExcep: '',
	LeaEmpresa: '',
	TipoAbogado: '',
	CodRegional: ''
};

let Consulta = module.exports = ConsultaSubExepSchema;

module.exports.FncConsultarExcep = function(ID){
	Consulta.FecIngresoEta = '20190531';
	Consulta.HoraReporteEtapa = '16:31:30';
	Consulta.TipoOperacion = 'Cupo';
	Consulta.Modalidad = 'Sobregiro';
	Consulta.NroSolicitud = '545000031190003';
	Consulta.RegionalCCIAL = '006';
	Consulta.TamEmpresa = 'Corporativa II';
	Consulta.TipoID = 'Nit';
	Consulta.ID = ID;
	Consulta.NomCliente = 'Empresa1';
	Consulta.ValorSolicitado = '20,000,003';
	Consulta.DesExcep = '1 - Cupo Vencido';
	let datosRet = {
		consulta:[{
			FecIngresoEta: Consulta.FecIngresoEta,
			HoraReporteEtapa: Consulta.HoraReporteEtapa,
			TipoOperacion: Consulta.TipoOperacion,
			Modalidad: Consulta.Modalidad,
			NroSolicitud: Consulta.NroSolicitud,
			RegionalCCIAL: Consulta.RegionalCCIAL,
			TamEmpresa: Consulta.TamEmpresa,
			TipoID: Consulta.TipoID,
			ID: Consulta.ID,
			NomCliente: Consulta.NomCliente,
			ValorSolicitado: Consulta.ValorSolicitado,
			DesExcep: Consulta.DesExcep
		}, {
			FecIngresoEta: Consulta.FecIngresoEta,
			HoraReporteEtapa: Consulta.HoraReporteEtapa,
			TipoOperacion: Consulta.TipoOperacion,
			Modalidad: Consulta.Modalidad,
			NroSolicitud: Consulta.NroSolicitud,
			RegionalCCIAL: Consulta.RegionalCCIAL,
			TamEmpresa: Consulta.TamEmpresa,
			TipoID: Consulta.TipoID,
			ID: Consulta.ID,
			NomCliente: Consulta.NomCliente,
			ValorSolicitado: Consulta.ValorSolicitado,
			DesExcep: Consulta.DesExcep	
		}]

	};
	return datosRet;	
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
	AmortI:'',
	PerGraI:'',
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
	ConsCodExcep:[{
		Descripcion: 'Cupo vencido',
		Estado: 'OK'
	},{
		Descripcion: 'Extracupo por grupo',
		Estado: 'OK'
	},{
		Descripcion: 'Extracupo por empresa',
		Estado: 'OK'
	},{
		Descripcion: 'Extracupo por cupo',
		Estado: 'OK'
	},{
		Descripcion: 'Extracupo por línea',
		Estado: 'OK'
	},{
		Descripcion: 'Período de gracia capital solicitado > período de gracia aprobado',
		Estado: 'OK'
	},{
		Descripcion: 'Período de gracia interés solicitado > período de gracia aprobado',
		Estado: 'OK'
	},{
		Descripcion: 'Plazo solicitado > plazo aprobado',
		Estado: 'OK'
	},{
		Descripcion: 'Forma pago capital > forma de pago aprobada',
		Estado: 'OK'
	},{
		Descripcion: 'Forma pago interés > forma de pago aprobada',
		Estado: 'OK'
	},{
		Descripcion: 'Tasa solicitada < tasa política',
		Estado: 'OK'
	}	
	]
};
//let ConsultaUtiliza = module.exports = ConsultaUtilizacionesSchema;
module.exports.FncConsultarUtiliza = function(Modalidad,TipoOperacion,NSolicitud){
	ConsultaUtilizacionesSchema.NumeroSolicitud = NSolicitud;
	ConsultaUtilizacionesSchema.TipoOperacion = TipoOperacion;
	ConsultaUtilizacionesSchema.Modalidad = Modalidad;
	
	return ConsultaUtilizacionesSchema;	
};