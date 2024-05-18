import { Router } from 'express';
import { cargarImagenCloudynary } from '../controllers/multimedia.controller';
const rutaMultimedia = Router();



rutaMultimedia.post('/cargar',cargarImagenCloudynary)


export default rutaMultimedia;
