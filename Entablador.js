/* #########################################
   ##            Entablador.js            ##
   ######################################### */

var EditedSVG = `<svg class="ml-1 mb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" width="15px" height="15px" viewBox="0 0 528.899 528.899" xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/></g></svg>`;
var NewSVG = `<svg xmlns="http://www.w3.org/2000/svg" title="Agregar Archivo" style="color: var(--success); cursor:pointer;" width="15px" height="20px" viewBox="4 2 15 20" fill="currentColor"><path d="M10 15H14M12 13V17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
var FileSVG = `<svg class="ENTABLADOR-tabla-file" xmlns="http://www.w3.org/2000/svg" width="20px" height="22px" viewBox="4 2 16 20" fill="currentColor"><path d="M9 15L11 17L15 13M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

// var AddFileSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="currentColor"<path d="M10 15H14M12 13V17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
var AddFileSVG = `<svg xmlns="http://www.w3.org/2000/svg" title="Agregar Archivo" style="color: var(--success); cursor:pointer;" width="15px" height="20px" viewBox="4 2 16 20" fill="currentColor"><path d="M10 15H14M12 13V17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
var RemoveFileSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="mr-1" style="color: var(--danger); cursor:pointer;" width="15px" height="20px" viewBox="4 2 16 20" fill="currentColor" viewBox="0 0 24 24" fill="none"><path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
var inputsValidos = ["text", "number", "date", "datetime-local", "checkbox", "time", "file"];
var MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
var ENTABLADOR_LabelClick = null;

const ENTABLADOR = (function () {
  // Función para crear el objeto con métodos encadenables
  function id(ID) {
    if (typeof ID != "string") {
      console.error("El ID debe ser un string");
      return;
    }
    if (ID == "") {
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
        if (!ENTABLADOR._.editTypes.includes(type)) {
          console.error("Tipo de edición no válido. Tipos válidos:", ENTABLADOR._.editTypes);
          return this;
        }
        //set data-editable-type
        ENT_TABLA.table().node().setAttribute("data-editable-type", type);

        // ENT_TABLA.table().node().classList.toggle("editable", state);
        return this;
      },
      editable(boolean) {
        if (typeof boolean == "undefined") {
          return ENT_TABLA.table().node().classList.contains("editable");
        }
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
      subirArchivoURL(URL) {
        console.log("subirArchivoURL: ", URL);
        ENT_TABLA.subirArchivoURL = URL;
        return this;
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
    //prepend input file to table
    var fileInput = $('<input type="file" id="ENTABLADOR_FILE_UPLOADER" style="display:none;">');
    $("#" + config.id).prepend(fileInput);
    fileInput.on("change", function (event) {
      //detect from which cell the file was uploaded
      console.log(ENTABLADOR_LabelClick);
      var rowIndex = ENTABLADOR_LabelClick.row;
      var columnIndex = ENTABLADOR_LabelClick.column;
      var cell = NuevaTabla.cell({ row: rowIndex, column: columnIndex });

      $(cell.node()).find(".uploading").show();
      $(cell.node()).find("[for=ENTABLADOR_FILE_UPLOADER]").hide();

      var files = event.target.files;
      console.log("subiendo..", "(" + files[0].name + " +?)", files);
      /*
      $.post(ENT_TABLA.subirArchivoURL, { file: files }, function (data) {
        console.log("subido", data);
      });
      */
      // console.log(files);
      $.post("https://dummyjson.com/products/add", { title: "link.jpg", files: "TENGO QUE CHECAR ESTO EN EL OTRO PROYECTO" }, function (newContent) {
        var newContent = ["https://dummyimage.com/99"];
        console.log("subido", newContent);
        $(cell.node()).find(".uploading").hide();
        $(cell.node()).find("[for=ENTABLADOR_FILE_UPLOADER]").show();

        var cellDataTables = NuevaTabla.cell({ row: rowIndex, column: columnIndex });
        var oldData = cellDataTables.data();

        console.log("newContent: ", newContent);
        console.log("oldData: ", oldData);

        cellDataTables.data([...oldData, ...newContent]).draw(false);

        ENTABLADOR_add_changes(NuevaTabla, rowIndex, columnIndex, newContent);
      });
      event.target.value = "";
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
  var _ = {
    /* VARIABLE GLOBAL DE LA LIBRERÍA */
    CAMBIOS_TABLAS: {},
    editTypes: ["inline", "modal"],
  };
  return {
    id,
    crear,
    _,
  };
})();
function ENTABLADOR_EDITAR_TABLA(ENT_TABLA, el) {
  var debug = false;
  if (debug) {
    console.log("ENT_TABLA", ENT_TABLA);
    console.log("el", el);
  }

  var TablaID = ENT_TABLA.table().node().id;
  var cell = $(el);
  var row = ENT_TABLA.row(el).data();
  var indexCelda = ENT_TABLA.cell(el).index().column;
  var indexRow = ENT_TABLA.row(cell).index();
  var originalContent = ENT_TABLA.cell(el).data();
  var nombreColumna = ENT_TABLA.settings().init().aoColumns[indexCelda].data;
  var cellDataTables = ENT_TABLA.cell({ row: indexRow, column: indexCelda });

  if (debug) {
    console.log("-----------------------------------------------");
    console.log("cell", cell);
    console.log("TablaID:", TablaID);
    console.log("row", row);
    console.log("indexCelda", indexCelda);
    console.log("indexRow", indexRow);
    console.log("originalContent", originalContent);
    console.log("nombreColumna", nombreColumna);
    console.log("cellDataTables", cellDataTables);
    console.log(".data().toArray():", ENT_TABLA.data().toArray());
    console.log("-----------------------------------------------");
  }

  if (!$(el).hasClass("editable")) {
    alert("Este campo no se puede editar.\nProbablemente porque se genera automáticamente.");
    return;
  }

  // --
  var type_edicion = $(el).closest("table").attr("data-editable-type");
  if (!ENTABLADOR._.editTypes.includes(type_edicion)) {
    console.warn("Tipo de edición ('" + type_edicion + "') no válido para la tabla '#" + TablaID + "'. Por defecto puesto '" + ENTABLADOR._.editTypes[0] + "'. Tipos válidos:", ENTABLADOR._.editTypes);
    type_edicion = ENTABLADOR._.editTypes[0];
  }
  // console.log(type_edicion);
  // --
  if (type_edicion == "inline") {
    var input = $(`<input type="text">`).val(originalContent);
    var type_input = "text";
    if (ENT_TABLA.inputsTypes && ENT_TABLA.inputsTypes[nombreColumna] && inputsValidos.includes(ENT_TABLA.inputsTypes[nombreColumna])) {
      type_input = ENT_TABLA.inputsTypes[nombreColumna];
      // console.log("type_input", type_input);
      if (type_input == "file" || type_input == "image") {
        return;
      }
      if (type_input == "checkbox") {
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
      console.log("newContent", newContent);
      if (type_input == "number") {
        //replace the letter 'e' with ''
        newContent = newContent.replace(/e/g, "");
      }
      //console.log("newContent: ",newContent, "originalContent: ",originalContent);

      if (Cancelled || newContent == originalContent || type_input == "file" || type_input == "image") {
        cell.empty();
        cellDataTables.data(originalContent).draw(false);
        return;
      }
      cellDataTables.data(newContent).draw(false);

      cell.append(EditedSVG);
      cell.addClass("td-editado text-primary font-weight-bold");
      cell.attr("title", "Campo Editado");

      // console.log("row", row);
      var id = row.id;

      // añadir cambios a CAMBIOS_TABLAS
      ENTABLADOR_add_changes(ENT_TABLA, indexRow, indexCelda, newContent);

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
function ENTABLADOR_eliminarFotoBTN(event, cell) {
  event.preventDefault();

  var tablaName = $(event.target).closest("table").attr("id");
  var cellDataTables = window[tablaName].cell(cell);
  var link = $(event.target).closest("a").attr("href");

  console.log(cellDataTables.data());
  console.log(link);

  //remove link from array
  var newContent = cellDataTables.data().filter((archivo) => archivo != link);
  cellDataTables.data(newContent).draw(false);
  var nombreColumna = window[tablaName].settings().init().aoColumns[cell.column].data;

  // añadir cambios a CAMBIOS_TABLAS
  ENTABLADOR_add_changes(window[tablaName], cell.row, cell.column, newContent);
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
    { data: "archivos", class: "editable" },
  ],
  columnDefs: [
    {
      targets: 1,
      render: function (data, type, row, meta) {
        // return `lel`;
        return data.toUpperCase();
      },
    },
    {
      targets: 3,
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
      targets: 4,
      render: function (data, type, row, meta) {
        return data == "true" ? "Verdadero" : "Falso";
      },
    },
    {
      targets: 5,
      render: function (data, type, row, meta) {
        // console.log("data", data);
        var rowIndex = meta.row;
        var columnIndex = meta.col;
        // console.log("rowIndex", rowIndex);
        // console.log("columnIndex", columnIndex);

        var html = `<div style="display:flex; justify-content: space-between;"><div>`;
        if (data != null && data != "") {
          if (Array.isArray(data)) {
            data.forEach((archivo) => {
              //detect if it is an image
              if (archivo.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                html += `<a href="${archivo}" target="_blank" class="ENTABLADOR-tabla-anchor" style="cursor:zoom-in;margin-right:5px;"><img src="${archivo}" class="ENTABLADOR-tabla-file" style="height:20px;width:20px;"><div class="btn-eliminar" onclick="ENTABLADOR_eliminarFotoBTN(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none">${RemoveFileSVG}</div></a>`;
              } else {
                html += `<a href="${archivo}" target="_blank" class="ENTABLADOR-tabla-anchor" style="cursor:zoom-in;margin-right:5px;">${FileSVG}<div class="btn-eliminar" onclick="ENTABLADOR_eliminarFotoBTN(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none">${RemoveFileSVG}</div></a>`;
              }
            });
          } else {
            html += `<a href="${data}" target="_blank" class="class="ENTABLADOR-tabla-anchor" style="cursor:zoom-in;margin-right:5px;">${FileSVG}<div class="btn-eliminar" onclick="ENTABLADOR_eliminarFotoBTN(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none">${RemoveFileSVG}</div></a>`;
          }
        }
        html += `</div><div><label class="mb-0" for="ENTABLADOR_FILE_UPLOADER" onclick="console.log('click!');ENTABLADOR_LabelClick={ row: ${rowIndex}, column: ${columnIndex} };">${AddFileSVG}</label><span class="uploading" style="display: none;"><div class="spinner-border spinner-border-sm mr-1"></div>Subiendo...</div></span>`;
        return html;
      },
    },
  ],
})
  .editable(true)
  .tipoEdicion("inline")
  .add([
    { id: 1, nombre: "Caliope", edad: 30, fechaNacimiento: "2000-12-10", humano: "false", archivos: ["https://dummyimage.com/200.png", "https://dummyimage.com/210.png", "https://dummyimage.com/210"] },
    { id: 2, nombre: "Matthew", edad: 18, fechaNacimiento: "2010-11-23", humano: "true", archivos: "https://dummyimage.com/200" },
    { id: 3, nombre: "Lucien's", edad: 35, fechaNacimiento: "1992-02-17", humano: "false", archivos: ["https://dummyimage.com/200.png", "https://dummyimage.com/200"] },
  ])
  .meta({
    key: "id",
    inputsTypes: {
      nombre: "text",
      edad: "number",
      fechaNacimiento: "date",
      humano: "checkbox",
      archivos: "file",
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
function ENTABLADOR_add_changes(table, rowIndex, columnIndex, newContent) {
  var nombreColumna = table.settings().init().aoColumns[columnIndex].data;
  var nombreRow = table.row(rowIndex).data()[table.key];
  var table_name = table.table().node().id;
  var CAMBIOS_TABLAS = ENTABLADOR._.CAMBIOS_TABLAS;
  // console.log(nombreColumna);
  // console.log(nombreRow);
  // añadir cambios a CAMBIOS_TABLAS
  if (!CAMBIOS_TABLAS[table_name]) {
    CAMBIOS_TABLAS[table_name] = {
      cambios: {
        [nombreRow]: { [nombreColumna]: newContent },
        eliminados: [],
      },
    };
  } else if (!CAMBIOS_TABLAS[table_name].cambios[nombreRow]) {
    CAMBIOS_TABLAS[table_name].cambios[nombreRow] = { [nombreColumna]: newContent };
  } else {
    CAMBIOS_TABLAS[table_name].cambios[nombreRow][nombreColumna] = newContent;
  }
  console.log("Cambios Actualizados:", CAMBIOS_TABLAS);
}
