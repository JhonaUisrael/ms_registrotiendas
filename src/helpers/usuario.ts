import { Usuario} from '../database/usuario.db';
import { UsuarioCrearDTO, UsuarioEditarDTO, UsuarioVerDTO,UsuarioAutenticar } from '../models/usuario.model';
import {encriptarcontrasena,desencriptarcontrasena} from '../helpers/hashcontrasena';



const crearUsuario=async(crear:UsuarioCrearDTO):Promise<Usuario>=>{

    crear.Contrasena=await encriptarcontrasena(crear.Contrasena);
    
    let Usuariocreado:Usuario=await Usuario.create(crear,{
        raw:true
    })

    return Usuariocreado;
};

const autenticarUsuario=async(login:UsuarioAutenticar):Promise<boolean>=>{

    let usuario:Usuario|null=await Usuario.findOne({
        where:{
            Correo:login.Correo
        }
    })

    if(!usuario){
        return false;
    }
  return desencriptarcontrasena(login.Contrasena,usuario.Contrasena);
    
}


const obtenerUsuarioes=async():Promise<UsuarioVerDTO[]>=>{

    let Usuarioes:UsuarioVerDTO[]= await Usuario.findAll({
        where:{
            estado:'A'
        }
    })

    return Usuarioes;
};

const inactivarUsuario=async(id:number):Promise<UsuarioVerDTO>=>{
       
    let Usuarioes:Usuario[]= (await Usuario.update({estado:'I'},{
        where:{id,},
        returning:true
}))[1];

    return Usuarioes[0];
};

const editarUsuario=async(id:number,editar:UsuarioEditarDTO):Promise<UsuarioVerDTO>=>{
       
    let Usuarioes:any= await Usuario.update(editar,{
        where:{id}
});

    return Usuarioes;
};

const obtenerUsuarioId=async(id:number):Promise<Usuario|null>=>{
       
    let usuario= await Usuario.findByPk(id,{
        raw:true
});

    return usuario;
};


export {crearUsuario,obtenerUsuarioes,inactivarUsuario,editarUsuario,obtenerUsuarioId,autenticarUsuario};