const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EtapaSchema = new Schema(
  {
    titulo: { type: String, required: false },
    intro: { type: String, required: false },
    fecha: { type: Date, required: false },
    textoLargo: { type: String, required: false },
    viaje: { type: String, required: false },
    pais: { type: String, required: false },
    geoJson: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const EtapaModel = mongoose.model("Etapas", EtapaSchema);

module.exports = EtapaModel;
