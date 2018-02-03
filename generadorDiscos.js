var autores = new Array("autor_1","autor_2","autor_3","autor_4","autor_5","autor_6","autor_7","autor_8");
var generos = new Array("genero_1","genero_2","genero_3","genero_4","genero_5","genero_6","genero_7","genero_8");

var k=0;
while(k <25){
	for (var j = 0; j < 40; j++) {
		var precio = Math.floor(Math.random()*150)+50;
		var centavos = Math.floor(Math.random()*80)+20;
		if (j>40){
			j=0;
		} else {
			printjson({'datos_discos': datosDiscos(j),
					'tiendas_donde_se_vende': arregloTiendas(),
					'num_discos_disponibles': Math.floor(Math.random()*101)+1,
					'precio_disco': precio+'.'+centavos});
		}
	}
	k++;
}

function datosDiscos(j){
	var arregloDatosDiscos = ({'nombre_disco': "Disco_"+j,
						'autor_disco': autores[Math.floor(Math.random()*autores.length)],
						'clave_disco': "ABC_"+j,
						'genero': generos[Math.floor(Math.random()*generos.length)]});
	return arregloDatosDiscos;
}

function arregloTiendas() {
	var tiendas = new Array("Mixup","La Roma Records","Amazon","AudioLight","Música en Vinyl","Apple Music");
	var tiendas2 = [];
	for (var i = 0; i < 3; i++) {
		tiendas2.push(tiendas[Math.floor(Math.random()*tiendas.length)]);
	}
	return tiendas2;
}