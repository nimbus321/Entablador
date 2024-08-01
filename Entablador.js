/* #########################################
   ##            Entablador.js            ##
   ######################################### */

const ENTABLADOR = (function () {
  var SVGs = {
    EditedSVG: `<svg class="ml-1 mb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" width="15px" height="15px" viewBox="0 0 528.899 528.899" xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/></g></svg>`,
    NewSVG: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="color: var(--success);" width="20px" height="20px" fill="currentColor" viewBox="0 0 512 512" version="1.1"><title>new-indicator-filled</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="scheduler" fill="currentColor" transform="translate(85.333333, 85.333333)"><path d="M170.666667,1.42108547e-14 C264.923264,-3.10380131e-15 341.333333,76.4100694 341.333333,170.666667 C341.333333,264.923264 264.923264,341.333333 170.666667,341.333333 C76.4100694,341.333333 2.57539587e-14,264.923264 1.42108547e-14,170.666667 C2.6677507e-15,76.4100694 76.4100694,3.15255107e-14 170.666667,1.42108547e-14 Z M192,85.3333333 L149.333333,85.3333333 L149.333333,149.333333 L85.3333333,149.333333 L85.3333333,192 L149.333333,191.999333 L149.333333,256 L192,256 L191.999333,191.999333 L256,192 L256,149.333333 L191.999333,149.333333 L192,85.3333333 Z" id="Combined-Shape"></path></g></g></svg>`,
    FileSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="22px" viewBox="4 2 16 20" class="" fill="currentColor"><path d="M9 15L11 17L15 13M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    AddFileSVG: `<svg xmlns="http://www.w3.org/2000/svg" title="Agregar Archivo" style="color: var(--success); cursor:pointer;" width="15px" height="20px" viewBox="4 2 16 20" fill="currentColor"><path d="M10 15H14M12 13V17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    RemoveFileSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="mr-1" style="color: var(--danger); cursor:pointer;" width="15px" height="20px" viewBox="4 2 16 20" fill="currentColor" viewBox="0 0 24 24" fill="none"><path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  };
  // Función para crear el objeto con métodos encadenables
  function id(ID) {
    if (typeof ID != "string") {
      if (!$.fn.DataTable.isDataTable(ID)) {
        console.error("El ID debe ser una tabla de DataTable");
        return;
      } else {
        ID = ID.tables().nodes().to$().attr("id");
      }
    } else if (ID == "") {
      console.error("No se ha especificado un ID");
      return;
    } else if (document.getElementById(ID) == null) {
      console.error("'#" + ID + "' no existe");
      // console.error("No se ha encontrado el ID especificado (", ID, ")");
      return null;
    }

    var ENT_TABLA = window[ID];
    if (ENT_TABLA instanceof Element) {
      console.error("Aún no has creado la tabla! '#" + ID + "' es solo un elemento HTML");
      return;
    }

    const instancia = {
      id: ID,
      tipoEdicion(type) {
        // console.log(ID + " -- tipoEdicion: " + type);
        var editTypes = ENTABLADOR._.editTypes;
        if (!editTypes.includes(type)) {
          console.error("Tipo de edición no válido. Tipos válidos:", editTypes);
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
          // remove .editable
          ENT_TABLA.table().node().classList.remove("editable");
          // remove envent listener
          $("#" + ID + " tbody").off("click", "tr td");
          ENT_TABLA.destroy();
          console.log("Tabla eliminada: ", ID);
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
        // NO EN USO --
        console.warn("Deprecated: 'meta' method is deprecated. Use 'tipoEdicion' instead.");
        return this;
      },
      mandatoryFields(arg) {
        var mandatoryFields = ENTABLADOR._.mandatoryFields;
        if (arg == undefined) {
          return mandatoryFields[ID] ? mandatoryFields[ID] : [];
        } else if (!Array.isArray(arg) || (arg.length > 0 && typeof arg[0] != "string")) {
          console.error("El argumento de .mandatoryFields() debe ser un array con strings dentro.\nDatos:", arg);
          return;
        }
        mandatoryFields[ID] = arg;
        return this;
      },
      subirArchivoURL(URL) {
        console.log("subirArchivoURL: ", URL);
        ENT_TABLA.subirArchivoURL = URL;
        return this;
      },
      uploadData(data, dontForceAutoID) {
        /* tener en cuenta que el formato de la DB es
        {
          ID1: {
            COLUMNA1: "VALOR",
            COLUMNA2: "VALOR",
            COLUMNA3: "VALOR",
          },
          ID2: {
            COLUMNA1: "VALOR",
            COLUMNA2: "VALOR",
            COLUMNA3: "VALOR",
          }
        }
        */
        /* EXPECTED VALUE FOR  data:
        [{
          ENTABLADOR_KEY: "ID",
          COLUMNA1: "VALOR",
          COLUMNA2: "VALOR",
          COLUMNA3: "VALOR",
        }]
       */
        // console.log("uploadData: ", data);
        //check if it is an array
        if (!Array.isArray(data)) {
          console.error(".uploadData(data) -> data is not an array. data:", data);
          return this;
        }
        //check if it is an array of objects
        for (let i = 0; i < data.length; i++) {
          if (typeof data[i] != "object") {
            console.error(".uploadData(data) -> data is not an array of objects. data:", data);
            return this;
          }
          //check if it has the key specified
          if (data[i][ENT_TABLA.key] == undefined) {
            if (dontForceAutoID) {
              console.error(".uploadData() -> value of the key '" + ENT_TABLA.key + "' is mising and dontForceAutoID=true.\nData:", data[i]);
              return this;
            } else {
              data[i][ENT_TABLA.key] = ENTABLADOR._.getNewID(ENT_TABLA.data().toArray(), ENT_TABLA.key, data);
            }
          } else {
            //check if the key already exists in the table
            var existeID_enTabla = ENT_TABLA.rows()
              .data()
              .toArray()
              .some((row) => row[ENT_TABLA.key] == data[i][ENT_TABLA.key]);
            if (existeID_enTabla) {
              console.error(".uploadData() -> '" + ENT_TABLA.key + ": " + data[i][ENT_TABLA.key] + "' already exists in the table.\nData:", data);
              return this;
            }
          }

          //check mandatoryFields
          var mandatoryFields = ENTABLADOR._.mandatoryFields[ENT_TABLA.table().node().id];
          for (let j = 0; j < mandatoryFields.length; j++) {
            var mandatoryField = mandatoryFields[j];
            if (data[i][mandatoryField] == undefined) {
              console.error(".uploadData() -> value of the mandatory field '" + mandatoryField + "' is mising.\nmandatoryFields:", mandatoryFields, "\nData:", data[i]);
              return this;
            }
          }
        }
        // subir a la tabla y poner la class .newData a la row
        var rows = ENT_TABLA.rows.add(data).draw().nodes();
        $(rows).addClass("font-weight-bold text-success").attr("title", "Dato Nuevo");
        // en cada celda que tenga algun dato poner el svg new
        $(rows)
          .find("td")
          .each(function () {
            if ($(this).text() != "") {
              $(this).append(ENTABLADOR._.SVGs.NewSVG);
            }
          });

        //añadir cambios a CAMBIOS_TABLAS
        var data = JSON.parse(JSON.stringify(data));
        console.log("data", data);
        for (let i = 0; i < data.length; i++) {
          var row = data[i];
          var columnKey = ENT_TABLA.key;
          var columnKey_data = row[columnKey];
          delete row[columnKey];
          //detect if it is an empty object
          if (Object.keys(row).length === 0) {
            var table_name = ENT_TABLA.table().node().id;

            ENTABLADOR._.addChanges(table_name, columnKey_data, 0, 0, true);
          } else {
            for (const column in row) {
              if (Object.hasOwnProperty.call(row, column)) {
                const value = row[column];

                var table_name = ENT_TABLA.table().node().id;
                var nombreRow = columnKey_data;
                var nombreColumna = column;

                ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, value);
              }
            }
          }
        }

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

    /* ########################################################################
      GENERAR Automaticamente la columna de input 'file'
      .meta({
        key: "id",
        inputsTypes: {
          nombre: "text",
          edad: "number",
          fechaNacimiento: "date",
          humano: "checkbox",
          archivos: "file",
        },
      })
    */
    if (config.meta && config.meta.key) {
      opciones.key = config.meta.key;
    }
    if (config.meta && config.meta.inputsTypes) {
      //loop through config.meta.inputsTypes
      // console.log("---", config.meta.inputsTypes);
      for (var columnaNombre in config.meta.inputsTypes) {
        if (config.meta.inputsTypes[columnaNombre] == "file") {
          var hayFile = false;
          //loop through config.columns
          for (var i = 0; i < opciones.columns.length; i++) {
            if (opciones.columns[i].data == columnaNombre) {
              var columnINDEX = i;
              // search through columnDefs
              for (var j = 0; j < opciones.columnDefs.length; j++) {
                if (opciones.columnDefs[j].targets == columnINDEX) {
                  // remove element from the array and issue a warning
                  // be aware that it can be many elements with the same target
                  console.warn("La columna '" + columnaNombre + "' ya tiene una definición en columnDefs. Se ha eliminado la definición.");
                  opciones.columnDefs.splice(j, 1);
                  j--;
                }
              }

              hayFile = true;
            }
          }
          // console.log("columnINDEX", columnINDEX);
          // console.log("antes", opciones.columnDefs.length);
          // console.log("hayFile", hayFile);
          if (hayFile) {
            opciones.columnDefs.push({
              targets: columnINDEX,
              render: function (data, type, row, meta) {
                // console.log("data", data);
                var rowIndex = meta.row;
                var columnIndex = meta.col;
                // console.log("rowIndex", rowIndex);
                // console.log("columnIndex", columnIndex);

                var html = `<div style="display:flex; justify-content: space-between;"><div>`;
                var SVGs = ENTABLADOR._.SVGs;
                var RemoveFileSVG = SVGs.RemoveFileSVG;
                var FileSVG = SVGs.FileSVG;
                var AddFileSVG = SVGs.AddFileSVG;
                if (data != null && data != "") {
                  function crearElement(data, archivo) {
                    return `<a href="${Array.isArray(data) ? archivo : data}" target="_blank" class="ENTABLADOR-tabla-anchor" style="cursor:pointer;margin-right:5px;">${FileSVG}<div class="ENTABLADOR-btn-eliminar" onclick="ENTABLADOR._.deleteFile(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none">${RemoveFileSVG}</div></a>`;
                  }

                  if (Array.isArray(data)) {
                    data.forEach((archivo) => {
                      //detect if it is an image
                      if (archivo.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                        html += `<a href="${archivo}" target="_blank" class="ENTABLADOR-tabla-anchor" style="cursor:pointer;margin-right:5px;"><img src="${archivo}" style="height:20px;width:20px;"><div class="ENTABLADOR-btn-eliminar" onclick="ENTABLADOR._.deleteFile(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none"><div style="height:10px;display:inline-block;margin-top:3px;cursor:auto !important"></div>${RemoveFileSVG}</div></a>`;
                      } else {
                        html += crearElement(data, archivo);
                      }
                    });
                  } else {
                    html += crearElement(data);
                  }
                }
                html += `</div><div><label class="mb-0" for="ENTABLADOR_FILE_UPLOADER" onclick="ENTABLADOR._.LabelClick={ row: ${rowIndex}, column: ${columnIndex} };">${AddFileSVG}</label><span class="uploading" style="display: none;"><div class="spinner-border text-primary spinner-border-sm mr-1"></div></div></span>`;
                return html;
              },
            });
          }
          // console.log("despues", opciones.columnDefs.length);
        }
      }
    }
    var NuevaTabla = new DataTable("#" + config.id, opciones);
    NuevaTabla.key = config.meta.key;
    NuevaTabla.inputsTypes = config.meta.inputsTypes;
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
      // console.log(ENTABLADOR._.LabelClick);
      var LabelClick = ENTABLADOR._.LabelClick;
      var rowIndex = LabelClick.row;
      var columnIndex = LabelClick.column;
      var cell = NuevaTabla.cell({ row: rowIndex, column: columnIndex });

      $(cell.node()).find(".uploading").show();
      console.log(10000, $(cell.node()));
      $(cell.node()).find("[for=ENTABLADOR_FILE_UPLOADER]").hide();

      var files = event.target.files;
      // console.log("subiendo..", "(" + files[0].name + " +?)", files);
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
        var finalData;
        if (Array.isArray(oldData)) {
          finalData = [...oldData, ...newContent];
        } else if (oldData == "") {
          finalData = newContent;
        } else {
          finalData = [oldData, ...newContent];
          console.log(finalData);
        }
        // console.log("newContent: ", newContent);
        // console.log("oldData: ", oldData);

        cellDataTables.data(finalData).draw(false);

        var table_name = NuevaTabla.table().node().id;
        var nombreRow = NuevaTabla.row(rowIndex).data()[NuevaTabla.key];
        var nombreColumna = NuevaTabla.settings().init().aoColumns[columnIndex].data;

        ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, finalData);
      });
      event.target.value = "";
    });

    window[config.id] = NuevaTabla;
    //set click event
    $("#" + config.id + " tbody").on("click", "tr td", function () {
      //detectar si la tabla tiene la class editable
      if ($(this).closest("table").hasClass("editable")) {
        // console.log("CLICK!!!");
        ENTABLADOR._.editTable(window[config.id], this);
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
    validInputs: ["text", "number", "date", "datetime-local", "checkbox", "time", "file"],
    MESES: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    mandatoryFields: {},
    LabelClick: null,
    SVGs: SVGs,
    sanitize: function (input) {
      if (typeof input !== "string") {
        console.warn("sanitize() -> input is not a string. Returning the same input.");
        return input;
      }
      /*
        caracter    |  reemplazar con
        ------------|-----------------
        .           |  ,
        [           |  (
        ]           |  )
        *           |  -
        ~           |  -
        /           |  -
        "           |  '
        `           |  '

      */
      input = input.replace(/\./g, ",");
      input = input.replace(/\[/g, "(");
      input = input.replace(/\]/g, ")");
      input = input.replace(/\*/g, "-");
      input = input.replace(/~/g, "-");
      input = input.replace(/\//g, "-");
      input = input.replace(/"/g, "'");
      input = input.replace(/`/g, "'");
      return input.trim();
    },
    addChanges: function (table_name, nombreRow, nombreColumna, value, soloCrearID = false) {
      // nombreColumna = table.settings().init().aoColumns[columnIndex].data;
      // nombreRow = table.row(rowIndex).data()[table.key];
      // var table_name = table.table().node().id;

      var CAMBIOS_TABLAS = ENTABLADOR._.CAMBIOS_TABLAS;
      // console.log(nombreColumna);
      // console.log(nombreRow);
      // añadir cambios a CAMBIOS_TABLAS
      var contenido;
      if (soloCrearID) {
        contenido = {};
      } else {
        contenido = { [nombreColumna]: value };
      }

      if (!CAMBIOS_TABLAS[table_name]) {
        CAMBIOS_TABLAS[table_name] = {
          cambios: {
            [nombreRow]: contenido,
            eliminados: [],
          },
        };
      } else if (!CAMBIOS_TABLAS[table_name].cambios[nombreRow]) {
        CAMBIOS_TABLAS[table_name].cambios[nombreRow] = contenido;
      } else if (!soloCrearID) {
        CAMBIOS_TABLAS[table_name].cambios[nombreRow][nombreColumna] = value;
      }
      console.log("Cambios Actualizados:", CAMBIOS_TABLAS);
    },
    editTable: function (ENT_TABLA, el) {
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
      var editTypes = ENTABLADOR._.editTypes;
      if (!editTypes.includes(type_edicion)) {
        console.warn("Tipo de edición ('" + type_edicion + "') no válido para la tabla '#" + TablaID + "'. Por defecto puesto '" + editTypes[0] + "'. Tipos válidos:", editTypes);
        type_edicion = editTypes[0];
      }
      // console.log(type_edicion);
      // --
      if (type_edicion == "inline") {
        var input = $(`<input type="text">`).val(originalContent);
        var type_input = "text";
        if (ENT_TABLA.inputsTypes && ENT_TABLA.inputsTypes[nombreColumna] && ENTABLADOR._.validInputs.includes(ENT_TABLA.inputsTypes[nombreColumna])) {
          type_input = ENT_TABLA.inputsTypes[nombreColumna];
          // console.log("type_input", type_input);
          if (type_input == "file" || type_input == "image") {
            return;
          }
          if (type_input == "checkbox") {
            input = $(`<select><option value="true">Sí</option><option value="false">No</option></select>`).val(originalContent);
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
              // console.log("Escape!!!");
              Cancelled = true;
              input.blur();
            }
          }
        });

        input.on("blur", function () {
          // get type of input from data-editable-type attribute
          var newContent = input.val();
          //detectar si es un checkbox
          if (newContent == null) {
            newContent = "";
          }
          newContent = newContent.replace(/"/g, "'").replace(/`/g, "'").trim();
          // console.log("newContent", newContent);
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

          cell.append(SVGs.EditedSVG);
          cell.addClass("td-editado text-primary font-weight-bold");
          cell.attr("title", "Campo Editado");

          // console.log("row", row);
          var id = row.id;

          // añadir cambios a CAMBIOS_TABLAS
          var table_name = ENT_TABLA.table().node().id;
          var nombreRow = ENT_TABLA.row(indexRow).data()[ENT_TABLA.key];
          var nombreColumna = ENT_TABLA.settings().init().aoColumns[indexCelda].data;

          ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, newContent);

          row[nombreColumna] = newContent;
          //console.log("nombreColumna",nombreColumna)
          //console.log("row",row);
          ENT_TABLA.draw();
        });
      } // aqui termina el inline
    },
    deleteFile: function (event, cell) {
      event.preventDefault();

      var tablaName = $(event.target).closest("table").attr("id");
      var cellDataTables = window[tablaName].cell(cell);
      var link = $(event.target).closest("a").attr("href");

      // console.log(cellDataTables.data());
      // console.log(link);

      //remove link from array
      console.log("cellDataTables.data()", cellDataTables.data());
      var data = cellDataTables.data();
      var newContent;

      //detect if it is an array
      if (Array.isArray(data)) {
        newContent = data.filter((archivo) => archivo != link);
        //detect if it is an empty array
        if (newContent.length == 0) {
          newContent = "";
        }
        cellDataTables.data(newContent).draw(false);
      } else {
        //detect if it is a string
        if (typeof data == "string") {
          if (data == link) {
            cellDataTables.data("").draw(false);
            newContent = "";
          }
        }
      }

      // añadir cambios a CAMBIOS_TABLAS
      var table_name = window[tablaName].table().node().id;
      var nombreRow = window[tablaName].row(cell.row).data()[window[tablaName].key];
      var nombreColumna = window[tablaName].settings().init().aoColumns[cell.column].data;

      ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, newContent);
    },
    getNewID: function (objects, tableID, extraData) {
      // tablaDatos, tableID, extraData
      // Filtra los objetos que tienen la propiedad `tableID`
      const filteredObjects = objects.filter((obj) => obj.hasOwnProperty(tableID));

      // Extrae las IDs de los objetos filtrados
      const objectIDs = filteredObjects.map((obj) => obj[tableID]);

      // Extrae las IDs adicionales de `extraData` basado en `tableID`, ignorando los objetos que no tienen la propiedad `tableID`
      const extraIDs = extraData ? extraData.filter((obj) => obj.hasOwnProperty(tableID)).map((obj) => obj[tableID]) : [];

      // Combina todas las IDs
      const allIDs = objectIDs.concat(extraIDs);

      // Si no hay IDs, retorna 1
      if (allIDs.length === 0) {
        return 1;
      }

      // Función para extraer el número de una cadena
      function extractNumber(id) {
        const num = parseInt(id.toString().replace(/\D/g, ""), 10);
        return isNaN(num) ? 0 : num;
      }

      // Encuentra la ID máxima de todas las IDs combinadas
      const maxID = Math.max(...allIDs.map((id) => extractNumber(id)));

      // Retorna la nueva ID que es +1 mayor que la ID más alta
      return maxID + 1;
    },
    FIRESTORE_TO_TABLE: function (columnKey, json) {
      if (columnKey == null || columnKey == "") {
        console.error("Error: No se ha especificado una tabla");
        return;
      }
      if (typeof json !== "object" && !Array.isArray(json)) {
        return "Error: No es un array";
      }
      var json = JSON.parse(JSON.stringify(json));

      var array = [];
      for (const ID in json) {
        if (Object.hasOwnProperty.call(json, ID)) {
          const element = json[ID];
          element[columnKey] = ID;
          array.push(element);
        }
      }
      return array;
    },
    TABLE_TO_FIRESTORE: function (columnKey, array) {
      if (typeof array !== "object" && !Array.isArray(array)) {
        return "Error: No es un array";
      }
      var array = JSON.parse(JSON.stringify(array));
      var obj = {};
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element[columnKey] == undefined) {
          // element[columnKey] = ENTABLADOR._.getNewID(array, columnKey);
          console.error("Error: Omitiendo row. No se ha encontrado la key '" + columnKey + "' en el elemento", element);
          continue;
        }
        obj[element[columnKey]] = element;
        // eliminar la key y value de columnKey
        delete obj[element[columnKey]][columnKey];
      }
      return obj;
    },
  };
  return {
    id,
    crear,
    _,
  };
})();
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
  meta: {
    key: "id",
    inputsTypes: {
      nombre: "text",
      edad: "number",
      fechaNacimiento: "date",
      humano: "checkbox",
      archivos: "file",
    },
  },
  columns: [
    { data: "id", visible: true },
    { data: "nombre", class: "editable", defaultContent: "" },
    { data: "edad", class: "editable", defaultContent: "" },
    { data: "fechaNacimiento", class: "editable", defaultContent: "" },
    { data: "humano", class: "editable", defaultContent: "" },
    { data: "archivos", class: "editable", defaultContent: "" },
  ],
  columnDefs: [
    {
      targets: 1,
      render: function (data, type, row, meta) {
        // return `lel`;
        return data ? data.toUpperCase() : data;
      },
    },
    {
      targets: 3,
      render: function (data, type, row, meta) {
        // return `lel`;
        //detect if it is a date
        // console.log(data); OJO: HAY UN ERROR QUE NO SE REPLICAR QUE SE PONE LA FECHA CON NaN
        if (data == null || data == "") {
          return data;
        }
        var fecha = new Date(data);
        return `${fecha.getDate()} ${ENTABLADOR._.MESES[fecha.getMonth()]} ${fecha.getFullYear()}`;
      },
    },
    {
      targets: 4,
      render: function (data, type, row, meta) {
        var resultado;
        if (data == "" || data == undefined) {
          return;
        }
        if (data == "true" || data == true) {
          resultado = "si";
        }
        if (data == "false" || data == false) {
          resultado = "no";
        }
        return resultado;
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
    { id: 4, nombre: "John Dee", edad: 30, fechaNacimiento: "2000-04-28", humano: "true", archivos: "" },
    { id: 5, nombre: "Morpheus", edad: 25, fechaNacimiento: "2000-08-04", humano: "false", archivos: "" },
    { id: 6, nombre: "Corinthian", edad: 40, fechaNacimiento: "2000-01-12", humano: "false", archivos: "" },
  ]);
/*.meta({
    key: "id",
    inputsTypes: {
      nombre: "text",
      edad: "number",
      fechaNacimiento: "date",
      humano: "checkbox",
      archivos: "file",
    },
  })*/
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
// Add css rule
var style = document.createElement("style");
style.innerHTML = `table.editable .ENTABLADOR-tabla-anchor {  position: relative;}table.editable .ENTABLADOR-tabla-anchor:hover .ENTABLADOR-btn-eliminar {  position: absolute !important;  display: block !important;  bottom: -24px;  left: 2px;  color: var(--danger);  width: max-content;  z-index: 1;}table.editable label[for="ENTABLADOR_FILE_UPLOADER"] {display: block;}table:not(.editable) label[for="ENTABLADOR_FILE_UPLOADER"] {display: none;}`;
document.head.appendChild(style);
