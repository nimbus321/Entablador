/* #########################################
   ##            Entablador.js            ##
   ######################################### */

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
      editable(state) {
        console.log(ID + " -- editable: " + state);
        TABLA.table().node().classList.toggle("editable", state);
        return this;
      },
      guardar(state) {
        console.log(ID + " -- guardar: " + state);
        return this;
      },
      eliminar() {
        console.log(ID + " -- eliminar()");
        if (TABLA != null && !(TABLA instanceof Element)) {
          TABLA.destroy();
        }
        return this;
      },
      add(data) {
        console.log(ID + " -- add: " + data);

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
    $("#" + config.id + " tbody").on("click", "tr", function () {
      //detectar si la tabla tiene la class editable
      if ($(this).closest("table").hasClass("editable")) {
        console.log("CLICK!!!");
        console.log("EDITABLE!!!");
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
