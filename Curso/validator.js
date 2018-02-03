
db.runCommand({collMod:"ueas", 
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "clave_uea", "nombre_uea", "grupos_trimestre_actual"],
         properties: {
            clave_uea: {
               bsonType: "string",
               description: "Debe de ser una cadena de caracteres y es requerido"
            },
            nombre_uea: {
               bsonType: "string",
               description: "Debe de ser una cadena de caracteres y es requerido"
            },
            grupos_trimestre_actual: {
               bsonType: "array",
               items:{
                  required:["grupo","horario","cupo","inscritos"],
                  bsonType:"object",
                  properties:{
                     grupo:{
                        bsonType:"string",
                        description: "Debe de ser una cadena de caracteres y es requerido"
                     },
                     horario:{
                        bsonType:"object",
                        required:["Lunes","Martes","Miercoles","Jueves","Viernes"],
                        properties:{
                           Lunes:{
                              bsonType:["bool","object"],
                              required:["salon","hora_inicio","hora_fin"],
                              properties:{
                                 salon:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_inicio:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_fin:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 }
                              }
                           },
                           Martes:{
                              bsonType:["bool","object"],
                              required:["salon","hora_inicio","hora_fin"],
                              properties:{
                                 salon:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_inicio:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_fin:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 }
                              }
                           },
                           Miercoles:{
                              bsonType:["bool","object"],
                              required:["salon","hora_inicio","hora_fin"],
                              properties:{
                                 salon:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_inicio:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_fin:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 }
                              }
                           },

                              bsonType:["bool","object"],
                              required:["salon","hora_inicio","hora_fin"],
                              properties:{
                                 salon:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_inicio:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_fin:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 }
                              }
                           },
                           Viernes:{
                              bsonType:["bool","object"],
                              required:["salon","hora_inicio","hora_fin"],
                              properties:{
                                 salon:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_inicio:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 },
                                 hora_fin:{
                                    bsonType:"string",
                                    description: "Debe de ser una cadena de caracteres y es requerido"
                                 }
                              }
                           }
                        }
                     },
                     cupo:{
                        bsonType:"int",
                        minimum:15,
                        maximum:60,
                        description: "Debe de ser una entero con valor minimo de 15, maximo de 60 y es requerido"
                     },
                     inscitos:{
                        bsonType:"int",
                        minimum:1,
                        description: "Debe de ser una entero con valor minimo de 1 es requerido"
                     }
                  }
               }
            }
         }
      }
   },
   validationLevel:"strict",
   validationAction:"error"
})