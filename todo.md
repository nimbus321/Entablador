# IDEAS

- meter más opciones de campos, por ejemplo (multiple opcion(dando las opciones)), (lista)
- cosa a tener en cuenta: cuando abro modal y hago focus fuera de la pantalla (ej;dev tools) y le doy click dentro del modal (ej; btn subir archivos) sube la pantalla a donde se supone que se hace focus.

- pensar en todas las cosas que ya son obligatorias, ej; titles.
- ojo, estoy basandome en que hay un 'title' declarado en las columnas al crear la tabla. es un requirement? (lo uso al editar con modal (y antes al crerar la tabla))
- en un futuro MUY lejano, hacer para que .addChanges() funcione con arrays.
- en getNewID() poner una clausula para verificar si el id que esta a punto de poner existe, y si si existe ponerlo recursivo o algo similar
- poner importador de excel?
- cambiar los nombres methods() a ingles en lo posible
- verificar si todas las .class tienen prefijo ENTABLADOR- o similar, tambien posiblemente renombrar
- al subir un archivo, poner como previsualización, sin subirlo primero a firestore.

- en modal, en los archivos svg, el btn de eliminar está ligeramente más abajo que en las img's

# IDEAS MAS PRÓXIMAS

- considerar poner un div con cursor:auto entre la foto y el btn de eliminar on hover de type file
- crear .edited() que devuelva si la tabla fue editada o no.
- sanitanizar el nombre de la tabla misma (ej; 'TABLA')
- pensar como implementar campos obligatorios
- considerar el order de la tabla, tal vez poner un span invisible con los valores reales ordenables.

# TO-DO

# TRABAJANDO EN ELLO

- CREAR OPCION: al mostrar (no editar) un campo textarea que ocurra;
  a) 'modal'. se abra un modal
  b) 'buttons'. btn's "click ver más", "click ver menos"
  d) 'none|see all'. se muestre todo sin hacer ningun cambio

# ULTIMOS HECHOS

- FIX. cuando se elimina row, el texto "ver menos" se ponía en rojo
- expandir cuando se da click a "click para ver más"
- añadir 'textarea' a los inputs validos. y hacerlo compatible.. | incline y modal ya estan pero falta el lado de mostrarlo al no-edicion.

# FIXED - ON WATCH

# DONE

- editado sutilemente parseBoolean()
- en tipo edicion 'inline', en checkbox, falta poner una opcion de 'no especificado'
- crear parseBoolean("string"||"boolean", value) y perfeccionarlo. tambien ya implementado en todos los lugares
- fix'ear los problemas con los checkbox's
- type_edition modal
- btn guardar modal guardarCambiosModal()
- /DiseñoModal.jpg
- REDISEÑAR como funciona todo el proceso del modal. - EN PROCESO... ( YA LISTO? )
- btn Cambiar tamaño en modal
- on keyup cambiado por input en key_sec del modal
- si esta opcion de modal y hay abierto ya uno, lo hara inline.
- .modalLarge()
- TABLA.ENTABLADOR.COLUMNS = [["nombreRealColumna", "titleColumna"], ...] al crear la tabla.
- muchos BUGS muy pesados. no hay energía para explicarlos.
- btn subir archivos en modal
- btn eliminar file modal
- FIX, ImgOnError() en modal duplica svg, y al hacer click en btn eliminar abria tambien el anchor.
- SUPER-IDEA - en vez de tartar de detectar si un archivo es una foto o no para poner el icono de pdf o un img, mejor poner un onerror event en el html de img y si da error ponerlo como icono !!!!
- al eliminar una row completa, verificar como hacer con los CAMBIOS
- al hcer click en el campo de archivos con tipo modal, no se abre el modal. (click en el campo pero no en foto obviamente)
- tal vez poner this.onerror=null; en el onerror en img's
- RESET ALL THE INPUTS
- cuando esta en type modal y haces click en una foto en la columna de files, evitar que se abra el modal.
- .inputsTypes .key .secondary_key meterlo en TABLA.ENTABLADOR en vez de la TABLA directamente - falta solo .inputsTypes
- mejorar css para que sea display:none el label de subir archivos y el btn de eliminarlos
- creado npm run minify-css
- hacer botones de eliminar como primera columna cuando está la opcion de .editar
- oscurecer un poco la foto de files on hover
- adaptado para que funcione bien la columna con type file cuando el tipo de edicion es inline
- mandatoryFields hecho para que funcione con multiples tablas
- tal vez vale la pena simplificar y evitar redundancias y hacer var ent = ENTABLADOR; en lo posible. no exactamente asi..
- dejar que el usuario agregue campos - uploadData(data) - avances muy grandes !
- crear un meta para establecer que columnas son obligatorias para el usuario rellenar. - creado .mandatoryFields()
- hacer una function para sanitizar inputs en especial text - listo .sanitize()
- al agregar datos con uploadData() verificar si y existe la ID en otro row. OBLIGARTORIO! por la manera en que funciona firestore
- al eliminar la tabla con .eliminar() hacer que se quite la clase .editable y los event listener, etc (checar los event listener !)
- hecho de nuevo getNewID()
- svg de agregar file se oculta si la tabla no es editable
- +FIRESTORE_TO_TABLE() +TABLE_TO_FIRESTORE()
- metido todas las functions dentro de ENTABLADOR.\_.
- al declarar en inputsTypes un input 'file' hacer que se renderice la automaticamente en columnDefs.
- error al tratar de eliminar ID:2 columna: Archivos. - habilitar poder poner de datos de file strings (y no solo arrays)
- .meta() en desuso. ahora se establece en el mismo config de .crear()
- arreglar el duplicado de svg file. quitar redundancia ('rget="\_blank" class="ENTABLADOR-tabla-anchor" style="cursor:zoom-in;margin-right:5px;">${FileSVG}<div class="ENTABLADOR-btn-eliminar" onclick="ENTABLADOR_elimina')
- hacer que al eliminar los datos se renderize correctamente. en especial date - Parece solucionado? no recuerdo arreglarlo
- limpiar los nombres de las variables (y functions) para meterlas en la variable global ENTABLADOR
- poder eliminar los archivos haciendo click mientras tengo precionado shift - cambiado a :hover
