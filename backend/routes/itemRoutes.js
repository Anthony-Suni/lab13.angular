const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const multer = require("multer");
const path = require("path");

// Configuración de multer para almacenar las imágenes en una carpeta específica
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // Carpeta donde se almacenarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nombre de archivo único
  },
});

const upload = multer({ storage: storage });

// Ruta para subir la imagen
router.post("/upload", upload.single("images"), (req, res) => {
  // Aquí puedes realizar acciones adicionales, como guardar la ruta de la imagen en la base de datos
  res.json({ message: "Imagen cargada exitosamente" });
});

// Obtener todos los elementos
router.get("/items", itemController.getItems);

// Obtener un elemento por su ID
router.get("/items/:id", itemController.getItemById);

// Crear un nuevo elemento
router.post("/items", upload.single("image"), itemController.createItem);

// Actualizar un elemento existente
router.put("/items/:id", itemController.updateItem);

// Eliminar un elemento existente
router.delete("/items/:id", itemController.deleteItem);

// Servir archivos estáticos desde la carpeta "public"
router.use("/images", express.static(path.join(__dirname, "../public/images")));

module.exports = router;

