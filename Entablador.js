/* #########################################
   ##            Entablador.js            ##
   ######################################### */

const ENTABLADOR = (function () {
  var SVGs = {
    EditedSVG: `<svg class="ml-1 mb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" width="15px" height="15px" viewBox="0 0 528.899 528.899" xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/></g></svg>`,
    NewSVG: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="color: var(--success);" width="20px" height="20px" fill="currentColor" viewBox="0 0 512 512" version="1.1"><title>new-indicator-filled</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="scheduler" fill="currentColor" transform="translate(85.333333, 85.333333)"><path d="M170.666667,1.42108547e-14 C264.923264,-3.10380131e-15 341.333333,76.4100694 341.333333,170.666667 C341.333333,264.923264 264.923264,341.333333 170.666667,341.333333 C76.4100694,341.333333 2.57539587e-14,264.923264 1.42108547e-14,170.666667 C2.6677507e-15,76.4100694 76.4100694,3.15255107e-14 170.666667,1.42108547e-14 Z M192,85.3333333 L149.333333,85.3333333 L149.333333,149.333333 L85.3333333,149.333333 L85.3333333,192 L149.333333,191.999333 L149.333333,256 L192,256 L191.999333,191.999333 L256,192 L256,149.333333 L191.999333,149.333333 L192,85.3333333 Z" id="Combined-Shape"></path></g></g></svg>`,
    // FileSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="22px" viewBox="4 2 16 20" class="" fill="currentColor"><path d="M9 15L11 17L15 13M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    AddFileSVG: `<svg xmlns="http://www.w3.org/2000/svg" title="Agregar Archivo" style="color: var(--success); cursor:pointer;" width="15px" height="20px" viewBox="4 2 16 20" fill="currentColor"><path d="M10 15H14M12 13V17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    RemoveFileSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="" style="color: var(--danger); cursor:pointer;" width="15px" height="20px" viewBox="4 2 16 20" fill="currentColor" viewBox="0 0 24 24" fill="none"><path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    RestoreSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" viewBox="0 0 24 24" fill="none" style="color: var(--success)"><path d="M4.52185 7H7C7.55229 7 8 7.44772 8 8C8 8.55229 7.55228 9 7 9H3C1.89543 9 1 8.10457 1 7V3C1 2.44772 1.44772 2 2 2C2.55228 2 3 2.44772 3 3V5.6754C4.26953 3.8688 6.06062 2.47676 8.14852 1.69631C10.6633 0.756291 13.435 0.768419 15.9415 1.73041C18.448 2.69239 20.5161 4.53782 21.7562 6.91897C22.9963 9.30013 23.3228 12.0526 22.6741 14.6578C22.0254 17.263 20.4464 19.541 18.2345 21.0626C16.0226 22.5842 13.3306 23.2444 10.6657 22.9188C8.00083 22.5931 5.54702 21.3041 3.76664 19.2946C2.20818 17.5356 1.25993 15.3309 1.04625 13.0078C0.995657 12.4579 1.45216 12.0088 2.00445 12.0084C2.55673 12.0079 3.00351 12.4566 3.06526 13.0055C3.27138 14.8374 4.03712 16.5706 5.27027 17.9625C6.7255 19.605 8.73118 20.6586 10.9094 20.9247C13.0876 21.1909 15.288 20.6513 17.0959 19.4075C18.9039 18.1638 20.1945 16.3018 20.7247 14.1724C21.2549 12.043 20.9881 9.79319 19.9745 7.8469C18.9608 5.90061 17.2704 4.3922 15.2217 3.6059C13.173 2.8196 10.9074 2.80968 8.8519 3.57803C7.11008 4.22911 5.62099 5.40094 4.57993 6.92229C4.56156 6.94914 4.54217 6.97505 4.52185 7Z" fill="currentColor"/></svg>`,
    FileSVG(width = 20, height) {
      if (height == undefined) {
        height = width;
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${height}px" viewBox="4 2 16 20" class="" fill="currentColor"><path d="M9 15L11 17L15 13M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
    },
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

    const instance = {
      id: ID,
      tipoEdicion(type) {
        if (type == undefined) {
          return ENT_TABLA.table().node().getAttribute("data-edition-type");
        }
        // console.log(ID + " -- tipoEdicion: " + type);
        var editTypes = ENTABLADOR._.editTypes;
        if (!editTypes.includes(type)) {
          console.error("Tipo de edición no válido. Tipos válidos:", editTypes);
          return this;
        }
        //set data-edition-type
        ENT_TABLA.table().node().setAttribute("data-edition-type", type);

        // ENT_TABLA.table().node().classList.toggle("editable", state);
        return this;
      },
      editable(boolean) {
        if (typeof boolean == "undefined") {
          return ENT_TABLA.table().node().classList.contains("editable");
        }
        // console.log(ID + " -- editable: " + boolean);
        ENT_TABLA.table().node().classList.toggle("editable", boolean);
        //make column of table's key invisible or not
        var columnKeyIndex = ENT_TABLA.settings()
          .init()
          .columns.map((obj) => obj.className)
          .indexOf("ENTABLADOR-btn");
        ENT_TABLA.column(columnKeyIndex).visible(boolean);

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
      modalLarge(boolean) {
        if (boolean == undefined) {
          return ENT_TABLA.ENTABLADOR.modalLarge ? ENT_TABLA.ENTABLADOR.modalLarge : false;
        } else if (!(boolean === false || boolean === true || boolean === "cambiar")) {
          console.error(".modalLarge() debe ser un booleano. Valor dado:", boolean);
          return this;
        }
        if (boolean === "cambiar") {
          boolean = !ENT_TABLA.ENTABLADOR.modalLarge;
        }

        console.log("Tabla '" + ID + "' cambiado modalLarge: " + boolean);
        ENT_TABLA.ENTABLADOR.modalLarge = boolean;
        // if modal already exists, change the size
        $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + ID + "']")
          .find(".modal-dialog")
          .toggleClass("modal-lg", boolean);

        return this;
      },
    };
    return instance;
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
    if (config.meta) {
      if (config.meta.key) {
        opciones.key = config.meta.key;
      }
      if (config.meta.secondary_key) {
        opciones.secondary_key = config.meta.secondary_key;
      }
    }
    // detect if there are files in the table
    if (config.meta && config.meta.inputsTypes) {
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
                // var FileSVG = SVGs.FileSVG;
                var AddFileSVG = SVGs.AddFileSVG;
                if (data != null && data != "") {
                  function crearElement(data, archivo) {
                    // return `<a href="${Array.isArray(data) ? archivo : data}" target="_blank" class="ENTABLADOR-tabla-anchor" style="cursor:pointer;margin-right:5px;">${FileSVG()}<div class="ENTABLADOR-btn-eliminar" onclick="ENTABLADOR._.deleteFile(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none"><div class="mr-1">${RemoveFileSVG}</div></div></a>`;
                    return `<a href="${Array.isArray(data) ? archivo : data}" target="_blank" style="cursor:pointer;margin-right:5px;" class="ENTABLADOR-tabla-anchor"><img src="${
                      Array.isArray(data) ? archivo : data
                    }" alt="Cargando..." class="" style="height:20px;width:20px;" onerror="this.onerror=null;ENTABLADOR._.ImgOnError(this)"><div class="ENTABLADOR-btn-eliminar" onclick="ENTABLADOR._.deleteFile(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none"><div style="height:10px;display:inline-block;margin-top:3px;cursor:auto !important"></div>${RemoveFileSVG}</div></a>`;
                  }

                  if (Array.isArray(data)) {
                    data.forEach((archivo) => {
                      //detect if it is an image
                      // if (archivo.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                      //   html += `<a href="${archivo}" target="_blank" class="ENTABLADOR-tabla-anchor" style="cursor:pointer;margin-right:5px;"><img src="${archivo}" style="height:20px;width:20px;"><div class="ENTABLADOR-btn-eliminar" onclick="ENTABLADOR._.deleteFile(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none"><div style="height:10px;display:inline-block;margin-top:3px;cursor:auto !important"></div>${RemoveFileSVG}</div></a>`;
                      // } else {
                      html += crearElement(data, archivo);
                      // }
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
    //poner el attr data-edition-type
    NuevaTabla.table().node().setAttribute("data-edition-type", "inline");
    NuevaTabla.ENTABLADOR = {};
    NuevaTabla.ENTABLADOR.key = config.meta.key;
    NuevaTabla.ENTABLADOR.secondary_key = config.meta.secondary_key;

    // crear NuevaTabla.ENTABLADOR.Columns. poner solo las que tengan visible=true y que no sean null, etc.
    var columns_pre = opciones.columns.map((column) => column.data);
    var COLUMNS = [];
    //expected COLUMNS = [["nombre","Nombre"],["edad","Edad"],["fechaNacimiento","Fecha de Nacimiento"],["humano","Humano"],["archivos","Archivos"]];

    for (let i = columns_pre.length - 1; i >= 0; i--) {
      if (opciones.columns[i].visible == false || [null, undefined, ""].includes(opciones.columns[i].data)) {
        columns_pre.splice(i, 1);
      } else {
        COLUMNS.unshift([opciones.columns[i].data, opciones.columns[i].title]);
      }
    }
    NuevaTabla.ENTABLADOR.COLUMNS = COLUMNS;
    // console.log(NuevaTabla.ENTABLADOR);

    NuevaTabla.ENTABLADOR.inputsTypes = config.meta.inputsTypes;
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
      // console.log("ENTABLADOR._.LabelClick:", ENTABLADOR._.LabelClick);
      var LabelClick = ENTABLADOR._.LabelClick;
      var rowIndex = LabelClick.row;
      var columnIndex = LabelClick.column;
      var fromModal = LabelClick.fromModal;
      var field = LabelClick.field;
      var table_name_Modal = LabelClick.table_name;

      var cell;
      if (!fromModal) {
        cell = NuevaTabla.cell({ row: rowIndex, column: columnIndex });
        $(cell.node()).find(".uploading").show();
        $(cell.node()).find("[for=ENTABLADOR_FILE_UPLOADER]").hide();
        // console.log(10000, $(cell.node()));
      } else {
        $(".ENTABLADOR_EDICION_MODAL label[data-field=" + field + "]").hide();
        $(".ENTABLADOR_EDICION_MODAL button[data-field=" + field + "]").show();
      }
      ENTABLADOR._.LabelClick = null;

      var files = event.target.files;
      // console.log(files);
      $.post("https://dummyjson.com/products/add", { title: "link.jpg", files: "TENGO QUE CHECAR ESTO EN EL OTRO PROYECTO" }, function (newContent) {
        var newContent = ["https://dummyimage.com/99"];
        console.log("subido", newContent);

        if (!fromModal) {
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
          var nombreRow = NuevaTabla.row(rowIndex).data()[NuevaTabla.ENTABLADOR.key];
          var nombreColumna = NuevaTabla.settings().init().aoColumns[columnIndex].data;

          ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, finalData);
        } else {
          $(".ENTABLADOR_EDICION_MODAL label[data-field=" + field + "]").show();
          $(".ENTABLADOR_EDICION_MODAL button[data-field=" + field + "]").hide();

          // Subir a object del modal
          var Modal_Editor_Obj = ENTABLADOR._.Modal_Editor_Obj;
          Modal_Editor_Obj[field] = [...Modal_Editor_Obj[field], ...newContent];
          //render images on modal
          ENTABLADOR._.renderImagesOnModal(Modal_Editor_Obj[field], table_name_Modal, field);
        }
      }).fail(function () {
        if (!fromModal) {
          $(cell.node()).find(".uploading").hide();
          $(cell.node()).find("[for=ENTABLADOR_FILE_UPLOADER]").show();
        } else {
          $(".ENTABLADOR_EDICION_MODAL label[data-field=" + field + "]").show();
          $(".ENTABLADOR_EDICION_MODAL button[data-field=" + field + "]").hide();
        }
        alert("Error al subir el archivo. Asegurate tener conexión a internet.");
      });
      event.target.value = "";
    });

    window[config.id] = NuevaTabla;
    //set click event
    $("#" + config.id + " tbody").on("click", "tr td", function (e) {
      // console.log("click en ->", this);
      var esEditable = $(this).closest("table").hasClass("editable");
      var wasClickedOnAnchor = !($(e.target).closest("a").length === 0);
      if (esEditable && !wasClickedOnAnchor) {
        ENTABLADOR._.editTable(window[config.id], this);
      }
    });

    // ########################################################################
    return id(config.id);
  }
  var _ = {
    /*  ##################################################
        ##         VARIABLE GLOBAL DE LA LIBRERÍA       ##
        ################################################## */
    CAMBIOS_TABLAS: {},
    Modal_Editor_Obj: {},
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
          },
          eliminados: [],
        };
      } else if (!CAMBIOS_TABLAS[table_name].cambios[nombreRow]) {
        CAMBIOS_TABLAS[table_name].cambios[nombreRow] = contenido;
      } else if (!soloCrearID) {
        CAMBIOS_TABLAS[table_name].cambios[nombreRow][nombreColumna] = value;
      }
      console.log("Cambios Actualizados en '" + table_name + "':", CAMBIOS_TABLAS[table_name]);
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
      if ($(el).hasClass("ENTABLADOR-btn") || $(el).closest("tr").hasClass("ENTABLADOR-row-eliminado")) {
        return;
      } else if (!$(el).hasClass("editable")) {
        alert("Este campo no se puede editar.\nProbablemente porque se genera automáticamente.");
        return;
      }

      // --
      var edition_type = $(el).closest("table").attr("data-edition-type");
      var editTypes = ENTABLADOR._.editTypes;
      if (!editTypes.includes(edition_type)) {
        //poner class
        $(el).closest("table").attr("data-edition-type", editTypes[0]);
        console.warn("Tipo de edición ('" + edition_type + "') no válido para la tabla '#" + TablaID + "'. Por defecto puesto '" + editTypes[0] + "'. Tipos válidos:", editTypes);
        edition_type = editTypes[0];
      }
      // console.log(edition_type);
      // --
      if (edition_type == "inline") {
        var input = $(`<input type="text">`).val(originalContent);
        var type_input = "text";
        var inputsTypes = ENT_TABLA.ENTABLADOR.inputsTypes;
        if (inputsTypes && inputsTypes[nombreColumna] && ENTABLADOR._.validInputs.includes(inputsTypes[nombreColumna])) {
          type_input = inputsTypes[nombreColumna];
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
          // get type of input from data-edition-type attribute
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
          var nombreRow = ENT_TABLA.row(indexRow).data()[ENT_TABLA.ENTABLADOR.key];
          var nombreColumna = ENT_TABLA.settings().init().aoColumns[indexCelda].data;

          ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, newContent);

          row[nombreColumna] = newContent;
          //console.log("nombreColumna",nombreColumna)
          //console.log("row",row);
          ENT_TABLA.draw();
        });
      } else if (edition_type == "modal") {
        var row = ENT_TABLA.row(el).data();
        var nombreColumnaClick = ENT_TABLA.settings().init().aoColumns[indexCelda].data;
        ENTABLADOR._.prepararModal(TablaID, nombreColumnaClick, row, el);
      } // aqui termina el edition_type
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
      var nombreRow = window[tablaName].row(cell.row).data()[window[tablaName].ENTABLADOR.key];
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
    prepararModal: function (table_name, nombreColumnaClick, row, el) {
      //detect if modal exist
      if ($('.ENTABLADOR_EDICION_MODAL[data-table-name="' + table_name + '"]').length < 1) {
        ENTABLADOR._.crearModal(table_name, nombreColumnaClick, row);
      }
      //detect if there is a modal already open
      if ($(".modal.show").length > 0) {
        console.error("No se puede abrir un modal para editar la tabla si ya hay un modal abierto abierto. Editando 'inline'.");
        $(el).closest("table").attr("data-edition-type", "inline");
        ENTABLADOR._.editTable(window[table_name], el);
        return;
      }

      var ENT_TABLA = window[table_name];
      var secondary_key = row[ENT_TABLA.ENTABLADOR.secondary_key];
      $(".ENTABLADOR_EDICION_MODAL #ENTABLADOR_CAMPO").text(secondary_key ? secondary_key : "Editando");

      /*
      ##################################################
      ##                RESETEAR MODAL                ##
      ##################################################
      Considerar que si no está especificado en inputsTypes, se pondrá como "text"
      */
      var inputsTypes = ENT_TABLA.ENTABLADOR.inputsTypes;

      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] input").val("");
      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] input[type='radio']").prop("checked", false);
      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] input[type='radio'][data-entablador-value='undefined']").prop("checked", true);
      // $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] select").val("");
      // $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] .ENTABLADOR-files").html(""); //Probablemente innecesario. Fail safe.

      for (const key in inputsTypes) {
        // OJO, uso inputsTypes y no .COLUMNAS porque si no está en inputsTypes, se mostrará como "text"
        if (Object.hasOwnProperty.call(inputsTypes, key)) {
          const type = inputsTypes[key];
          if (type == "file") {
            this.Modal_Editor_Obj[key] = [];
            ENTABLADOR._.renderImagesOnModal([], table_name, key);
          }
        }
      }

      /*
      ##################################################
      ##                RELLENAR MODAL                ##
      ##################################################
      */
      for (const key in row) {
        if (Object.hasOwnProperty.call(row, key)) {
          var value = row[key];
          if (key == ENT_TABLA.ENTABLADOR.key) {
            // porque es oculta y no editable
            continue;
          }
          if (inputsTypes[key] == "checkbox") {
            if (value == undefined || value == "") {
              value = "undefined";
            }
            $("#ENTABLADOR-" + table_name + "-" + key + "-" + value).prop("checked", true);
          } else if (inputsTypes[key] == "file") {
            var files = row[key];
            if (typeof files == "string") {
              files = files != "" ? [files] : [];
            }
            ENTABLADOR._.renderImagesOnModal(files, table_name, key);
            this.Modal_Editor_Obj[key] = files;
          } else {
            $("#ENTABLADOR-" + table_name + "-" + key).val(value);
          }
        }
      }

      $(".ENTABLADOR_EDICION_MODAL").modal("show");

      setTimeout(() => {
        $("#ENTABLADOR-" + table_name + "-" + nombreColumnaClick).focus();
      }, 500);
    },
    eliminarRow: function (el) {
      var tabla_nombre = $(el).closest("table")[0].id;
      var tabla = window[tabla_nombre];

      // poner class al tr .ENTABLADOR-row-eliminado
      var tr = $(el).closest("tr").addClass("ENTABLADOR-row-eliminado").attr("title", "Fila Eliminada");

      var row = tabla.row(tr).data();
      console.log(row);
      var Cambios = ENTABLADOR._.CAMBIOS_TABLAS;
      // añadir cambios a CAMBIOS_TABLAS
      if (!Cambios[tabla_nombre]) {
        Cambios[tabla_nombre] = {
          cambios: {},
          eliminados: [row[tabla.ENTABLADOR.key]],
        };
      } else {
        Cambios[tabla_nombre].eliminados.push(row[tabla.ENTABLADOR.key]);
      }
      console.log("Cambios", Cambios[tabla_nombre]);
    },
    restoreRow: function (el) {
      var tabla_nombre = $(el).closest("table")[0].id;
      var tabla = window[tabla_nombre];

      // poner class al tr .ENTABLADOR-row-eliminado
      var tr = $(el).closest("tr").removeClass("ENTABLADOR-row-eliminado").attr("title", "");

      var row = tabla.row(tr).data();
      console.log(row);
      var Eliminados = ENTABLADOR._.CAMBIOS_TABLAS[tabla_nombre];
      // remover de los eliminados
      if (Eliminados) {
        var index = Eliminados.eliminados.indexOf(row[tabla.ENTABLADOR.key]);
        if (index > -1) {
          Eliminados.eliminados.splice(index, 1);
        }
      }
    },
    crearInputModal(input, titleColumn, realNameColumn, table_name) {
      // console.log(input, titleColumn, realNameColumn, table_name);
      if (input == undefined || input == "") {
        console.warn("No se ha especificado un tipo de input para la columna '" + realNameColumn + "'. Se ha puesto '" + ENTABLADOR._.validInputs[0] + "'.");
        input = ENTABLADOR._.validInputs[0];
      }

      var div;
      var id = "ENTABLADOR-" + table_name + "-" + realNameColumn;
      if (["text", "number", "date", "datetime-local", "time"].includes(input)) {
        div = `
        <div class="form-group row">
          <label for="${id}" class="col-sm-3 col-form-label">${titleColumn}</label>
          <div class="col-sm-9">
            <input type="${input}" class="form-control" id="${id}" placeholder="${titleColumn}">
          </div>
        </div>`;
      } else if (input == "checkbox") {
        // $('.ENTABLADOR_EDICION_MODAL[data-table-name="TABLA"] [name="ENTABLADOR-TABLA-humano"]:checked').val();
        div = `
        
  <div class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">${titleColumn}</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="${id}" id="${id}-true" data-entablador-value="true">
          <label class="form-check-label" for="${id}-true">
            Sí
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="${id}" id="${id}-false" data-entablador-value="false">
          <label class="form-check-label" for="${id}-false">
            No
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="${id}" id="${id}-undefined" data-entablador-value="undefined">
          <label class="form-check-label" for="${id}-undefined">
            Sin especificar
          </label>
        </div>
      </div>
    </div>
  </div>
        
        `;
      } else if (input == "file") {
        div = `
        <div class="form-group row">
          <div for="${id}" class="col-sm-3 col-form-label">${titleColumn}</div>
          <div class="col-sm-9">
            <div class="ENTABLADOR-files mt-2" id="${id}-files"></div>
            <label data-field="${realNameColumn}" for="ENTABLADOR_FILE_UPLOADER" onclick="ENTABLADOR._.LabelClick={ fromModal: true, field: '${realNameColumn}', table_name: '${table_name}' };" class="btn btn-success btn-sm mb-0 mt-2">Subir Archivos</label>
            <button data-field="${realNameColumn}" class="btn btn-success btn-sm mb-0 mt-2" style="display:none;" disabled><div class="spinner-border spinner-border-sm mr-1"></div>Subir Archivos</button>
          </div>
        </div>`;
      }
      return div;
    },
    crearModal: function (table_name, nombreColumnaClick, row) {
      var debug = false;
      if ($('.ENTABLADOR_EDICION_MODAL[data-table-name="' + table_name + '"]').length < 1) {
        console.log("No existe modal para la tabla '" + table_name + "'. Creando...");
        var ENT_TABLA = window[table_name];
        var div = `
          <div data-table-name="${table_name}" class="ENTABLADOR_EDICION_MODAL modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog${window[table_name].ENTABLADOR.modalLarge ? " modal-lg" : ""}">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Editar Datos | <span id="ENTABLADOR_CAMPO" class="text-uppercase font-wight-bold text-primary">-</span></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer" style="justify-content: space-between;">
                  <div>
                    <button type="button" class="btn btn-info" onclick="ENTABLADOR.id('${table_name}').modalLarge('cambiar')">Cambiar tamaño</button>
                  </div>
                  <div style="justify-content: flex-end">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-success" onclick="ENTABLADOR._.guardarCambiosModal('${table_name}')">Guardar Cambios</button>
                  </div>
              </div>
            </div>
          </div>
          `;
        $("body").prepend(div);

        var inputsTypes = ENT_TABLA.ENTABLADOR.inputsTypes;
        // var columnsOrder = ENT_TABLA.settings()
        //   .init()
        //   .aoColumns.map((obj) => obj.data)
        //   .filter((data) => data !== null && data !== undefined && data !== "" && data != ENT_TABLA.ENTABLADOR.key);

        // var columnsTitle = ENT_TABLA.settings()
        //   .init()
        //   .aoColumns.map((obj) => obj.title)
        //   .filter((data) => data !== null && data !== undefined && data !== "" && data != ENT_TABLA.ENTABLADOR.key);
        // // if el on columnsTitle is undefined or "" then use columnsOrder and issue a warning
        // for (let i = 0; i < columnsTitle.length; i++) {
        //   if (columnsTitle[i] == undefined || columnsTitle[i] == "") {
        //     console.warn("Al crear el modal para la tabla '" + table_name + "', se ha encontrado un título para la columna '" + columnsOrder[i] + "'. Se ha omitido.");
        //     columnsTitle[i] = columnsOrder[i];
        //   }
        // }
        // ENT_TABLA.ENTABLADOR.columnsOrder = columnsOrder;

        var COLUMNS = ENT_TABLA.ENTABLADOR.COLUMNS;
        if (debug) {
          console.log("----------------------------------------------------");
          console.log("inputsTypes", inputsTypes);
          console.log("nombreColumnaClick", nombreColumnaClick);
          console.log("row", row);
          console.log("row", COLUMNS);
          // console.log("columnsOrder", columnsOrder);
          // console.log("columnsTitle POST", columnsTitle);
          console.log("----------------------------------------------------");
        }
        // GENERAR TODOS LOS INPUTS DE TODAS LAS COLUMNAS
        var html = "";
        for (let i = 0; i < COLUMNS.length; i++) {
          var titleColumn = ["", undefined, null].includes(COLUMNS[i][1]) ? COLUMNS[i][0] : COLUMNS[i][1];
          html += this.crearInputModal(inputsTypes[COLUMNS[i][0]], titleColumn, COLUMNS[i][0], table_name);

          //poner en ENTABLADOR._.Modal_Editor_Obj
          /*
              MEJOR SOLO PONER LOS FILES, Y CUANDO SE
              GUARDEN LOS CAMBIOS HACERLO EN TODOS LOS CAMPOS
          */
          // ENTABLADOR._.Modal_Editor_Obj[COLUMNS[i][0]] = row[COLUMNS[i][0]];
        }
        $(".ENTABLADOR_EDICION_MODAL .modal-body").append(html);
        // crear event on keyup del input de seccundary_key y ponerlo de titulo
        $("#ENTABLADOR-" + table_name + "-" + ENT_TABLA.ENTABLADOR.secondary_key).on("input", function () {
          $("#ENTABLADOR_CAMPO").text($(this).val() ? $(this).val() : "Editando");
        });
      }
    },
    ImgOnError: function (that) {
      // console.log("img onerror event", that.src);
      var has_thumbnail = false;
      if ($(that).hasClass("img-thumbnail")) {
        has_thumbnail = true;
      }
      if (has_thumbnail) {
        $(that).replaceWith(ENTABLADOR._.SVGs.FileSVG(has_thumbnail ? 70 : undefined));
      } else {
        $(that).replaceWith(ENTABLADOR._.SVGs.FileSVG());
      }
    },
    EliminarFileModal: function (file, table_name, column) {
      var arr = this.Modal_Editor_Obj[column];
      this.Modal_Editor_Obj[column] = arr.filter((arr) => arr != file);
      this.renderImagesOnModal(false, table_name, column);
    },
    renderImagesOnModal: function (files, table_name, column) {
      // console.log(0, "files", files);
      if (files == undefined || files === "" || files === false) {
        files = ENTABLADOR._.Modal_Editor_Obj[column];
      }
      // console.log(1, "files", files);
      $("#ENTABLADOR-" + table_name + "-" + column + "-files").html("");
      // console.log("files", files);
      for (let i = 0; i < files.length; i++) {
        // detect if it is an image or a file (make it svg)
        var file = `
        <div style="position:relative;display: inline-block" class="ENTABLADOR-tabla-anchor">
          <button onclick="ENTABLADOR._.EliminarFileModal('${files[i]}', '${table_name}', '${column}')" class="eliminarFoto">&times;</button>
          <a href="${files[i]}" target="_blank" style="cursor: zoom-in;">
            <img src="${files[i]}" alt="Foto" class="img-thumbnail m-1" onerror="this.onerror=null;ENTABLADOR._.ImgOnError(this)">
          </a>
        </div>`;
        $("#ENTABLADOR-" + table_name + "-" + column + "-files").append(file);
      }
      if (files.length == 0) {
        $("#ENTABLADOR-" + table_name + "-" + column + "-files").html("No hay archivos");
      }
      // console.log("elements:", $("#ENTABLADOR-" + table_name + "-" + column + "-files").children().length);
    },
    guardarCambiosModal: function (table_name) {
      /*  ##################################################
          ##          actualizar Modal_Editor_Obj         ##
          ################################################## */

      var ENT_TABLA = window[table_name];
      var Columns = ENT_TABLA.ENTABLADOR.COLUMNS;
      var inputsTypes = ENT_TABLA.ENTABLADOR.inputsTypes;
      for (let i = 0; i < Columns.length; i++) {
        var column = Columns[i][0];
        if (inputsTypes[column] == "checkbox") {
          this.Modal_Editor_Obj[column] = $('.ENTABLADOR_EDICION_MODAL[data-table-name="' + table_name + '"] input[name="ENTABLADOR-' + table_name + "-" + column + '"]:checked').val();
        } else if (inputsTypes[column] == "file") {
        } else {
          this.Modal_Editor_Obj[column] = $("#ENTABLADOR-" + table_name + "-" + column).val();
        }
      }
      // console.log("ENTABLADOR._.Modal_Editor_Obj", this.Modal_Editor_Obj);

      /*  ##################################################
          ##       DETECTAR DIFERENCIAS Y GUARDARLAS      ##
          ################################################## */
      var rowOriginal;
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
    secondary_key: "nombre",
    inputsTypes: {
      nombre: "text",
      fechaNacimiento: "date",
      humano: "checkbox",
      archivos: "file",
      edad: "number",
    },
  },
  columns: [
    {
      data: null,
      defaultContent: `
      <div class="ENTABLADOR-eliminarRow" title="Eliminar" onclick="ENTABLADOR._.eliminarRow(this)" style="margin: 0px 5px;width: fit-content;">${ENTABLADOR._.SVGs.RemoveFileSVG}</div>
      <div class="ENTABLADOR-restoreRow" title="Recuperar" onclick="ENTABLADOR._.restoreRow(this)" style="margin: 0px 5px;width: fit-content; cursor:pointer; display: none;">${ENTABLADOR._.SVGs.RestoreSVG}</div>
      `,
      orderable: false,
      width: "20px",
      className: "ENTABLADOR-btn",
    },
    { data: "id", visible: false },
    { data: "nombre", title: "Nombre", class: "editable", defaultContent: "" },
    { data: "edad", title: "Edad", class: "editable", defaultContent: "" },
    { data: "fechaNacimiento", title: "Fecha de Nacimiento", class: "editable", defaultContent: "" },
    { data: "humano", title: "Humano", class: "editable", defaultContent: "" },
    { data: "archivos", title: "Archivos", class: "editable", defaultContent: "" },
  ],
  columnDefs: [
    {
      targets: 2,
      render: function (data, type, row, meta) {
        // return `lel`;
        return data ? data.toUpperCase() : data;
      },
    },
    {
      targets: 4,
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
      targets: 5,
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
  .tipoEdicion("modal")
  // .modalLarge(true)
  .add([
    { id: 1, nombre: "Caliope", edad: 30, fechaNacimiento: "2000-12-10", humano: "false", archivos: ["https://dummyimage.com/200.png", "https://dummyimage.com/210.png", "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf", "https://dummyimage.com/210"] },
    { id: 2, nombre: "Matthew", edad: 18, fechaNacimiento: "2010-11-23", humano: "true", archivos: "https://dummyimage.com/200" },
    { id: 3, nombre: "Lucien's", edad: 35, fechaNacimiento: "1992-02-17", humano: "false", archivos: ["https://dummyimage.com/200.png", "https://dummyimage.com/200"] },
    { id: 4, nombre: "John Dee", edad: 30, fechaNacimiento: "2000-04-28", humano: "", archivos: "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf" },
    { id: 5, nombre: "Morpheus", edad: 25, fechaNacimiento: "2000-08-04", archivos: "" },
    { id: 6, nombre: "Corinthian", edad: 40, fechaNacimiento: "2000-01-12", humano: "false" },
  ]);
// Add css rule
var style = document.createElement("style");
style.innerHTML = `/* NO OLVIDARSE DE METER EL CSS DE /style.css AQUÍ EN PROD */`;
document.head.appendChild(style);

$("#TABLA tbody tr:eq(0) td:eq(3)").click();
