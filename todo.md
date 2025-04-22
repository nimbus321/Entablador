# A TENER EN CUENTA

- Blocked aria-hidden on an element because its descendant retained focus. The focus must not be hidden from assistive technology users. Avoid using aria-hidden on a focused element or its ancestor. Consider using the inert attribute instead, which will also prevent focus. For more details, see the aria-hidden section of the WAI-ARIA specification at https://w3c.github.io/aria/#aria-hidden.
  Element with focus: div
  Ancestor with aria-hidden: <div> etc. esto se puede reproducir al hacer click a editar la tabla y MUY rapidamente darle click al dev tools y desp cerrar el modal dando click fuera de modal.

- OJO!!! CREO QUE el error que me tomó tanto problema la última vez fue por quitar 'autoWidth: config.autoWidth || false'. Considerar esto. es lo mismo quitarlo que ponerlo autoWidth: true. INVESTIGAR MÁS ESTO

# IDEAS

- en editType inline: si hover una img y paso hover al btn de eliminar, se quita el efecto de opaco en la img (bien), pero lo mismo en svg no funciona, ahí se queda el efecto de opaco a pesar que esta haciendo el hover en el btn y no en el svg. hacer que se quite el efecto (como en img's)
- hacer que al querer recuperar los cambios, verifique si hay eliminados, y si hay, eliminar de cambios y de filesUploads.
- order ENTABLADOR-ORDER-NORMAL-SPACES, crear uno que sea al revéz
- crear una comparación con la tabla (o cambios, pensar mejor esto) inicial para confirmar no dar datos vacios a firestore
- quitar los svg (ponerlos con ::after)
- volver a checar si puedo actualizar el codigo de usar 'var columnKeyIndex = NuevaTabla.settings()' para usar 'NuevaTabla.column("ENTABLADOR-btn:name")'. MUCHO CUIDADO con esto que fue lo que me rompió el codigo la última vez. hacerlo en 1 solo commit.

# IDEAS MAS PRÓXIMAS

# TO-DO

- .subirArchivoURL() <- cheacar porque creo que no lo he quitado aún

# TRABAJANDO EN ELLO

- adaptar .uploadData() para habilitar subir files desde ahí. tal vez pasar directamente el File object y dejar al usuario hacer todo el proceso manualmente para generar el File object. >>>>>>>>>>>> ya pasé FileList a uploadData(), pero falta que lo pueda guardar en cambios y que haga un :blob para ponerlo en el DOM.

# ULTIMOS HECHOS

- crear un method para obtener los cambios (para mandarlo al server)|DONE .getChanges()|
- cambios en los css selectors de los svg's y adaptarlos.
- al eliminar una row, no se borra el file de filesUploads. |delear con esto al guardarlo en el server|
- el editar un campo que se subió con uploadData() (y por lo tanto esta verde), si se edita cambia a azul. hacer que se quede en verde.
- en modal, en los archivos svg, el btn de eliminar está ligeramente más abajo que en las img's |FIXED (pero feo la vrd)|
- cuando se establece un defaultContent que no sea "", y se agrega con uploadData() un row, la columna con el defaultContent diferente se pondrá con el svg de :after (verde) que es un nuevo dato. crear un sistema para no ponerlo si es solo defaultContent. SOLUCIONADO pero no estoy seguro si es el desired behavior, por el momento puse para que se quede el svg.
- considerar que al crear la tabla, puede que haya un title en el th de la tabla, y actualmente no se tiene en cuenta como title así que se reemplaza con data. hay que detectarlo. DONE
- asegurar que .uploadData() funcione correctamente

# FIXED - ON WATCH

- .\_.extractNumberFromString() reestructurado para habilitar decimales y negativos.
- terminado ENTABLADOR-ORDER-NORMAL-SPACES
- terminado ENTABLADOR-ORDER-SPACES-ON-BOTTOM

# DONE

- +config.replaceName al crear tabla para poder evitar que renombre 'name'
- checar que se generen bien automaticamente los titles, etc en base a "data" (de columns al crear tabla)
- crear this.Modal_Editor_Obj_files_deletedURL y adaptarlo!! - actualmente estoy en guardarCambiosModal() pero falta establecer Modal_Editor_Obj_files_deletedURL cuando se eliminan los files en el modal (es un array).
- arreglar y adaptar el subir archivos cuando es por modal. || CONSIDERAR QUE HAY QUE GUARDAR LAS UBICACIONES DE LOS FILES Y SOLO SI SE HACE CLICK EL BTN DEL MODAL DE GUARDAR ES QUE SE SUBE A CAMBIOS
- crear manera nativa y normal para que NO se suban los archivos a firestore desde el cliente, si no que se creen "blob:" files para el html y que SOLO cundo se mande todos los cambios guardados al servidor, ahí es cuando se guardarán en firestore (mandarlos adjuntos). Beneficios: no archivos de más en firestore sin que sean referenciados. mucho mejor en general.
- QUITAR LA SIMPLE EXISTENCIA DE DUMMY FILES!! todo el punto de tenerlo era para no tener que subir a firestore para testear, pero al cambiarlo por URL.createObjectURL(files[i]) ya no hace falta porque nunca se sube a firestore primero.. vaya tontería que hice al continuar con dummyfiles.

- asegurar que cuando edita con modal (o incluso con inline), si se pone "no especificado" que refleje el cambio correctamente en CAMBIOS. no estoy seguro si es un error o no, tengo que testear. (creo que sí está bien)
- +transition cuando se cambia de tamaño el modal al editar

- arreglando errores al editar con modal cuando inputTypes no existe (ya?)

- REESTRUCTURANDO TODO DESDE 0 - LIMPIAR TODO
