import { Router } from 'express';
import { actualizarProducto, creaProducto, inactivarProductoes, listaProductoes, listaProductosAlmacen, obtenerProducto } from '../controllers/producto.controller';



const rutaProducto = Router();

rutaProducto.post('/crear', creaProducto);
rutaProducto.get('/listar', listaProductoes);
rutaProducto.get('/listar/almacen/:id', listaProductosAlmacen);

rutaProducto.put('/:id', actualizarProducto);
rutaProducto.delete('/:id', inactivarProductoes);
rutaProducto.get('/:id', obtenerProducto);


export default rutaProducto;
