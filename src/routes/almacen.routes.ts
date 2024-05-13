import { Router } from 'express';
import { actualizarAlmacen, creaAlmacen, inactivarAlmacenes, listaAlmacenes, obtenerAlmacen } from '../controllers/almacen.controller';



const rutaAlmacen = Router();

rutaAlmacen.post('/crear', creaAlmacen);
rutaAlmacen.get('/listar', listaAlmacenes);
rutaAlmacen.put('/:id', actualizarAlmacen);
rutaAlmacen.delete('/:id', inactivarAlmacenes);
rutaAlmacen.get('/:id', obtenerAlmacen);


export default rutaAlmacen;
