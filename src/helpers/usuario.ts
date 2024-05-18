import { Usuario } from '../database/usuario.db';
import { UsuarioCrearDTO, UsuarioEditarDTO, UsuarioVerDTO, UsuarioAutenticar } from '../models/usuario.model';
import { encriptarcontrasena, desencriptarcontrasena } from '../helpers/hashcontrasena';
import { respuestaGenerica } from '../models/respuesta.model';



const crearUsuario = async (crear: UsuarioCrearDTO): Promise<respuestaGenerica> => {

    crear.Contrasena = await encriptarcontrasena(crear.Contrasena);

    let Usuariocreado: Usuario = await Usuario.create(crear, {
        raw: true
    })

    return {
        mensaje: 'Usuario creado correctamente',
        satisfatorio: true,
        datos: Usuariocreado
    };
};

const autenticarUsuario = async (login: UsuarioAutenticar): Promise<respuestaGenerica> => {

    let usuario: Usuario | null = await Usuario.findOne({
        where: {
            Correo: login.Correo
        }
    })

    if (!usuario) {
        return {
            mensaje: 'Usuario incorrecto',
            satisfatorio: false,
            datos: null
        };
    }
    let autenticado = desencriptarcontrasena(login.Contrasena, usuario.Contrasena);
    if (!autenticado) {
        return {
            mensaje: 'Contrseña incorrecta',
            satisfatorio: false,
            datos: null
        };
    }

    return {
        mensaje: `Bienvenido ${usuario.NombreUsuario}!`,
        satisfatorio: true,
        datos: autenticado
    };


}


const obtenerUsuarioes = async (): Promise<respuestaGenerica> => {

    let Usuarioes: UsuarioVerDTO[] = await Usuario.findAll({
        where: {
            estado: 'A'
        }
    })

    return   {
        mensaje: 'Usuarios obtenidos exitosamente',
        satisfatorio: true,
        datos: Usuarioes
    };;
};

const inactivarUsuario = async (id: number): Promise<respuestaGenerica> => {

    let Usuarioes: Usuario[] = (await Usuario.update({ estado: 'I' }, {
        where: { id, },
        returning: true
    }))[1];

    return   {
        mensaje: 'Usuarios inactivado exitosamente',
        satisfatorio: true,
        datos:  Usuarioes[0]
    };;
};

const editarUsuario = async (id: number, editar: UsuarioEditarDTO): Promise<respuestaGenerica> => {

    let Usuarioes: any = await Usuario.update(editar, {
        where: { id }
    });

    return   {
        mensaje: 'Usuarios editado exitosamente',
        satisfatorio: true,
        datos:  Usuarioes
    };
};

const obtenerUsuarioId = async (id: number): Promise<respuestaGenerica> => {

    let usuario = await Usuario.findByPk(id, {
        raw: true
    });

    return   {
        mensaje: 'Usuarios editado exitosamente',
        satisfatorio: true,
        datos:  usuario
    };
};


export { crearUsuario, obtenerUsuarioes, inactivarUsuario, editarUsuario, obtenerUsuarioId, autenticarUsuario };