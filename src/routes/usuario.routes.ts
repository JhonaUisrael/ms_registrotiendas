import { Router } from 'express';
import { actualizarUsuario, creaUsuario, inactivarUsuarioes, listaUsuarioes, obtenerUsuario,autenticaUsuario } from '../controllers/usuario.controller';



const rutaUsuario = Router();

rutaUsuario.post('/autentica', autenticaUsuario);
rutaUsuario.post('/crear', creaUsuario);
rutaUsuario.get('/listar', listaUsuarioes);
rutaUsuario.put('/:id', actualizarUsuario);
rutaUsuario.delete('/:id', inactivarUsuarioes);
rutaUsuario.get('/:id', obtenerUsuario);


export default rutaUsuario;
