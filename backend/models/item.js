const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Otros campos adicionales que desees para tu modelo
  director: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  // Campo de imagen
  image: {
    type: String, // Puedes almacenar la URL de la imagen o utilizar un campo de tipo Buffer para almacenar la imagen directamente
  },
});

module.exports = mongoose.model("Item", itemSchema);
