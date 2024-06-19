/* #########################################
   ##            Entablador.js            ##
   ######################################### */

const ENTABLADOR = (function () {
  // Función para crear el objeto con métodos encadenables
  function id(ID) {
    const instancia = {
      id: ID,
      editable(state) {
        console.log(ID + " -- editable: " + state);
        return this;
      },
      guardar(state) {
        console.log(ID + " -- guardar: " + state);
        return this;
      },
      eliminar(state) {
        console.log(ID + " -- eliminar: " + state);
        return this;
      },
      add(data) {
        console.log(ID + " -- add: " + data);
        return this;
      },
      draw() {
        console.log("Drawing table");
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
