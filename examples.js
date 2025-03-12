// EJEMPLO DE COMO MANDAR LOS FILES UNA VEZ GUARDADO EN CAMBIOS.
[
  {
    file: FILE1,
    ubicaciones: [
      {
        primaryKey: "2",
        column: "archivos",
      },
    ],
  },
];
// EL COMO USAR EL FILE EN EL FRONTEND
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Uploader Optimizado</title>
</head>
<body>

    <input type="file" id="fileInput" accept="image/*" multiple>
    <div id="preview" style="display: flex; flex-wrap: wrap; gap: 10px;"></div>

    <script>
        document.getElementById('fileInput').addEventListener('change', function(event) {
            const files = event.target.files;
            for (const file of files) {
                uploaded(file);
            }
        });

        function uploaded(file) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file); // Usa Blob URL en lugar de base64
            img.width = 150;
            img.height = 150;
            img.style.objectFit = "cover";
            img.onload = () => URL.revokeObjectURL(img.src); // Libera memoria cuando ya no se use

            document.getElementById('preview').appendChild(img);
        }
    </script>

</body>
</html>
