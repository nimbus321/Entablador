// $.fn.dataTable.ext.order["SPACES_ON_BOTTOM"] = function (settings, col) {
const SPACES_ON_BOTTOM = function (settings, col) {
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
      // console.log("| data --->", data);
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
      if (data === "" || data === undefined) {
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
          return loguear(isValidDate ? Number(D.getTime()) : "0");
        } else if (inpType == "number") {
          return loguear(Number(data));
        }
      }
      // console.warn("Failsafe - data:", String(data));
      return loguear(String(data));
    });
};
