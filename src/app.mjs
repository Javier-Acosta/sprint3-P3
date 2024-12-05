import express from 'express';

import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import router from './routes/superHeroRoutes.mjs';

import {fileURLToPath} from 'url';
import {dirname,join} from 'path';

const app = express();
const PORT = 3000;


// dirname 
const _filename= fileURLToPath(import.meta.url);
 const _dirname = dirname(_filename);

// carpeta estática
app.use(express.static(join(_dirname, 'piblic')));


// directorio de vistas y motor de plantillas
app.set ('views', join(_dirname, 'src','views'));
app.set('view engie', 'ejs');

app.use(express.json())

connectDB();
app.use('/api', router);

app.use((req, res) => {
    res.status(400).send({ mensaje: "Ruta no encontrada" });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});