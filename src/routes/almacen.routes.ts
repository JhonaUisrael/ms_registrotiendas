import { Router } from 'express';
import {creaAlmacen,listaAlmacenes} from '../controllers/almacen.controller';



const rutaAlmacen = Router();

rutaAlmacen.post('/crear',creaAlmacen);

rutaAlmacen.get('/listar',listaAlmacenes);

export default rutaAlmacen;
