import mongoose from "mongoose"

const superheroSchema = new mongoose.Schema({
    creador: String,
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    password:[String],
    autor: { type: String, default: 'Javier Acosta' },

    createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-01' })

export default mongoose.model('Superhero', superheroSchema)
