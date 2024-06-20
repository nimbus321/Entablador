/* #########################################
   ##            Entablador.js            ##
   ######################################### */

var CAMBIOS_TABLAS = {};
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
    var TABLA = window[ID];
    if (TABLA instanceof Element) {
      console.error("Aún no has creado la tabla! '#" + ID + "' es solo un elemento HTML");
      return this;
    }
    const instancia = {
      id: ID,
      tipoEdicion(type) {
        // console.log(ID + " -- tipoEdicion: " + type);
        var tipos = ["inline", "modal"];
        if (!tipos.includes(type)) {
          console.error("Tipo de edición no válido. Tipos válidos:", tipos);
          return this;
        }
        //set data-editable-type
        TABLA.table().node().setAttribute("data-editable-type", type);

        // TABLA.table().node().classList.toggle("editable", state);
        return this;
      },
      editable(state) {
        // console.log(ID + " -- editable: " + state);
        TABLA.table().node().classList.toggle("editable", state);
        return this;
      },
      guardar(state) {
        // console.log(ID + " -- guardar: " + state);
        return this;
      },
      eliminar() {
        // console.log(ID + " -- eliminar()");
        if (TABLA != null && !(TABLA instanceof Element)) {
          TABLA.destroy();
        }
        return this;
      },
      add(data) {
        // console.log(ID + " -- add: " + data);

        if (TABLA != null && typeof TABLA == "object" && !(TABLA instanceof Element)) {
          /*
            [1,2,3]
            [[1,2,3],[4,5,6]]
            {a:1,b:2,c:3}
            [{a:1,b:2,c:3},{a:4,b:5,c:6}]
          */
          if (Array.isArray(data)) {
            if (typeof data[0] == "object") {
              TABLA.rows.add(data).draw();
            } else if (data[0] != null) {
              TABLA.row.add(data).draw();
            }
          } else {
            TABLA.row.add(data).draw();
          }
        }
        return this;
      },
      draw() {
        console.log("Drawing table");
        if (TABLA != null && !(TABLA instanceof Element)) {
          TABLA.draw();
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
        ENTABLADOR_EDITAR_TABLA(TABLA, this);
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
function ENTABLADOR_EDITAR_TABLA(TABLA, el) {
  console.log("-----------------------------------------------");
  console.log("TABLA", TABLA);
  console.log("el", el);

  var TablaID = TABLA.table().node().id;
  var cell = $(el);
  var row = TABLA.row(el).data();
  var indiceCelda = TABLA.cell(el).index().column;
  var originalContent = TABLA.cell(el).data();
  var nombreColumna = TABLA.settings().init().aoColumns[indiceCelda].data;

  // console.log("cell", cell);
  console.log("TablaID:", TablaID);
  console.log("row", row);
  console.log("indiceCelda", indiceCelda);
  console.log("originalContent", originalContent);
  console.log("nombreColumna", nombreColumna);

  console.log("-----------------------------------------------");
  if (!$(el).hasClass("editable")) {
    alert("Este campo no se puede editar.\nProbablemente porque se genera automáticamente.");
    return;
  }

  var type = "text";
  input = $(`<input type="${type}">`).val(originalContent);

  // input = $(`<input type="checkbox">`).prop("checked", originalContent);
  // input = $(`<input type="${type}">`).val(originalContent);

  // Evitar que el clic en el input borre su contenido
  input.on("click", function (event) {
    event.stopPropagation();
  });
  //console.log("cell", cell);
  cell.empty().html(input);
  // Enfocar en el input recién creado
  input.focus();
  input.on("keydown", function (event) {
    if (event.key === "Enter") {
      const target = event.target;
      if (target.tagName === "INPUT") {
        //console.log('Se presionó Enter en el input.');
        input.blur();
      }
    }
    if (event.key === "Escape") {
      const target = event.target;
      if (target.tagName === "INPUT") {
        //console.log('Se presionó Escape en el input.');
        cell.empty().html(originalContent);
      }
    }
  });
  // Manejar el evento 'blur' (pérdida de foco) en el input
  input.on("blur", function () {
    //detectar si es un checkbox
    newContent = input.val().replace(/"/g, "'").replace(/`/g, "'").trim();
    //console.log("newContent: ",newContent, "originalContent: ",originalContent);

    if (newContent == originalContent) {
      //console.log("No se editó nada");
      cell.empty().text(originalContent);
      return;
    }
    cell.empty().text(newContent);
    // Cambiar el color de la celda a 'text-primary'
    cell.addClass("td-editado"); // AÑADIR TAMBIEN ------ text-primary font-weight-bold
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
    TABLA.draw();
  });
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
  .draw();
*/
ENTABLADOR.crear({
  id: "TABLA",
  columns: [{ data: "id", visible: true }, { data: "nombre" }, { data: "edad", class: "editable" }, { data: "fechaNacimiento" }],
  // columnDefs: [
  //   {
  //     targets: 1, // Botones / Opciones
  //     render: function (data, type, row, meta) {
  //       return `lel`;
  //     },
  //   },
  // ],
})
  .editable(true)
  .tipoEdicion("modal")
  .add([
    { id: 1, nombre: "Juan", edad: 30, fechaNacimiento: "1991-01-01" },
    { id: 2, nombre: "Pedro", edad: 25, fechaNacimiento: "1996-01-01" },
    { id: 3, nombre: "Luis", edad: 35, fechaNacimiento: "1986-01-01" },
  ]);

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
/* TIPOS DE CAMPOS
  - text
  - number
  - checkbox
  - date
  
  - file
  - image

  - tel
*/
