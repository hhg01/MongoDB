db.createCollection("discos",{validator:{$jsonSchema:{bsonType: "object",required:["nombre", "apellido_paterno","apellido_materno", "clave_cliente", ],properties:{datos_discos:{bsonType: "object",required: [ "nombre_disco:", "autor_disco","clave_disco"],properties: {nombre_disco: {bsonType: "string",description: "Debe de ser una cadena de caracteres y es requerido"},autor_disco: {bsonType: "string",description: "Debe de ser una cadena de caracteres y es requerido"	},clave_disco:{bsonType: "int",minimum:1,description: "Debe de ser entero con valor minimo de 1 y es requerido"},genero:{bsonType: "string",description: "Debe de ser una cadena de caracteres y es requerido"}}},tiendas_donde_se_vende:{bsonType: "array",items: {bsonType: "string"}},num_discos_disponibles:{bsonType: "int",minimum:1,description: "Debe de ser entero con valor minimo de 1 y es requerido"},precio_disco:{bsonType: "double",minimum:10,description: "Debe de ser entero con valor minimo de 1 y es requerido"}}}},validationLevel:"strict",validationAction:"warn"})