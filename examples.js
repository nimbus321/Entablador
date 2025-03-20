// PARA GUARDAR CODIGO NESTED. (PARA GUARDARLO EN filesUploads y cambios en CAMBIOS)

const obj = {
  usuario: {
    nombre: "Juan",
    direccion: {
      ciudad: "Madrid",
      codigoPostal: 28001,
    },
  },
};
function getNestedValue(obj, path) {
  return path.reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), obj);
}

console.log(getNestedValue(obj, ["usuario", "direccion", "ciudad"])); // "Madrid"
console.log(getNestedValue(obj, ["usuario", "direccion", "pais"])); // undefined
