import {UsuarioAttributes} from '../database/usuario.db';


interface UsuarioCrearDTO extends Pick<UsuarioAttributes,'Contrasena'|'NombreUsuario'|'Correo'>{

}

interface UsuarioEditarDTO extends Pick<UsuarioAttributes,'estado'>{}

interface UsuarioVerDTO extends UsuarioAttributes{

}


interface UsuarioAutenticar extends Pick<UsuarioAttributes,'Correo'|'Contrasena'>{

}
export {UsuarioCrearDTO,UsuarioVerDTO,UsuarioEditarDTO,UsuarioAutenticar};