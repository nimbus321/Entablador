/* #########################################
   ##            Entablador.js            ##
   ######################################### */

var CAMBIOS_TABLAS = {};
var Entablador_tipos_edicion = ["inline", "modal"];
var EditedSVG = `<svg class="ml-1 mb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" width="15px" height="15px" viewBox="0 0 528.899 528.899" xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/></g></svg>`;
var NewSVG = `<svg class="mb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 512 512" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="scheduler" fill="currentColor" transform="translate(85.333333, 85.333333)"><path d="M170.666667,1.42108547e-14 C264.923264,-3.10380131e-15 341.333333,76.4100694 341.333333,170.666667 C341.333333,264.923264 264.923264,341.333333 170.666667,341.333333 C76.4100694,341.333333 2.57539587e-14,264.923264 1.42108547e-14,170.666667 C2.6677507e-15,76.4100694 76.4100694,3.15255107e-14 170.666667,1.42108547e-14 Z M192,85.3333333 L149.333333,85.3333333 L149.333333,149.333333 L85.3333333,149.333333 L85.3333333,192 L149.333333,191.999333 L149.333333,256 L192,256 L191.999333,191.999333 L256,192 L256,149.333333 L191.999333,149.333333 L192,85.3333333 Z" id="Combined-Shape"></path></g></g></svg>`;
var inputsValidos = ["text", "number", "date", "datetime-local", "checkbox", "time", "file", "image"];
var MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const ENTABLADOR = (function () {
  // Función para crear el objeto con métodos encadenables
  function id(ID) {
    if (typeof ID != "string" || ID == "") {
      console.error("No se ha especificado un ID");
      return;
    }
    if (document.getElementById(ID) == null) {
      console.error("'#" + ID + "' no existe");
      // console.error("No se ha encontrado el ID especificado (", ID, ")");
      return null;
    }
    //  if (!(window[ID] instanceof Element)) {
    //    console.error("No se ha encontrado el ID especificado (", ID, ")");
    //    return;
    //  }
    var ENT_TABLA = window[ID];
    if (ENT_TABLA instanceof Element) {
      console.error("Aún no has creado la tabla! '#" + ID + "' es solo un elemento HTML");
      return this;
    }
    const instancia = {
      id: ID,
      tipoEdicion(type) {
        // console.log(ID + " -- tipoEdicion: " + type);
        if (!Entablador_tipos_edicion.includes(type)) {
          console.error("Tipo de edición no válido. Tipos válidos:", Entablador_tipos_edicion);
          return this;
        }
        //set data-editable-type
        ENT_TABLA.table().node().setAttribute("data-editable-type", type);

        // ENT_TABLA.table().node().classList.toggle("editable", state);
        return this;
      },
      editable(boolean) {
        // console.log(ID + " -- editable: " + boolean);
        ENT_TABLA.table().node().classList.toggle("editable", boolean);
        return this;
      },
      guardar(boolean) {
        // console.log(ID + " -- guardar: " + boolean);
        return this;
      },
      eliminar() {
        // console.log(ID + " -- eliminar()");
        if (ENT_TABLA != null && !(ENT_TABLA instanceof Element)) {
          ENT_TABLA.destroy();
        }
        return this;
      },
      add(data) {
        // console.log(ID + " -- add: " + data);

        if (ENT_TABLA != null && typeof ENT_TABLA == "object" && !(ENT_TABLA instanceof Element)) {
          /*
            [1,2,3]
            [[1,2,3],[4,5,6]]
            {a:1,b:2,c:3}
            [{a:1,b:2,c:3},{a:4,b:5,c:6}]
          */
          if (Array.isArray(data)) {
            if (typeof data[0] == "object") {
              ENT_TABLA.rows.add(data).draw();
            } else if (data[0] != null) {
              ENT_TABLA.row.add(data).draw();
            }
          } else {
            ENT_TABLA.row.add(data).draw();
          }
        }
        return this;
      },
      draw() {
        console.log("Drawing table");
        if (ENT_TABLA != null && !(ENT_TABLA instanceof Element)) {
          ENT_TABLA.draw();
        }
        return this;
      },
      meta(meta) {
        // console.log(ID + " -- meta: " + meta);
        if (meta.key) {
          ENT_TABLA.key = meta.key;
        }
        if (meta.inputsTypes) {
          ENT_TABLA.inputsTypes = meta.inputsTypes;
        }
        return this;
      },
      editableStatus() {
        return ENT_TABLA.table().node().classList.contains("editable");
      },
    };
    return instancia;
  }
  // ########################################################################
  function crear(config) {
    //console.log("config:", config);
    //detect if it is an object (and not empty)
    if (typeof config != "object" || Object.keys(config).length === 0) {
      console.error("No se ha especificado una configuración correctamente");
      return;
    }
    if (!config.id || typeof config.id != "string" || config.id == "") {
      console.error("No se ha especificado un ID");
      return;
    }
    if (document.getElementById(config.id) == null) {
      console.error("No se ha encontrado el ID especificado (", config.id, ")");
      return;
    }
    if (!(window[config.id] instanceof Element)) {
      console.error("Ya existe una tabla con el ID especificado (", config.id, ")");
      return;
    }
    const instancia = {
      id: config.id,
    };
    // ########################################################################
    /*
              .crear({
                  ID: ID,
                  columns: [{}, {}, {}],
                  order: [1, "asc"],
                  columnDefs: [{}, {}],
                  autoWidth: false
              })
            */
    if (config.columnDefs) {
      columnDefs = config.columnDefs;
      var hayLocaleCompare = false;
      for (let i = 0; i < columnDefs.length; i++) {
        if (columnDefs.type == "locale-compare") {
          hayLocaleCompare = true;
          break;
        }
      }
      if (!hayLocaleCompare) {
        columnDefs.unshift({ type: "locale-compare", targets: "_all" });
      }
    } else {
      columnDefs = [{ type: "locale-compare", targets: "_all" }];
    }
    var opciones = {
      language: { url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json" },
      autoWidth: config.autoWidth || false,
      columnDefs: columnDefs,
      order: config.order || [[1, "asc"]],
    };
    if (config.columns) {
      opciones.columns = config.columns;
    }
    //console.log("opciones:", opciones);
    //console.log("config:", config);
    var NuevaTabla = new DataTable("#" + config.id, opciones);
    $("#" + config.id).on("preDraw.dt", function () {
      $("#" + config.id + '[data-toggle="tooltip"]').tooltip("hide");
    });
    $("#" + config.id).on("draw.dt", function () {
      $("#" + config.id + '[data-toggle="tooltip"]').tooltip();
    });
    window[config.id] = NuevaTabla;
    //set click event
    $("#" + config.id + " tbody").on("click", "tr td", function () {
      //detectar si la tabla tiene la class editable
      if ($(this).closest("table").hasClass("editable")) {
        // console.log("CLICK!!!");
        ENTABLADOR_EDITAR_TABLA(window[config.id], this);
      }
    });

    // ########################################################################
    //return instancia;
    return id(config.id);
  }
  return {
    id,
    crear,
  };
})();
function ENTABLADOR_EDITAR_TABLA(ENT_TABLA, el) {
  console.log("-----------------------------------------------");
  console.log("ENT_TABLA", ENT_TABLA);
  console.log("el", el);

  var TablaID = ENT_TABLA.table().node().id;
  var cell = $(el);
  var row = ENT_TABLA.row(el).data();
  console.log(ENT_TABLA.data().toArray());
  var indexCelda = ENT_TABLA.cell(el).index().column;
  var indexRow = ENT_TABLA.row(cell).index();
  var originalContent = ENT_TABLA.cell(el).data();
  var nombreColumna = ENT_TABLA.settings().init().aoColumns[indexCelda].data;
  var cellDataTables = ENT_TABLA.cell({ row: indexRow, column: indexCelda });

  // console.log("cell", cell);
  console.log("TablaID:", TablaID);
  console.log("row", row);
  console.log("indexCelda", indexCelda);
  console.log("indexRow", indexRow);
  console.log("originalContent", originalContent);
  console.log("nombreColumna", nombreColumna);
  console.log("cellDataTables", cellDataTables);

  console.log("-----------------------------------------------");
  if (!$(el).hasClass("editable")) {
    alert("Este campo no se puede editar.\nProbablemente porque se genera automáticamente.");
    return;
  }

  // --
  var type_edicion = $(el).closest("table").attr("data-editable-type");
  if (!Entablador_tipos_edicion.includes(type_edicion)) {
    console.warn("Tipo de edición ('" + type_edicion + "') no válido para la tabla '#" + TablaID + "'. Por defecto puesto '" + Entablador_tipos_edicion[0] + "'. Tipos válidos:", Entablador_tipos_edicion);
    type_edicion = Entablador_tipos_edicion[0];
  }
  // console.log(type_edicion);
  // --
  if (type_edicion == "inline") {
    var input = $(`<input type="text">`).val(originalContent);
    var type_input = "text";
    if (ENT_TABLA.inputsTypes && ENT_TABLA.inputsTypes[nombreColumna] && inputsValidos.includes(ENT_TABLA.inputsTypes[nombreColumna])) {
      type_input = ENT_TABLA.inputsTypes[nombreColumna];
      console.log("type_input", type_input);
      if (ENT_TABLA.inputsTypes[nombreColumna] == "checkbox") {
        type_input = "checkbox";
        input = $(`<select>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                  </select>`).val(originalContent);
      } else {
        input = $(`<input type="${type_input}">`).val(originalContent);
      }
    }
    cell.empty().html(input);

    // Evitar que el clic en el input borre su contenido
    input.on("click", function (e) {
      e.stopPropagation();
    });
    var Cancelled = false;

    // Enfocar en el input recién creado
    input.focus();
    input.on("keydown", function (e) {
      if (e.target.tagName === "INPUT") {
        if (e.key === "Enter") {
          input.blur();
        }
        if (e.key === "Escape") {
          console.log("Escape!!!");
          Cancelled = true;
          input.blur();
        }
      }
    });

    input.on("blur", function () {
      // get type of input from data-editable-type attribute

      //detectar si es un checkbox
      newContent = input.val().replace(/"/g, "'").replace(/`/g, "'").trim();
      //console.log("newContent: ",newContent, "originalContent: ",originalContent);

      if (Cancelled || newContent == originalContent) {
        cell.empty();
        cellDataTables.data(originalContent).draw(false);
        return;
      }
      cellDataTables.data(newContent).draw(false);

      cell.append(EditedSVG);
      cell.addClass("td-editado text-primary font-weight-bold");
      cell.attr("title", "Campo Editado");

      console.log("row", row);
      var id = row.id;
      if (!CAMBIOS_TABLAS[TablaID]) {
        CAMBIOS_TABLAS[TablaID] = {
          cambios: {},
          eliminados: [],
        };
      }
      if (!CAMBIOS_TABLAS[TablaID].cambios[id]) {
        CAMBIOS_TABLAS[TablaID].cambios[id] = {};
      }
      CAMBIOS_TABLAS[TablaID].cambios[id][nombreColumna] = newContent;

      console.log("CAMBIOS_TABLAS['" + TablaID + "']", CAMBIOS_TABLAS[TablaID]);
      row[nombreColumna] = newContent;
      //console.log("nombreColumna",nombreColumna)
      //console.log("row",row);
      ENT_TABLA.draw();
    });
  } // aqui termina el inline
}
function getNewID(tablaDatos) {
  // Obtiene el ID más grande de la tabla (si es que hay IDs numéricos, incluso si son strings)
  var idMayor = tablaDatos.reduce((max, obj) => {
    const idNumber = Number(obj.id);
    return !isNaN(idNumber) && idNumber > max ? idNumber : max;
  }, -Infinity);

  if (tablaDatos[idMayor] == null) {
    return idMayor + 1;
  } else {
    console.error("Error: No se pudo obtener un nuevo ID!");
  }
}
// Uso del objeto ENTABLADOR
/*
ENTABLADOR.crear({
  ID: "tabla1",
  columns: [{}, {}, {}],
  order: [1, "asc"],
  columnDefs: [{}, {}],
  autoWidth: false,
})
  .editable(true)
  .guardar(true)
  .eliminar(true)
  .add([{}])
  .draw()
  .meta({
    key: "id",
    inputsTypes: {
      nombre: "text",
      edad: "number",
      fechaNacimiento: "date",
    },
  });
*/
ENTABLADOR.crear({
  id: "TABLA",
  columns: [
    { data: "id", visible: true },
    { data: "nombre", class: "editable" },
    { data: "edad", class: "editable" },
    { data: "fechaNacimiento", class: "editable" },
    { data: "humano", class: "editable" },
  ],
  columnDefs: [
    {
      targets: 1, // Botones / Opciones
      render: function (data, type, row, meta) {
        // return `lel`;
        return data.toUpperCase();
      },
    },
    {
      targets: 3, // Botones / Opciones
      render: function (data, type, row, meta) {
        // return `lel`;
        //detect if it is a date
        if (data == null) {
          return data;
        }
        var fecha = new Date(data);
        return `${fecha.getDate()} ${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`;
      },
    },
    {
      targets: 4, // Botones / Opciones
      render: function (data, type, row, meta) {
        return data == "true" ? "Verdadero" : "Falso";
      },
    },
  ],
})
  .editable(true)
  .tipoEdicion("inline")
  .add([
    { id: 1, nombre: "Caliope", edad: 30, fechaNacimiento: "2000-12-10", humano: "false" },
    { id: 2, nombre: "Matthew", edad: 18, fechaNacimiento: "2010-11-23", humano: "true" },
    { id: 3, nombre: "Lucien's", edad: 35, fechaNacimiento: "1992-02-17", humano: "false" },
  ])
  .meta({
    key: "id",
    inputsTypes: {
      nombre: "text",
      edad: "number",
      fechaNacimiento: "date",
      humano: "checkbox",
    },
  });

/* TIPOS DE CAMPOS
  - text
  - number
  - checkbox
  - date
  - Datetime-local (fecha con hora)
  - time
  
  - file
  - image
*/
/*
var nombreIdentificador = "Nombre de la Persona";
var inputs = `<input type="text" placeholder="info">`;
var div = `
<div id="ENTABLADOR_MODAL" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Editar Datos | <span class="text-uppercase font-wight-bold text-primary">${nombreIdentificador}</span></h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">${inputs}</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-primary">Guardar Cambios</button>
    </div>
  </div>
</div>
</div>
`;
if ($(".modal.show").length > 0) {
  console.error("No se puede abrir un modal para editar la tabla si ya hay un modal abierto abierto.");
}
// var div = $('<div></div><h1>Input:</h1><input type="text">');
$("body").prepend(div);
$("#ENTABLADOR_MODAL").modal("show");
*/
