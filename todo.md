# A TENER EN CUENTA

- OJO!!! CREO QUE el error que me tomó tanto problema la última vez fue por quitar 'autoWidth: config.autoWidth || false'. Considerar esto. es lo mismo quitarlo que ponerlo autoWidth: true. INVESTIGAR MÁS ESTO

# IDEAS

- crear una comparación con la tabla (o cambios, pensar mejor esto) inicial para confirmar no dar datos vacios a firestore
- quitar los svg (ponerlos con ::after)
- volver a checar si puedo actualizar el codigo de usar 'var columnKeyIndex = NuevaTabla.settings()' para usar 'NuevaTabla.column("ENTABLADOR-btn:name")'. MUCHO CUIDADO con esto que fue lo que me rompió el codigo la última vez. hacerlo en 1 solo commit.

# IDEAS MAS PRÓXIMAS

# TO-DO

- order ENTABLADOR-ORDER-NORMAL-SPACES, crear uno que sea al revéz

# TRABAJANDO EN ELLO

# ULTIMOS HECHOS

- QUITAR LA SIMPLE EXISTENCIA DE DUMMY FILES!! todo el punto de tenerlo era para no tener que subir a firestore para testear, pero al cambiarlo por URL.createObjectURL(files[i]) ya no hace falta porque nunca se sube a firestore primero.. vaya tontería que hice al continuar con dummyfiles.

# FIXED - ON WATCH

- crear manera nativa y normal para que NO se suban los archivos a firestore desde el cliente, si no que se creen "blob:" files para el html y que SOLO cundo se mande todos los cambios guardados al servidor, ahí es cuando se guardarán en firestore (mandarlos adjuntos). Beneficios: no archivos de más en firestore sin que sean referenciados. mucho mejor en general.
- .uploadDummyFiles()
- .\_.extractNumberFromString() reestructurado para habilitar decimales y negativos.
- terminado ENTABLADOR-ORDER-NORMAL-SPACES
- terminado ENTABLADOR-ORDER-SPACES-ON-BOTTOM

# DONE

- asegurar que cuando edita con modal (o incluso con inline), si se pone "no especificado" que refleje el cambio correctamente en CAMBIOS. no estoy seguro si es un error o no, tengo que testear. (creo que sí está bien)
- +transition cuando se cambia de tamaño el modal al editar

- arreglando errores al editar con modal cuando inputTypes no existe (ya?)

- REESTRUCTURANDO TODO DESDE 0 - LIMPIAR TODO
