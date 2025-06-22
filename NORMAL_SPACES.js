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
      if (inputsTypes) {
        var inpType = inputsTypes[columnaNombre];
        // console.log("inpType", inpType);
        if (inpType == undefined) {
          return loguear(data);
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
          return loguear(isValidDate ? String(D.getTime()) : "0");
        } else if (inpType == "text" || inpType == "number") {
          return loguear(data == undefined || data === "" ? data : String(data));
        }
      }
      // console.warn("Failsafe - data:", String(data));
      return loguear(String(data));
    });
};
