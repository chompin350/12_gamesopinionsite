const fechaactual = () => {
    var nuestraFecha = new Date();
    var dia = ('0' + nuestraFecha.getDate()).slice(-2).toString();
    var mes = ('0' + (nuestraFecha.getMonth()+1)).slice(-2).toString();
    var ano = nuestraFecha.getFullYear().toString()
    var fecha = dia + '-'+ mes + '-' + ano;    
    return fecha;
}

export default { fechaactual };