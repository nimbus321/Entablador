/* #########################################
   ##            Entablador.js            ##
   ######################################### */

const ENTABLADOR = (function () {
  var SVGs = {
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
    } else if (ID === "") {
      console.error("No se ha especificado un ID");
      return;
    } else if (document.getElementById(ID) == null) {
      console.error("'#" + ID + "' no existe");
      // console.error("No se ha encontrado el ID especificado (", ID, ")");
      return null;
    }
    var ENT_TABLA = window[ID];
    if (ENT_TABLA instanceof Element) {
      console.log(ENT_TABLA);

      console.error("Aún no has creado la tabla! '#" + ID + "' es solo un elemento HTML");
      return;
    }

    const instance = {
      id: ID,
      editType(type) {
        if (type == undefined) {
          return ENT_TABLA.table().node().getAttribute("data-edition-type");
        }
        // console.log(ID + " -- editType: " + type);
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
      longTextareaBehavior(type) {
        /*
          a) 'modal'. se abra un modal
          b) 'buttons'. btn's "click ver más", "click ver menos"
          d) 'see all'. se muestre todo sin hacer ningun cambio
        */
        if (type == undefined) {
          return ENT_TABLA.table().node().getAttribute("data-long-textarea-behavior");
          // poner el normal al crear la tabla
        }
        var longTextareaBehavior = ENTABLADOR._.longTextareaBehavior;
        if (!longTextareaBehavior.includes(type)) {
          console.error("Tipo de lectura de un textarea largo no válido. Tipos válidos:", longTextareaBehavior);
          return this;
        }
        ENT_TABLA.table().node().setAttribute("data-long-textarea-behavior", type);

        return this;
      },
      editable(boolean) {
        if (typeof boolean == "undefined") {
          return ENT_TABLA.table().node().classList.contains("editable");
        }
        // console.log(ID + " -- editable: " + boolean);
        ENT_TABLA.table().node().classList.toggle("editable", boolean);
        TABLA.column("ENTABLADOR-btn:name").visible(boolean);
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
      requiredFields(arg) {
        var requiredFields = ENTABLADOR._.requiredFields;
        if (arg == undefined) {
          return requiredFields[ID] ? requiredFields[ID] : [];
        } else if (!Array.isArray(arg) || (arg.length > 0 && typeof arg[0] != "string")) {
          console.error("El argumento de .requiredFields() debe ser un array con strings dentro.\nDatos:", arg);
          return;
        }
        requiredFields[ID] = arg;
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
          ID2: ...
        }
       
        EXPECTED VALUE FOR  data:
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
            console.error(".uploadData(data) -> data is not an array of objects.\ndata:", data, "\nelement on array that is not an object: data[" + i + "]: '", data[i], "'");
            return this;
          }
          //check if it has the key specified
          // console.log(0, ENT_TABLA);
          var primary_key = ENT_TABLA.ENTABLADOR.key;

          if (data[i][primary_key] == undefined) {
            if (dontForceAutoID) {
              console.error(".uploadData() -> value of the primary key '" + primary_key + "' is mising and dontForceAutoID=true.\nData:", data[i]);
              return this;
            } else {
              data[i][primary_key] = ENTABLADOR._.getNewID(ENT_TABLA.data().toArray(), primary_key, data);
            }
          } else {
            //check if the key already exists in the table
            var existeID_enTabla = ENT_TABLA.rows()
              .data()
              .toArray()
              .some((row) => row[primary_key] == data[i][primary_key]);
            if (existeID_enTabla) {
              console.error(".uploadData() -> '" + primary_key + ": " + data[i][primary_key] + "' already exists in the table.\nData:", data);
              return this;
            }
          }

          //check requiredFields
          var requiredFields = ENTABLADOR._.requiredFields[ENT_TABLA.table().node().id];
          requiredFields = requiredFields ? requiredFields : [];
          for (let j = 0; j < requiredFields.length; j++) {
            var mandatoryField = requiredFields[j];
            if (data[i][mandatoryField] == undefined) {
              console.error(".uploadData() -> value of the required field '" + mandatoryField + "' is mising.\nrequiredFields:", requiredFields, "\nData:", data[i]);
              return this;
            }
          }
          // detectar si se subió en un campo que tiene inputTypes: file y que no sea un file
          var inputsTypes = ENT_TABLA.ENTABLADOR.inputsTypes;
          var colNamesHasFileOnData = [];
          // console.log("DATA:::", data[i]);
          // console.error(".uploadData() -> value of the field '" + nombreColInputType + "' is not a file.\nData:", data[i]);
          var inputTypesFiles = inputsTypes ? Object.keys(inputsTypes).filter((key) => inputsTypes[key] === "file") : [];
          // console.log("inputTypesFiles", inputTypesFiles);

          if (inputTypesFiles.length > 0) {
            for (let j = 0; j < inputTypesFiles.length; j++) {
              var value = data[i][inputTypesFiles[j]];
              // console.log("inputTypesFiles[j]", inputTypesFiles[j]);
              // console.log("value", value);

              if (value != undefined) {
                var isFile = value instanceof FileList;
                if (!isFile) {
                  console.error(".uploadData() -> value of the field '" + inputTypesFiles[j] + "' is not a file.\nData:", data[i]);
                  return this;
                }
                colNamesHasFileOnData.push(inputTypesFiles[j]);
              }
            }
          }
        }
        // colNamesHasFileOnData | poner como valor el :blob y ponerlo correctamente en cambios filesUploads
        // console.log("colNamesHasFileOnData", colNamesHasFileOnData);
        for (let i = 0; i < colNamesHasFileOnData.length; i++) {
          var colName = colNamesHasFileOnData[i];
          var fileList = data[i][colName];
          var array_URLS = [];
          for (let ia = 0; ia < fileList.length; ia++) {
            array_URLS.push(URL.createObjectURL(fileList[ia]));

            // ponerlo en cambios filesUploads
            if (ENTABLADOR._.CAMBIOS_TABLAS[ID] == undefined) {
              ENTABLADOR._.CAMBIOS_TABLAS[ID] = {
                cambios: {},
                eliminados: [],
                filesUploads: [],
              };
            }
            ENTABLADOR._.CAMBIOS_TABLAS[ID].filesUploads.push({
              file: fileList[ia],
              ubicaciones: [{ primaryKey: data[i][primary_key], columnName: colName }],
              url: array_URLS[ia],
            });
          }
          data[i][colName] = array_URLS;
        }

        // ##############################################################
        // subir a la tabla
        // ##############################################################

        // subir a la tabla y poner la class .newData a la row
        var rows = ENT_TABLA.rows.add(data).draw().nodes();
        $(rows).addClass("font-weight-bold text-success tr-nuevo").attr("title", "Dato Nuevo");
        $(rows).find("td").addClass("text-success td-nuevo");
        // en cada celda que tenga algun dato poner el svg new
        $(rows)
          .find("td")
          .each(function () {
            if ($(this).text() != "") {
              // console.log($(this));
              var isTextarea = $(this).hasClass("ENTABLADOR-textarea");
              if (isTextarea && $(this).find(".ENTABLADOR-textarea-data span").text() === "") {
                return;
              }

              var isDefaultContent = $(this).html() === ENT_TABLA.settings().init().aoColumns[ENT_TABLA.cell(this).index().column].defaultContent;
              if (false && isDefaultContent) {
                // No estoy seguro si es mejor quitar el svg o si dejarlo. Por el momento puse false para dejarlo.
                return;
              }
              $(this).addClass("td-nuevo-hayTexto");
            }
          });

        //añadir cambios a CAMBIOS_TABLAS
        var data = JSON.parse(JSON.stringify(data));
        // console.log("data", data);
        for (let i = 0; i < data.length; i++) {
          var row = data[i];
          var columnKey = primary_key;
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

        // console.log("Tabla '" + ID + "' cambiado modalLarge: " + boolean);
        ENT_TABLA.ENTABLADOR.modalLarge = boolean;
        // if modal already exists, change the size
        $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + ID + "']")
          .find(".modal-dialog")
          .toggleClass("modal-lg", boolean);

        return this;
      },
      getChanges(arg) {
        if (arg !== undefined) {
          console.error("El método .getChanges() no acepta argumentos");
        }
        var cambios_tabla = ENTABLADOR._.CAMBIOS_TABLAS[ID];
        if (cambios_tabla == undefined) {
          return {
            cambios: {},
            eliminados: [],
            filesUploads: [],
          };
        }
        var cambios = cambios_tabla.cambios;
        var eliminados = cambios_tabla.eliminados;
        var filesUploads = cambios_tabla.filesUploads;

        return cambios_tabla;
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
    if (!config.id || typeof config.id != "string" || config.id === "") {
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
    // METER { type: "locale-compare", targets: "_all" }
    // ########################################################################
    var columnDefs;
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

    // ########################################################################
    // Meter otras opciones simples
    // ########################################################################
    var opciones = {
      language: { url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json" },
      autoWidth: config.autoWidth || false,
      columnDefs: columnDefs,
      // order: config.order || [[1, "asc"]],
    };
    // set following options to true by default

    config.autoRender = config.autoRender === undefined ? true : config.autoRender;
    config.createDefaultContent = config.createDefaultContent === undefined ? true : config.createDefaultContent;

    // ##########################################################################################
    // METER COLUMNAS     &&     COLUMNAS NAME = DATA     &&     config.createDefaultContent
    // ##########################################################################################
    if (config.columns) {
      opciones.columns = config.columns;
      // agregar name a las columnas que sea lo mismo que data
      for (let i = 0; i < opciones.columns.length; i++) {
        var data = opciones.columns[i].data;
        var name = opciones.columns[i].name;
        var title = opciones.columns[i].title;
        // title_th es el title que está en el element th de la tabla, detectar si hay texto
        var title_th = $(document.getElementById(config.id)).find("th").eq(i).text().trim();

        title = title || title_th;
        // console.log("title_th", title_th);

        if (config.replaceName !== false) {
          if (name !== undefined && name != data) {
            console.warn("En la tabla '" + config.id + "', la columna '" + data + "' ya tiene un '.name'. Se ha eliminado el '.name' que le fue dado ('" + name + "') y cambiado por su '.data' ('" + data + "').");
          }
          opciones.columns[i].name = data;
        }

        if (title === undefined && data != null) {
          // Poner el titulo desde data en minusculas y la primera letra en mayusculas
          opciones.columns[i].title = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
        } else if (title !== "") {
          opciones.columns[i].title = title;
        }

        if (config.createDefaultContent) {
          if (opciones.columns[i].defaultContent == undefined) {
            opciones.columns[i].defaultContent = "";
          }
        }
      }
    }
    //console.log("opciones:", opciones);
    //console.log("config:", config);

    // ########################################################################
    // METER primary y secondary key
    // ########################################################################
    if (config.meta) {
      if (config.meta.key) {
        opciones.key = config.meta.key;
      } else {
        console.warn("No se ha especificado una key en la tabla '" + config.id + "'. Las funciones de edición no funcionarán correctamente.");
      }
      var secondary_key = config.meta.secondary_key;
      if (secondary_key) {
        //detect if secondary_key is on the columns
        var secondary_key_exists = false;
        for (let i = 0; i < opciones.columns.length; i++) {
          if (opciones.columns[i].data == secondary_key) {
            secondary_key_exists = true;
            break;
          }
        }
        if (!secondary_key_exists) {
          console.warn("La columna especificada como secondary key '" + secondary_key + "' no existe en las columnas de la tabla '" + config.id + "'.");
        }
        opciones.secondary_key = secondary_key;
      }
    }

    // ########################################################################
    //  CREAR AUTO RENDER'S
    // ########################################################################

    // detect if there are files in the table
    if (config.meta && config.meta.inputsTypes) {
      for (var columnaNombre in config.meta.inputsTypes) {
        var colValue = config.meta.inputsTypes[columnaNombre];
        var blacklist = config.renderBlacklist && Array.isArray(config.renderBlacklist) ? config.renderBlacklist : [];
        if ((colValue == "file" || (colValue == "textarea" && config.autoRender)) && !blacklist.includes(columnaNombre)) {
          // console.log("rendering", columnaNombre, colValue);
          //loop through config.columns
          for (var i = 0; i < opciones.columns.length; i++) {
            if (opciones.columns[i].data == columnaNombre) {
              var columnINDEX = i;

              // add classes to the column
              if (colValue == "textarea") {
                classNames = opciones.columns[i].class;
                if (classNames == undefined || classNames == "" || classNames == "ENTABLADOR-textarea") {
                  opciones.columns[i].class = "ENTABLADOR-textarea";
                } else {
                  opciones.columns[i].class += " ENTABLADOR-textarea";
                }
              }

              // search through columnDefs
              for (var j = 0; j < opciones.columnDefs.length; j++) {
                if (opciones.columnDefs[j].targets == columnINDEX) {
                  // remove element from the array and issue a warning
                  // be aware that it can be many elements with the same target
                  console.warn("Al crear la tabla '" + config.id + "', la columna '" + columnaNombre + "' ya tiene una definición en columnDefs. Se ha eliminado la definición.");
                  opciones.columnDefs.splice(j, 1);
                  j--;
                  // keep in mind that is the target is an array, it will not be removed. is this the desired behavior? I think so?
                }
              }
              opciones.columnDefs.push(ENTABLADOR._.createAutoRender(colValue, columnINDEX, config, columnaNombre));
            }
          }
        }
      }
    } else {
      if (config.autoRender) {
        console.warn("On table '" + config.id + "' autoRender has been ignored, it does not have any effect if meta.inputsTypes is not defined.");
      }
      var renderBlacklist = config.renderBlacklist;
      if (renderBlacklist && Array.isArray(renderBlacklist) && renderBlacklist.length > 0) {
        console.warn("On table '" + config.id + "' renderBlacklist has been ignored, it does not have any effect if meta.inputsTypes is not defined.");
      }
    }

    // ########################################################################
    // Crear buttons column
    // ########################################################################
    if (config.createButtons === undefined || config.createButtons === true) {
      var obj = {
        data: null,
        defaultContent: `
        <div class="ENTABLADOR-eliminarRow" title="Eliminar" onclick="ENTABLADOR._.eliminarRow(this)" style="margin: 0px 5px;width: fit-content;">${ENTABLADOR._.SVGs.RemoveFileSVG}</div>
        <div class="ENTABLADOR-restoreRow" title="Recuperar" onclick="ENTABLADOR._.restoreRow(this)" style="margin: 0px 5px;width: fit-content; cursor:pointer; display: none;">${ENTABLADOR._.SVGs.RestoreSVG}</div>
        `,
        orderable: false,
        visible: false,
        width: "20px",
        className: "ENTABLADOR-btn",
        name: "ENTABLADOR-btn",
      };
      for (var i = 0; i < opciones.columnDefs.length; i++) {
        var targets = opciones.columnDefs[i].targets;
        function createTarget(targets) {
          if (typeof targets == "number") {
            if (targets >= 0) {
              return targets + 1;
            }
          }
          return targets;
        }
        if (Array.isArray(targets)) {
          for (var j = 0; j < targets.length; j++) {
            opciones.columnDefs[i].targets[j] = createTarget(targets[j]);
          }
        } else {
          opciones.columnDefs[i].targets = createTarget(targets);
        }
      }
      opciones.columns.unshift(obj);
      if (config.order) {
        console.warn("Si se utiliza un index de columna en .order, tener en cuenta que se creó la columna de los botones porque createButtons=true, así que ajustar manualmente el .order");
      }
    }

    if (config.order) {
      opciones.order = config.order;
    } else if (config.columns) {
      var index = null;
      for (let i = 0; i < config.columns.length; i++) {
        // console.log("Checkeando: ", i, "(" + config.columns[i].data + ") |- ", config.columns[i].visible);
        var visible = config.columns[i].visible;
        var orderable = config.columns[i].orderable;
        if ((visible === true || visible === undefined) && orderable !== false) {
          index = i;
          break;
        }
      }
      opciones.order = [[index, "asc"]];
    }
    // ########################################################################
    // config.customOrder
    // ########################################################################

    $.fn.dataTable.ext.order["SPACES_ON_BOTTOM"] = function (settings, col) {
      // Este order sí pone cuando data === undefined || "" al final.
      var currentOrder = this.api().order();
      var order = ENTABLADOR._.extractOrder(currentOrder);
      // console.log("currentOrder (pre extractOrder())", currentOrder);
      // console.log("order", order);
      if (order != "desc" && order != "asc") {
        console.error("El orden está roto porque no se pudo detectar si asc o desc. Detectado: ", order);
        return String(data);
      }

      return this.api()
        .column(col, { order: "index" })
        .nodes()
        .map(function (td, i) {
          var data = NuevaTabla.cell(td).data();
          var inputsTypes = NuevaTabla.ENTABLADOR.inputsTypes;
          var indexCol = NuevaTabla.cell(td).index().column;
          var columnaNombre = NuevaTabla.ENTABLADOR.realColumns[indexCol].data;
          console.log("| data --->", data);
          function loguear(retur) {
            // console.log("returned ->", retur);
            // console.log("%creturned ->", "color: red; font-weight: bold;", retur);
            return retur;
          }
          function ponerAbajo(data, isNumber) {
            if (isNumber) {
              return loguear(order === "asc" ? Number.MAX_SAFE_INTEGER : order === "desc" ? Number.MIN_SAFE_INTEGER : data);
            }
            return order === "asc" ? "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" : order === "desc" ? "" : String(data);
          }

          var defaultContent = NuevaTabla.ENTABLADOR.realColumns[indexCol].defaultContent;
          var noData = ["", undefined, defaultContent].includes(data);
          if (noData) {
            var isNumber = inputsTypes && ["number", "datetime-local", "date"].includes(inputsTypes[columnaNombre]) ? true : false;
            return loguear(ponerAbajo(data, isNumber));
          }

          if (inputsTypes) {
            var inpType = inputsTypes[columnaNombre];
            // console.log("inpType", inpType);
            if (inpType == undefined || inpType == "text") {
              return loguear(String(data));
            } else if (inpType == "file") {
              if (data === "" || data == undefined) {
                return loguear(ponerAbajo(data));
              } else if (Array.isArray(data)) {
                return loguear(String(data.length));
              } else if (typeof data == "string") {
                return loguear("1");
              }
            } else if (inpType == "checkbox") {
              var val = ENTABLADOR._.parseBoolean("string", data);
              return loguear(val === "false" ? "0" : val === "true" ? "1" : val === "undefined" ? String(data) : val);
            } else if (inpType == "datetime-local" || inpType == "date") {
              var D = new Date(data);
              var isValidDate = !isNaN(D.getTime());
              return loguear(isValidDate ? D.getTime() : 0);
            } else if (inpType == "number") {
              return loguear(Number(data));
            }
          }
          return loguear(String(data));
        });
    };
    $.fn.dataTable.ext.order["NORMAL_SPACES"] = function (settings, col) {
      // Este order no pone al final si data == "" || undefined. No se toma en cuenta.
      var currentOrder = this.api().order();
      var order = ENTABLADOR._.extractOrder(currentOrder);
      // console.log("currentOrder (pre extractOrder())", currentOrder);
      // console.log("order", order);
      if (order != "desc" && order != "asc") {
        console.error("El orden está roto porque no se pudo detectar si asc o desc. Detectado: ", order);
        return String(data);
      }

      return this.api()
        .column(col, { order: "index" })
        .nodes()
        .map(function (td, i) {
          var data = NuevaTabla.cell(td).data();
          var inputsTypes = NuevaTabla.ENTABLADOR.inputsTypes;
          var indexCol = NuevaTabla.cell(td).index().column;
          var columnaNombre = NuevaTabla.ENTABLADOR.realColumns[indexCol].data;
          // console.log("| data --->", data);
          function loguear(retur) {
            // console.log("returned ->", retur);
            // console.log("%creturned ->", "color: red; font-weight: bold;", retur);
            return retur;
          }
          var defaultContent = NuevaTabla.ENTABLADOR.realColumns[indexCol].defaultContent;
          var noData = ["", undefined, defaultContent].includes(data);
          if (noData) {
            return loguear("");
          }
          if (inputsTypes) {
            var inpType = inputsTypes[columnaNombre];
            // console.log("inpType", inpType);
            if (inpType == undefined || inpType == "text") {
              return loguear(String(data));
            } else if (inpType == "file") {
              if (data === "" || data == undefined) {
                return loguear(data);
              } else if (Array.isArray(data)) {
                return loguear(String(data.length));
              } else if (typeof data == "string") {
                return loguear("1");
              }
            } else if (inpType == "checkbox") {
              var val = ENTABLADOR._.parseBoolean("string", data);
              return loguear(val === "false" ? "0" : val === "true" ? "1" : val === "undefined" ? String(data) : val);
            } else if (inpType == "datetime-local" || inpType == "date") {
              var D = new Date(data);
              var isValidDate = !isNaN(D.getTime());
              return loguear(isValidDate ? D.getTime() : 0);
            } else if (inpType == "number") {
              return loguear(data == undefined || data === "" ? data : Number(data));
            }
          }
          return loguear(String(data));
        });
    };

    var obj = {
      targets: "_all",
      orderDataType: "",
    };
    var customOrder = config.customOrder;
    var ordenar = true;
    if (customOrder === undefined) {
      obj.orderDataType = this._.validCustomOrder[0];
    } else if (customOrder === false) {
      ordenar = false;
    } else {
      if (this._.validCustomOrder.includes(config.customOrder)) {
        obj.orderDataType = config.customOrder;
      } else {
        console.warn("El valor de customOrder dado '" + config.customOrder + "' no es válido. Puesto por defecto '" + this._.validCustomOrder[0] + "'. Valores válidos:", this._.validCustomOrder);
        obj.orderDataType = this._.validCustomOrder[0];
      }
    }
    // console.log("orderDataType", obj.orderDataType);
    if (ordenar) {
      opciones.columnDefs.push(obj);
    }

    // ########################################################################
    // Crear funcionamiento de ENTABLADOR-fade en textarea
    // ########################################################################

    opciones.drawCallback = function () {
      $(".ENTABLADOR-fade").each(function () {
        // detect if the height is higher than 100px
        // console.log("height", $(this).height());
        $(this)
          .closest(".ENTABLADOR-fade-container:not(.ENTABLADOR-activeFade)")
          .toggleClass("ENTABLADOR-activeFade", $(this).height() >= 100);
      });
    };

    // ########################################################################
    // CREAR TABLA
    console.log("#########################       CREANDO TABLA       ########################");
    console.log("OPCIONES (ACTUAL THING):", JSON.parse(JSON.stringify(opciones)));
    console.log("CONFIG:", JSON.parse(JSON.stringify(config)));
    console.log("############################################################################");

    var NuevaTabla = new DataTable("#" + config.id, opciones);
    // ########################################################################

    // console.log("this", this);
    //poner el attr data-edition-type
    NuevaTabla.table().node().setAttribute("data-edition-type", this._.editTypes[0]);
    NuevaTabla.table().node().setAttribute("data-long-textarea-behavior", this._.longTextareaBehavior[0]);
    NuevaTabla.ENTABLADOR = {};
    NuevaTabla.ENTABLADOR.key = config.meta && config.meta.key ? config.meta.key : null;
    NuevaTabla.ENTABLADOR.secondary_key = config.meta && config.meta.secondary_key ? config.meta.secondary_key : null;
    NuevaTabla.ENTABLADOR.inputsTypes = config.meta && config.meta.inputsTypes;
    // NuevaTabla.ENTABLADOR.orderInicial = config.order ? config.order[1] : opciones.order[0][1]; // probablemente traiga problemas. revisar si datatables deja meter otro formato
    // ni idea que poner arriba. cuando trabaje en el order ver esto

    NuevaTabla.column("ENTABLADOR-btn:name").visible(false);
    // ########################################################################
    // CREAR NuevaTabla.ENTABLADOR.Columns
    // ########################################################################

    // poner solo las que tengan visible=true y que no sean null, etc.
    var columns_pre = opciones.columns.map((column) => column.data);
    var COLUMNS = [];
    //expected COLUMNS = [["nombre","Nombre"],["edad","Edad"],...];

    for (let i = columns_pre.length - 1; i >= 0; i--) {
      if (opciones.columns[i].visible == false || [null, undefined, ""].includes(opciones.columns[i].data)) {
        columns_pre.splice(i, 1);
      } else {
        COLUMNS.unshift([opciones.columns[i].data, opciones.columns[i].title]);
      }
    }
    NuevaTabla.ENTABLADOR.COLUMNS = COLUMNS;
    NuevaTabla.ENTABLADOR.realColumns = opciones.columns;

    // ########################################################################
    // HIDE TOOLTIP ON DRAW AND SHOW ON PRE-DRAW
    // ########################################################################

    $("#" + config.id).on("preDraw.dt", function () {
      $("#" + config.id + '[data-toggle="tooltip"]').tooltip("hide");
    });
    $("#" + config.id).on("draw.dt", function () {
      $("#" + config.id + '[data-toggle="tooltip"]').tooltip();
    });

    // ########################################################################
    // PREPEND INPUT FILE TO TABLE        &&        SET EVENT
    // ########################################################################
    if ($("input#ENTABLADOR_FILE_UPLOADER").length == 0) {
      var fileInput = $('<input type="file" id="ENTABLADOR_FILE_UPLOADER" style="display:none;" multiple>');
      $("#" + config.id).prepend(fileInput);
      fileInput.on("change", function (event) {
        //detect from which cell the file was uploaded
        // console.log("ENTABLADOR._.LabelClick:", ENTABLADOR._.LabelClick);
        var LabelClick = ENTABLADOR._.LabelClick;
        // console.log("LabelClick", LabelClick);

        var rowIndex = LabelClick.row;
        var columnIndex = LabelClick.column;
        var fromModal = LabelClick.fromModal;
        var field = LabelClick.field;
        var table_name_Modal = LabelClick.table_name;
        // var ENT_TABLA = window[table_name_Modal];
        var ENT_TABLA = fromModal ? window[table_name_Modal] : ENTABLADOR._.LabelClick.ENT_TABLA;
        // console.log("!!!!!!!!!!!!", LabelClick);

        var table_name = ENT_TABLA.table().node().id;

        var cellDataTables = ENT_TABLA.cell({ row: rowIndex, column: columnIndex });

        var nombreRow = ENT_TABLA.row(rowIndex).data()[ENT_TABLA.ENTABLADOR.key];
        if (nombreRow == undefined) {
          var row = ENT_TABLA.row(rowIndex).data();
          console.error("En la tabla '" + table_name + "', el row que se trató de editar no tiene la primary_key ('" + ENT_TABLA.ENTABLADOR.key + "').\nRow:", row);
          event.target.value = "";
          alert("No se puede editar esta fila por un error en la configuración de la tabla. Hablar con soporte.");
          return;
        }
        // console.log("!!!!! nombreRow", nombreRow);

        var cell;
        if (!fromModal) {
          cell = ENT_TABLA.cell({ row: rowIndex, column: columnIndex });
          $(cell.node()).find(".uploading").show();
          $(cell.node()).find("label[for=ENTABLADOR_FILE_UPLOADER]").hide();
          // console.log(10000, $(cell.node()));
        } else {
          $(".ENTABLADOR_EDICION_MODAL label[data-field=" + field + "]").hide();
          $(".ENTABLADOR_EDICION_MODAL button[data-field=" + field + "]").show();
        }
        ENTABLADOR._.LabelClick = null;

        var files = event.target.files;
        // console.log(files);
        // console.log("FILES ---", files);
        var newContent = [];
        for (let i = 0; i < files.length; i++) {
          newContent.push(URL.createObjectURL(files[i]));
        }
        // ############################################
        var ubicacionesNuevasDeFiles = [];

        var ubicacionActual = {
          primaryKey: nombreRow,
          columnName: ENT_TABLA.settings().init().aoColumns[columnIndex].data,
        };
        var ubicacionNested = ENTABLADOR._.ubicacionNested;
        if (ubicacionNested !== false && ubicacionNested !== undefined) {
          ubicacionActual.ubicacionNested = ubicacionNested;
          ENTABLADOR._.ubicacionNested = false;
        }
        // use URL.createObjectURL(file)
        var files = event.target.files;
        for (let i = 0; i < files.length; i++) {
          ubicacionesNuevasDeFiles.push({
            file: files[i],
            ubicaciones: [ubicacionActual],
            url: newContent[i],
          });
        }
        // ############################################
        if (!fromModal) {
          if (ENTABLADOR._.CAMBIOS_TABLAS[table_name]) {
            ENTABLADOR._.CAMBIOS_TABLAS[table_name].filesUploads.push(...ubicacionesNuevasDeFiles);
          } else {
            ENTABLADOR._.CAMBIOS_TABLAS[table_name] = {
              cambios: {},
              eliminados: [],
              filesUploads: ubicacionesNuevasDeFiles,
            };
          }

          $(cell.node()).find(".uploading").hide();
          $(cell.node()).find("label[for=ENTABLADOR_FILE_UPLOADER]").show();

          var oldData = cellDataTables.data();
          var finalData;
          if (Array.isArray(oldData)) {
            finalData = [...oldData, ...newContent];
          } else if (oldData === "") {
            finalData = newContent;
          } else {
            finalData = [oldData, ...newContent];
            // console.log(finalData);
          }
          // console.log("newContent: ", newContent);
          // console.log("oldData: ", oldData);

          cellDataTables.data(finalData).draw(false);
          // añadir class .td-editado
          $(cell.node()).addClass("td-editado").attr("title", "Archivos Editados");

          var nombreRow = ENT_TABLA.row(rowIndex).data()[ENT_TABLA.ENTABLADOR.key];
          var nombreColumna = ENT_TABLA.settings().init().aoColumns[columnIndex].data;

          ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, finalData);

          ENTABLADOR._.Create_Original_Values(table_name, nombreRow, nombreColumna, JSON.parse(JSON.stringify(oldData)));
        } else {
          // Modal_Editor_Obj
          var Editor_files = ENTABLADOR._.Modal_Editor_Obj_files;
          if (!Editor_files[field]) {
            Editor_files[field] = [];
          }
          Editor_files[field].push(...ubicacionesNuevasDeFiles);

          $(".ENTABLADOR_EDICION_MODAL label[data-field=" + field + "]").show();
          $(".ENTABLADOR_EDICION_MODAL button[data-field=" + field + "]").hide();

          // Subir a object del modal
          var Modal_Editor_Obj = ENTABLADOR._.Modal_Editor_Obj;
          Modal_Editor_Obj[field] = [...Modal_Editor_Obj[field], ...newContent];
          //render images on modal
          ENTABLADOR._.renderImagesOnModal(Modal_Editor_Obj[field], table_name_Modal, field);

          // console.log(0, Modal_Editor_Obj[field], 1, table_name_Modal, 2, field);
        }

        event.target.value = "";
      });
    }

    window[config.id] = NuevaTabla;

    // ########################################################################
    // SET CLICK EVENT
    // ########################################################################

    $("#" + config.id + " tbody").on("click", "tr td", function (e) {
      // console.log("click en ->", this);
      var esEditable = $(this).closest("table").hasClass("editable");
      var wasClickedOnAnchor = !($(e.target).closest("a").length === 0);
      var hasPrimaryKey = config.meta && config.meta.key && config.meta.key != "" && config.meta.key != undefined ? true : false;
      if (esEditable && !wasClickedOnAnchor) {
        if (hasPrimaryKey) {
          ENTABLADOR._.editTable(window[config.id], this);
        } else {
          console.error("Se trató de editar la tabla '" + config.id + "' pero no se ha especificado una key en la configuración.");
          alert("Error. No se puede editar la tabla por error de configuración.");
        }
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
    ORIGINAL_VALUES: {},
    Modal_Editor_Obj: {},
    Modal_Editor_Obj_files: {},
    Modal_Editor_Obj_files_deletedURL: [],
    ultimoTdClickeadoPorModal: null,
    editTypes: ["inline", "modal"],
    longTextareaBehavior: ["buttons", "modal", "see all"],
    validCustomOrder: ["SPACES_ON_BOTTOM", "NORMAL_SPACES", "NORMAL_SPACES_REVERSE", "TEST"],
    validInputs: ["text", "number", "date", "datetime-local", "checkbox", "time", "file", "textarea"],
    MESES: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    requiredFields: {},
    LabelClick: null,
    SVGs: SVGs,
    createAutoRender: function (type_input, indexTarget, config) {
      if (type_input == "file") {
        return {
          targets: indexTarget,
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
                }" alt="Cargando..." class="" style="height:20px;width:20px;" onerror="this.onerror=null;ENTABLADOR._.ImgOnError(this)"><div class="ENTABLADOR-btn-eliminar" onclick="ENTABLADOR._.deleteFile(event, { row: ${rowIndex}, column: ${columnIndex} })" style="display: none; z-index: 10000;"><div style="height:10px;display:inline-block;margin-top:3px;cursor:auto !important"></div>${RemoveFileSVG}</div></a>`;
              }

              if (Array.isArray(data)) {
                data.forEach((archivo) => {
                  html += crearElement(data, archivo);
                });
              } else {
                html += crearElement(data);
              }
            }
            html += `</div><div><label class="mb-0" for="ENTABLADOR_FILE_UPLOADER" onclick="ENTABLADOR._.LabelClick={ row: ${rowIndex}, column: ${columnIndex}, ENT_TABLA: ${config.id} };">${AddFileSVG}</label><span class="uploading" style="display: none;"><div class="spinner-border text-primary spinner-border-sm mr-1"></div></div></span>`;
            return html;
          },
        };
      } else if (type_input == "textarea") {
        return {
          targets: indexTarget,
          render: function (data, type, row, meta) {
            return `<div class="ENTABLADOR-fade-container" style="display: inline-block;">
                      <div>
                        <div class='ENTABLADOR-fade'>
                          <div class="ENTABLADOR-textarea-data">
                            <span style="line-break: anywhere;">${data ? data : ""}</span>
                          </div>
                          <div>
                            <a href="#" style="display:none;text-align:center" class="ENTABLADOR-seeLess text-reset text-decoration-none font-weight-bold" onclick="ENTABLADOR._.textareaShowLess(this);event.preventDefault();">
                              Ver menos
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="ENTABLADOR-seeMore" style="display:none;">
                        <a href="#" class="d-block text-reset text-decoration-none font-weight-normal" onclick="ENTABLADOR._.textareaShowMore(this);event.preventDefault();">
                          Click para ver más
                        </a>
                      </div>
                    </div>`;
          },
        };
      }
    },
    textareaShowMore: function (el) {
      //detectar si esta en modal o buttons
      var type = $(el).closest("table").attr("data-long-textarea-behavior");
      if (type == "buttons") {
        $(el).closest(".ENTABLADOR-activeFade").removeClass("ENTABLADOR-activeFade").addClass("ENTABLADOR-seeLess-container");
      } else if (type == "modal") {
        this.prepararTextareaModal(el);
      } else {
        console.error("Tipo de lectura de un textarea largo no válido (" + type + "). Tipos válidos:", longTextareaBehavior);
      }
    },
    prepararTextareaModal: function (el) {
      //detectar si hay un modal creado
      var table_name = $(el).closest("table").attr("id");
      var modalCreado = $(".ENTABLADOR_EDICION_TEXTAREA_MODAL[data-table-name='" + table_name + "']").length > 0;
      if (!modalCreado) {
        // CREAR MODAL
        var modal = `
          <div data-table-name="${table_name}" class="ENTABLADOR_EDICION_TEXTAREA_MODAL modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog xxxxxxmodal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="ENTABLADOR_TEXTAREA_CAMPO modal-title xxxxxtext-uppercase font-wight-bold text-primary"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        `;
        $("body").append(modal);
      }
      // poner el contenido del textarea en el modal
      var ENT_TABLA = window[table_name];

      var row = ENT_TABLA.row($(el).closest("td")).data();
      var secondary_key = ENT_TABLA.ENTABLADOR.secondary_key;
      var sec_key_value = secondary_key ? (row[secondary_key] ? row[secondary_key] : false) : false;

      var colIndex = ENT_TABLA.cell($(el).closest("td")).index().column;
      var cellHeader = ENT_TABLA.settings().init().columns[colIndex];
      var nombreColumna = typeof cellHeader.title == "string" && cellHeader.title !== "" ? cellHeader.title : cellHeader.data;

      // console.log("row", row);
      // console.log("nombreColumna", nombreColumna);

      var textareaContent = ENT_TABLA.cell($(el).closest("td")).data();
      var modalHeader = sec_key_value ? sec_key_value + " | " + nombreColumna : nombreColumna;
      $(".ENTABLADOR_EDICION_TEXTAREA_MODAL[data-table-name='" + table_name + "'] .ENTABLADOR_TEXTAREA_CAMPO").text(modalHeader);
      $(".ENTABLADOR_EDICION_TEXTAREA_MODAL[data-table-name='" + table_name + "'] .modal-body").text(textareaContent);
      //open modal
      $(".ENTABLADOR_EDICION_TEXTAREA_MODAL[data-table-name='" + table_name + "']").modal("show");
    },
    textareaShowLess: function (el) {
      var container = $(el).closest(".ENTABLADOR-fade-container").addClass("ENTABLADOR-activeFade");
      // console.log(container);
    },
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
      // console.log("input addChanges() ->", table_name, nombreRow, nombreColumna, value, soloCrearID);
      if (nombreRow == undefined) {
        console.error("addChanges() -> The row's name is undefined. Table: '" + table_name + "'. Value: ", value);
        return;
      }
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
          filesUploads: [],
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
      var isButtonsColumn = ENT_TABLA.settings().init().aoColumns[indexCelda].name == "ENTABLADOR-btn" ? true : false;
      var isDeletedRow = $(el).closest("tr").hasClass("ENTABLADOR-row-eliminado");
      if (isButtonsColumn || isDeletedRow) {
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

        var type_input;
        if (inputsTypes) {
          type_input = inputsTypes[nombreColumna];
          // console.log("type_input", type_input);
          if (typeof type_input === "string" && type_input != "") {
            if (this.validInputs.includes(type_input)) {
              // console.log(true);

              if (type_input == "file" || type_input == "image") {
                return;
              } else if (type_input == "checkbox") {
                input = $(`<select><option value="undefined">Sin especificar</option><option value="true">Sí</option><option value="false">No</option></select>`).val(ENTABLADOR._.parseBoolean("string", originalContent));
              } else if (type_input == "textarea") {
                input = $(`<textarea style="width:100%;" rows="5">`).val(originalContent);
              } else {
                input = $(`<input type="${type_input}">`).val(originalContent);
              }
            } else {
              console.warn("Tipo de input ('" + type_input + "') no válido, puesto por defecto '" + this.validInputs[0] + "'.");
              type_input = this.validInputs[0];
            }
          }
        }

        var table_name = ENT_TABLA.table().node().id;
        var nombreRow = ENT_TABLA.row(indexRow).data()[ENT_TABLA.ENTABLADOR.key];
        var nombreColumna = ENT_TABLA.settings().init().aoColumns[indexCelda].data;

        if (nombreRow == undefined) {
          console.error("En la tabla '" + table_name + "', el row que se trató de editar no tiene la primary_key ('" + ENT_TABLA.ENTABLADOR.key + "').\nRow:", row);
          alert("No se puede editar esta fila por un error en la configuración de la tabla. Hablar con soporte.");
          return;
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
          if (e.key === "Escape") {
            // console.log("Escape!!!");
            Cancelled = true;
            input.blur();
          }
          if (e.target.tagName === "INPUT") {
            if (e.key === "Enter") {
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
            //make it a number with parseint
            newContent = ENTABLADOR._.extractNumberFromString(newContent);
          } else if (type_input == "checkbox") {
            //make it a boolean
            var _ = ENTABLADOR._;
            newContent = _.parseBoolean("boolean", newContent);
            originalContent = _.parseBoolean("boolean", originalContent);
          }
          if (Cancelled || newContent == originalContent || type_input == "file" || type_input == "image" /* || esCheckboxParsed*/) {
            cell.empty();
            cellDataTables.data(type_input == "checkbox" ? ENTABLADOR._.parseBoolean("string", originalContent) : originalContent).draw(false);
            return;
          }

          cellDataTables.data(type_input == "checkbox" ? ENTABLADOR._.parseBoolean("string", newContent) : newContent).draw(false);

          row[nombreColumna] = newContent;
          cell.addClass("td-editado text-primary font-weight-bold");
          cell.attr("title", "Campo Editado");
          var isNewTR = cell.closest("tr").hasClass("ENTABLADOR-row-nuevo");
          if (!isNewTR) {
            cell.addClass("td-nuevo-hayTexto");
          }
          ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, newContent);
          // console.log("----->", table_name, nombreRow, nombreColumna, newContent);
          if (typeof originalContent === "object") {
            originalContent = JSON.parse(JSON.stringify(originalContent));
          }
          // var REAL_originalContent = false;
          // if (newContent == REAL_originalContent) {
          //   console.log("Vuelto!");

          //   cell.removeClass("td-editado text-primary font-weight-bold");
          //   cell.attr("title", "");
          // }
          ENTABLADOR._.Create_Original_Values(table_name, nombreRow, nombreColumna, originalContent);
          ENT_TABLA.draw();
        });
      } else if (edition_type == "modal") {
        var row = ENT_TABLA.row(el).data();
        var nombreColumnaClick = ENT_TABLA.settings().init().aoColumns[indexCelda].data;
        this.ultimoTdClickeadoPorModal = el;

        var nombreRow = row[ENT_TABLA.ENTABLADOR.key];
        if (nombreRow == undefined) {
          console.error("En la tabla '" + TablaID + "', el row que se trató de editar no tiene la primary_key ('" + ENT_TABLA.ENTABLADOR.key + "').\nRow:", row);
          alert("No se puede editar esta fila por un error en la configuración de la tabla. Hablar con soporte.");
          return;
        }
        ENTABLADOR._.prepararModal(TablaID, nombreColumnaClick, row, el);
      } // aqui termina el edition_type
    },
    deleteFile: function (event, cell) {
      event.preventDefault();

      var tablaName = $(event.target).closest("table").attr("id");
      var ENT_TABLA = window[tablaName];
      var cellDataTables = ENT_TABLA.cell(cell);
      var link = $(event.target).closest("a").attr("href");

      var table_name = ENT_TABLA.table().node().id;
      var nombreRow = ENT_TABLA.row(cell.row).data()[ENT_TABLA.ENTABLADOR.key];
      var nombreColumna = ENT_TABLA.settings().init().aoColumns[cell.column].data;

      if (nombreRow == undefined) {
        var row = ENT_TABLA.row(cell.row).data();
        console.error("En la tabla '" + table_name + "', el row que se trató de editar no tiene la primary_key ('" + ENT_TABLA.ENTABLADOR.key + "').\nRow:", row);
        alert("No se puede editar esta fila por un error en la configuración de la tabla. Hablar con soporte.");
        return;
      }

      var data = cellDataTables.data();
      this.Create_Original_Values(table_name, nombreRow, nombreColumna, JSON.parse(JSON.stringify(data)));
      var newContent;

      //detect if it is an array
      if (Array.isArray(data)) {
        newContent = data.filter((archivo) => archivo != link);
        //detect if it is an empty array
        if (newContent.length == 0) {
          newContent = [];
        }
        cellDataTables.data(newContent).draw(false);
      } else {
        //detect if it is a string
        if (typeof data == "string") {
          if (data == link) {
            cellDataTables.data([]).draw(false);
            newContent = [];
          }
        }
      }
      ENTABLADOR._.addChanges(table_name, nombreRow, nombreColumna, newContent);
      // eliminar de filesUploads
      var CAMBIOS_TABLAS = ENTABLADOR._.CAMBIOS_TABLAS;

      if (CAMBIOS_TABLAS[table_name]) {
        CAMBIOS_TABLAS[table_name].filesUploads = CAMBIOS_TABLAS[table_name].filesUploads.filter((archivo) => archivo.url != link);
      }

      // añadir class .td-editado
      $(cellDataTables.node()).addClass("td-editado").attr("title", "Archivos Editados");
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
      if (columnKey == null || columnKey === "") {
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
      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] .ENTABLADOR_CAMPO").text(secondary_key ? secondary_key : "Editando");

      /*
      ##################################################
      ##                RESETEAR MODAL                ##
      ##################################################
      Considerar que si no está especificado en inputsTypes, se pondrá como "text"
      */
      var inputsTypes = ENT_TABLA.ENTABLADOR.inputsTypes;
      this.Modal_Editor_Obj_files = {};
      this.Modal_Editor_Obj_files_deletedURL = {};
      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] input").val("");
      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] textarea").val("");
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
          if (inputsTypes && inputsTypes[key] == "checkbox") {
            if (value == undefined || value === "") {
              value = "undefined";
            }
            $("#ENTABLADOR-" + table_name + "-" + key + "-" + value).prop("checked", true);
          } else if (inputsTypes && inputsTypes[key] == "file") {
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

      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] ").modal("show");

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
      // console.log(row);
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
      // console.log(row);
      var Eliminados = ENTABLADOR._.CAMBIOS_TABLAS[tabla_nombre];
      // remover de los eliminados
      if (Eliminados) {
        var index = Eliminados.eliminados.indexOf(row[tabla.ENTABLADOR.key]);
        if (index > -1) {
          Eliminados.eliminados.splice(index, 1);
        }
      }
      console.log("Cambios", Eliminados);
    },
    crearInputModal(input, titleColumn, realNameColumn, table_name) {
      // console.log(input, titleColumn, realNameColumn, table_name);
      if (input == undefined || input === "") {
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
      } else if (input == "textarea") {
        div = `
        <div class="form-group row">
          <label for="${id}" class="col-sm-3 col-form-label">${titleColumn}</label>
          <div class="col-sm-9">
            <textarea class="form-control" id="${id}" placeholder="${titleColumn}" rows="5"></textarea>
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
        var cols = window[table_name].settings().init().aoColumns;
        var columnIndex;
        for (let i = 0; i < cols.length; i++) {
          if (cols[i].data == realNameColumn) {
            columnIndex = i;
            break;
          }
        }

        // var columnIndex = ENT_TABLA.settings().init().aoColumns[columnIndex].data
        div = `
        <div class="form-group row">
          <div for="${id}" class="col-sm-3 col-form-label">${titleColumn}</div>
          <div class="col-sm-9">
            <div class="ENTABLADOR-files mt-2" id="${id}-files"></div>
            <label data-field="${realNameColumn}" for="ENTABLADOR_FILE_UPLOADER" onclick="ENTABLADOR._.LabelClick={ fromModal: true, field: '${realNameColumn}', table_name: '${table_name}', column: ${columnIndex} };" class="btn btn-success btn-sm mb-0 mt-2">Subir Archivos</label>
            <button data-field="${realNameColumn}" class="btn btn-success btn-sm mb-0 mt-2" style="display:none;" disabled><div class="spinner-border spinner-border-sm mr-1"></div>Subir Archivos</button>
          </div>
        </div>`;
      }
      return div;
    },
    crearModal: function (table_name, nombreColumnaClick, row) {
      var debug = false;
      if ($('.ENTABLADOR_EDICION_MODAL[data-table-name="' + table_name + '"]').length < 1) {
        // console.log("No existe modal para la tabla '" + table_name + "'. Creando...");
        var ENT_TABLA = window[table_name];
        var div = `
          <div data-table-name="${table_name}" class="ENTABLADOR_EDICION_MODAL modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog${window[table_name].ENTABLADOR.modalLarge ? " modal-lg" : ""}" style="transition: max-width 0.2s;">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" style="overflow: hidden; text-overflow: ellipsis;">Editar Datos | <span class="ENTABLADOR_CAMPO text-uppercase font-wight-bold text-primary">-</span></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer" style="justify-content: space-between;">
                  <div>
                    <button type="button" class="btn btn-info" onclick="ENTABLADOR.id('${table_name}').modalLarge('cambiar')">Cambiar Tamaño</button>
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
        $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "']").on("hidden.bs.modal", function () {
          ENTABLADOR._.ultimoTdClickeadoPorModal = null;
        });
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
        //   if (columnsTitle[i] == undefined || columnsTitle[i] === "") {
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
          // console.log("!!!!!!! |- ", inputsTypes);
          var input = inputsTypes ? inputsTypes[COLUMNS[i][0]] : undefined;
          html += this.crearInputModal(input, titleColumn, COLUMNS[i][0], table_name);

          //poner en ENTABLADOR._.Modal_Editor_Obj
          /*
              MEJOR SOLO PONER LOS FILES, Y CUANDO SE
              GUARDEN LOS CAMBIOS HACERLO EN TODOS LOS CAMPOS
          */
          // ENTABLADOR._.Modal_Editor_Obj[COLUMNS[i][0]] = row[COLUMNS[i][0]];
        }
        $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] .modal-body").append(html);
        // crear event on keyup del input de seccundary_key y ponerlo de titulo
        if (ENT_TABLA.ENTABLADOR.secondary_key) {
          $("#ENTABLADOR-" + table_name + "-" + ENT_TABLA.ENTABLADOR.secondary_key).on("input", function () {
            $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] .ENTABLADOR_CAMPO").text($(this).val() ? $(this).val() : "Editando");
          });
        }
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
    EliminarFileModal: function (url, table_name, column) {
      var arr = this.Modal_Editor_Obj[column];
      this.Modal_Editor_Obj[column] = arr.filter((arr) => arr != url);
      // console.log("column --->", column);

      if (!this.Modal_Editor_Obj_files_deletedURL[column]) {
        this.Modal_Editor_Obj_files_deletedURL[column] = [];
      }
      this.Modal_Editor_Obj_files_deletedURL[column].push(url);
      this.renderImagesOnModal(false, table_name, column);

      // eliminar de ENTABLADOR._.Modal_Editor_Obj_files
      // console.log("ENTABLADOR._.Modal_Editor_Obj_files", ENTABLADOR._.Modal_Editor_Obj_files);
      var Editor_files = ENTABLADOR._.Modal_Editor_Obj_files[column];
      if (Editor_files) {
        for (let i = 0; i < Editor_files.length; i++) {
          if (Editor_files[i].url == url) {
            console.log("Eliminado del Editor_files:", url, Editor_files[i]);

            Editor_files.splice(i, 1);
            if (Editor_files.length == 0) {
              delete ENTABLADOR._.Modal_Editor_Obj_files[column];
            }
            break;
          }
        }
      }
    },
    renderImagesOnModal: function (files, table_name, column) {
      // console.log("renderImagesOnModal ->", files, table_name, column);

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
        <div style="position:relative;display: inline-block;" class="ENTABLADOR-tabla-anchor">
          <button onclick="ENTABLADOR._.EliminarFileModal('${files[i]}', '${table_name}', '${column}')" class="eliminarFoto">&times;</button>
          <a href="${files[i]}" target="_blank" style="cursor: zoom-in;">
            <img src="${files[i]}" alt="Foto" class="img-thumbnail m-1" onerror="this.onerror=null;this.parentElement.parentElement.style.paddingTop = '7px';ENTABLADOR._.ImgOnError(this)">
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
        if (inputsTypes && inputsTypes[column] == "checkbox") {
          var value = $('.ENTABLADOR_EDICION_MODAL[data-table-name="' + table_name + '"] input[name="ENTABLADOR-' + table_name + "-" + column + '"]:checked').attr("data-entablador-value");

          value = this.parseBoolean("boolean", value);
          this.Modal_Editor_Obj[column] = value;
        } else if (inputsTypes === undefined || inputsTypes[column] != "file") {
          //input normal (text). tener en cuenta que 'file' ya fue guardado en renderImagesOnModal
          var value = $("#ENTABLADOR-" + table_name + "-" + column).val();
          if ($("#ENTABLADOR-" + table_name + "-" + column + "[type='number']").length > 0 && value !== "") {
            // es un number
            value = this.extractNumberFromString(value);
          }
          this.Modal_Editor_Obj[column] = value;
        }
      }
      // console.log("ENTABLADOR._.Modal_Editor_Obj", this.Modal_Editor_Obj);

      /*  ##################################################
          ##       DETECTAR DIFERENCIAS Y GUARDARLAS      ##
          ################################################## */
      var rowOriginal = ENT_TABLA.row(this.ultimoTdClickeadoPorModal).data();
      var rowNueva = this.Modal_Editor_Obj;
      var rowChanged = JSON.parse(JSON.stringify(rowOriginal));
      var keysChanged = [];

      // console.log("rowOriginal", rowOriginal);
      // console.log("rowNueva", rowNueva);

      //considerar que pueden haber más columnas en rowNueva que en rowOriginal. rowNueva > rowOriginal
      for (const nombreCol in rowNueva) {
        if (Object.hasOwnProperty.call(rowNueva, nombreCol)) {
          var esArrayVacio = Array.isArray(rowNueva[nombreCol]) && rowNueva[nombreCol].length == 0;
          // comentario del futuro sin idea de que escribí aquí en el codigo de abajo:
          // creo que es para filtrar los datos que estén vacíos"" desde el input para evitar creer que
          // como en los datos originales es undefined, entonces "" !== undefined y creerá que actualizó datos,
          // cosa que no es el resultado esperado. por eso ignorar.
          if ((rowNueva[nombreCol] === "" || esArrayVacio) && rowOriginal[nombreCol] === undefined && (inputsTypes === undefined || inputsTypes[nombreCol] != "checkbox")) {
            continue;
          }
          //check if it is a checkbox
          if (inputsTypes && inputsTypes[nombreCol] == "checkbox") {
            rowNueva[nombreCol] = this.parseBoolean("boolean", rowNueva[nombreCol]);
            rowOriginal[nombreCol] = this.parseBoolean("boolean", rowOriginal[nombreCol]);
          }
          if (rowNueva[nombreCol] != rowOriginal[nombreCol]) {
            rowChanged[nombreCol] = rowNueva[nombreCol];
            keysChanged.push(nombreCol);
            ENTABLADOR._.addChanges(table_name, rowOriginal[ENT_TABLA.ENTABLADOR.key], nombreCol, rowNueva[nombreCol]);
            if (typeof rowOriginal[nombreCol] === "object") {
              var orgContent = JSON.parse(JSON.stringify(rowOriginal[nombreCol]));
            } else {
              var orgContent = rowOriginal[nombreCol];
            }
            ENTABLADOR._.Create_Original_Values(table_name, rowOriginal[ENT_TABLA.ENTABLADOR.key], nombreCol, orgContent);
            // Subir Modal_Editor_Obj_files
            if (inputsTypes && inputsTypes[nombreCol] == "file") {
              // Subir files nuevos subidos a CAMBIOS_TABLAS.filesUploads
              if (this.Modal_Editor_Obj_files[nombreCol] && Object.keys(this.Modal_Editor_Obj_files[nombreCol]).length > 0) {
                ENTABLADOR._.CAMBIOS_TABLAS[table_name].filesUploads.push(...this.Modal_Editor_Obj_files[nombreCol]);
              }
              // Actualizar files eliminados a CAMBIOS_TABLAS.filesUploads
              var deletedURLs = this.Modal_Editor_Obj_files_deletedURL;
              if (deletedURLs[nombreCol] && deletedURLs[nombreCol].length > 0) {
                // console.log("deletedURLs", deletedURLs);

                for (let i = 0; i < deletedURLs[nombreCol].length; i++) {
                  const url = deletedURLs[nombreCol][i];
                  // console.log("url", url);
                  var filesUploads = this.CAMBIOS_TABLAS[table_name].filesUploads;
                  for (let i = 0; i < filesUploads.length; i++) {
                    if (filesUploads[i].url === url) {
                      filesUploads.splice(i, 1);
                    }
                  }
                }
              }
            }
          }
        }
      }

      // poner rowChanged en la tabla
      var tr = $(this.ultimoTdClickeadoPorModal).closest("tr");
      var row = ENT_TABLA.row(tr);
      row.data(rowChanged).draw(false);

      /*  ##################################################
          ##                AGREGAR CLASSES               ##
          ################################################## */
      // console.log("keysChanged", keysChanged);

      for (let i = 0; i < keysChanged.length; i++) {
        var key = keysChanged[i];
        // var cell = $(this.ultimoTdClickeadoPorModal).closest("tr").find(`td[data-key="${key}"]`);

        var columnIndex = TABLA.column(key + ":name").index("visible"); // Obtén el índice de la columna

        var cell = $(this.ultimoTdClickeadoPorModal).closest("tr").find("td").eq(columnIndex);
        // console.log(cell);

        // if (cell.find("svg").length < 1) {
        //   cell.append(ENTABLADOR._.SVGs.EditedSVG);
        // }
        cell.addClass("td-editado text-primary font-weight-bold");
        cell.attr("title", "Campo Editado");
      }
      // cerrar modal
      $(".ENTABLADOR_EDICION_MODAL[data-table-name='" + table_name + "'] ").modal("hide");
      // console.log(this.ultimoTdClickeadoPorModal);
    },
    parseBoolean: function (expectedValue, value) {
      var debug = false;
      if (expectedValue == "string" || expectedValue == "boolean") {
        if (arguments.length < 2) {
          console.error("Error: No se ha dado el valor en parseBoolean()");
          return "ERROR! parseBoolean()";
        }
        if (expectedValue == "string") {
          if (value === true) {
            return "true";
          } else if (value === false) {
            return "false";
          } else if (value === undefined || value === "") {
            return "undefined";
          } else if (["true", "false", "undefined"].includes(value)) {
            return value;
          } else {
            if (debug) {
              console.warn("En parseBoolean('string', value) se dio un valor desconocido ('" + value + "'). Se ha devuelto string 'undefined'.");
            }
            return "undefined";
          }
        } else if (expectedValue == "boolean") {
          if (value === "true") {
            return true;
          } else if (value === "false") {
            return false;
          } else if (value === "undefined" || value === "") {
            return undefined;
          } else if ([true, false, undefined].includes(value)) {
            return value;
          } else {
            if (value != undefined && debug) {
              console.warn("En parseBoolean('boolean', value) se dio un valor desconocido ('" + value + "'). Se ha devuelto undefined.");
            }
            return undefined;
          }
        }
      } else {
        console.error("Error: El argumento 1 (expectedValue) no es válido. Se esperaba 'string' o 'boolean'. Se ha recibido '" + expectedValue + "'.");
        return "ERROR! parseBoolean()";
      }
    },
    extractNumberFromString: function (input) {
      // return parseInt(input.toString().replace(/\D/g, ""), 10);
      // return Number(input); // con esto habilita decimales y numeros negativos. es problema si porej. "asd32asd"
      let cleaned = input
        .toString()
        .replace(/[^0-9.-]/g, "") // quita todo que no sea: digito, '-' y '.'
        .replace(/(?!^)-/g, "") // quita todos los '-' que no estén en el primer caracter
        .replace(/(?<=\..*)\./g, ""); // quita todos los puntos que esten desp del primero
      return Number(cleaned);
    },
    isNumeric: function (input) {
      return /^\d{1,3}(?:,\d{3})*(?:\.\d+)?$/.test(input);
    },
    extractOrderIterations: 0,
    extractOrder: function (order) {
      if (this.extractOrderIterations > 10) {
        this.extractOrderIterations = 0;
        console.error("Error: Se ha detectado un posible bucle infinito en extractOrder().");
        return;
      }
      for (let i = 0; i < order.length; i++) {
        if (Array.isArray(order[i])) {
          ENTABLADOR._.extractOrderIterations++;
          return ENTABLADOR._.extractOrder(order[i]);
        }
        if (order[i] === "asc" || order[i] === "desc") {
          this.extractOrderIterations = 0;
          return order[i];
        }
      }
    },
    Create_Original_Values: function (table_name, nombreRow, nombreColumna, originalContent) {
      var exists_OriginalValue = false;
      if (this.ORIGINAL_VALUES[table_name] && this.ORIGINAL_VALUES[table_name][nombreRow] && this.ORIGINAL_VALUES[table_name][nombreRow][nombreColumna]) {
        exists_OriginalValue = true;
      }
      if (!exists_OriginalValue) {
        if (this.ORIGINAL_VALUES[table_name] === undefined) {
          this.ORIGINAL_VALUES[table_name] = {};
        }
        this.ORIGINAL_VALUES[table_name][nombreRow] = this.ORIGINAL_VALUES[table_name][nombreRow] || {};
        this.ORIGINAL_VALUES[table_name][nombreRow][nombreColumna] = originalContent;
      }
      console.log("_.ORIGINAL_VALUES", this.ORIGINAL_VALUES);
    },
  };
  return {
    id,
    crear,
    _,
  };
})();

ENTABLADOR.crear({
  id: "TABLA",
  // replaceName: false,
  customOrder: "NORMAL_SPACES", //SPACES_ON_BOTTOM
  // createButtons: false,
  // autoRender: false,
  // createDefaultContent: false, //si es false, al tratar de renderizar da error si no tiene datos (creo?). tiene que ver si no se usa un renderizado en la columna, creo.
  meta: {
    key: "id",
    secondary_key: "nombre",
    inputsTypes: {
      nombre: "text",
      fechaNacimiento: "date",
      humano: "checkbox",
      archivos: "file",
      edad: "number",
      notas: "textarea",
    },
  },
  columns: [
    { data: "id", visible: false },
    { data: "nombre", title: "Nombre", class: "editable" },
    { data: "edad", title: "Edad", class: "editable" },
    { data: "fechaNacimiento", title: "Fecha de Nacimiento", class: "editable" },
    { data: "notas", title: "Notas", class: "editable" },
    { data: "humano", title: "Humano", class: "editable" },
    { data: "archivos", title: "Archivos", class: "editable" },
  ],
  columnDefs: [
    {
      targets: 1, // nombre
      render: function (data, type, row, meta) {
        return data ? data.toUpperCase() : data;
      },
    },
    {
      targets: 3, // fechaNacimiento
      render: function (data, type, row, meta) {
        //detect if it is a date
        // console.log(data); OJO: HAY UN ERROR QUE NO SE REPLICAR QUE SE PONE LA FECHA CON NaN
        if (data == null || data === "") {
          return data;
        }
        var fecha = new Date(data);
        return `${fecha.getDate()} ${ENTABLADOR._.MESES[fecha.getMonth()]} ${fecha.getFullYear()}`;
      },
    },
    {
      targets: 5, // humano
      render: function (data, type, row, meta) {
        var value = ENTABLADOR._.parseBoolean("boolean", data);
        if (value) {
          return "si!";
        } else if (value === false) {
          return "no!";
        } else if (value === undefined) {
          return;
        }
      },
    },
  ],
  order: [6, "asc"],
})
  .editable(true)
  // .editType("modal")
  // .modalLarge(true)
  // .longTextareaBehavior("modal")
  .requiredFields(["nombre", "id"])
  .add([
    {
      id: 1,
      nombre: "Caliope",
      edad: 30,
      fechaNacimiento: "2000-12-10",
      humano: false,
      notas:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet feugiat nunc, a imperdiet nisl. Curabitur sollicitudin turpis ex, vitae rutrum velit vulputate ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer non felis commodo, congue ligula quis, luctus odio. Fusce vel sapien non elit consectetur malesuada quis mollis libero. Suspendisse elementum odio et nisi venenatis pellentesque. Aenean a semper felis. Cras efficitur leo id vestibulum molestie. In eget diam ligula. Integer nec mollis leo, iaculis accumsan orci. In venenatis velit tortor, in tincidunt justo egestas id. Duis vel odio cursus, accumsan dui eleifend, faucibus nulla. Nam pharetra facilisis dolor in tempus. Praesent consequat fermentum lorem, vel pulvinar lacus malesuada in.",
      archivos: ["https://dummyimage.com/200.png", "https://dummyimage.com/210.png", "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf", "https://dummyimage.com/210"],
    },
    { id: 2, nombre: "Matthew", edad: 18, fechaNacimiento: "2010-11-23", humano: true, archivos: "https://dummyimage.com/200" },
    { id: 3, nombre: "Lucien's", edad: 35, fechaNacimiento: "1992-02-17", humano: "false", archivos: ["https://dummyimage.com/200.png", "https://dummyimage.com/200"] },
    { id: 4, nombre: "John Dee", edad: -30, fechaNacimiento: "2000-04-28", humano: "", archivos: "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf" },
    { id: 5, nombre: "Morpheus", edad: 25, fechaNacimiento: "2000-08-04", archivos: "" },
    { id: 6, nombre: "Corinthian", edad: 40, fechaNacimiento: "2000-01-12", humano: "true", notas: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet feugiat nunc, a imperdiet nisl." },
    { id: 7 },
  ]);
// .uploadData([{ nombre: "10!", archivosa: "file lol" }]);

// Add css rule
var style = document.createElement("style");
style.innerHTML = `/* NO OLVIDARSE DE METER EL CSS DE /style.css AQUÍ EN PROD */`;
document.head.appendChild(style);

// $("#TABLA tbody tr:eq(1) td:eq(6)").click();
