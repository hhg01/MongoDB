var ciudades = new Array("Azcapotzalco","Coyoacan","Cuajimalpa","Iztapalapa","Iztacalco","Tlahuac","Xochimilco");
var pago = new Array("true","false");
var bronce = "bronce";
var plata = "plata";
var oro = "oro";
var platinum = "platinum";

for (var j = 0; j < 1000; j++) {
	var cantidadComprados = Math.floor(Math.random() * 600)+1;

	if (cantidadComprados<24) {		
		printjson({'nombre': "Nombre_"+j,
			'apellido_paterno': "ApellidoPaterno_"+j,
			'apellido_materno': "ApellidoMaterno_"+j,
			'clave_cliente': Math.floor(Math.random()*100000)+100,
			'discos_comprados': arregloDiscosComprados(10),
			'cantidad_discos_comprados':cantidadComprados,
			'tipo_de_cliente': bronce});
	} else {
		if (cantidadComprados>25 && cantidadComprados<70) {			
			printjson({'nombre': "Nombre_"+j,
			'apellido_paterno': "ApellidoPaterno_"+j,
			'apellido_materno': "ApellidoMaterno_"+j,
			'clave_cliente': Math.floor(Math.random()*100000)+100,
			'discos_comprados': arregloDiscosComprados(10),
			'cantidad_discos_comprados':cantidadComprados,
			'tipo_de_cliente': plata});
		} else {
			if (cantidadComprados>71 && cantidadComprados<150) {				
				printjson({'nombre': "Nombre_"+j,
			'apellido_paterno': "ApellidoPaterno_"+j,
			'apellido_materno': "ApellidoMaterno_"+j,
			'clave_cliente': Math.floor(Math.random()*100000)+100,
			'discos_comprados': arregloDiscosComprados(10),
			'cantidad_discos_comprados':cantidadComprados,
			'tipo_de_cliente': oro});
			} else {				
				printjson({'nombre': "Nombre_"+j,
			'apellido_paterno': "ApellidoPaterno_"+j,
			'apellido_materno': "ApellidoMaterno_"+j,
			'clave_cliente': Math.floor(Math.random()*100000)+100,
			'discos_comprados': arregloDiscosComprados(10),
			'cantidad_discos_comprados':cantidadComprados,
			'tipo_de_cliente': platinum});
			}
		}
	}
}

function arregloDiscosComprados(numero){
	var arregloMisDiscos = new Array();
	for (var i = 0; i < numero; i++) {

		arregloMisDiscos.push({'clave_disco': Math.floor(Math.random()*500)+1,
			'fecha_de_compra': randomDate(new Date(2012, 0, 1), new Date()),
			'pago_efectivo': pago[Math.floor(Math.random()*pago.length)],
			'ciudad_de_compra': ciudades[Math.floor(Math.random()*ciudades.length)]});
	}
	return arregloMisDiscos;
}

function randomDate(start, end) {
  	var today = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	return today;
}
