import { Request, Response } from "express";
import {crearUsuario,obtenerUsuarioes,inactivarUsuario,editarUsuario, obtenerUsuarioId,autenticarUsuario} from '../helpers/usuario';


const creaUsuario=async(req:Request,res:Response)=>{

    const crear= await crearUsuario(req.body);

    res.status(201).json(crear);
};

const autenticaUsuario=async(req:Request,res:Response)=>{

    const crear= await autenticarUsuario(req.body);

    res.json(crear);
};

const listaUsuarioes=async(req:Request,res:Response)=>{

    const Usuarioes= await obtenerUsuarioes();

    res.json(Usuarioes);
};

const inactivarUsuarioes=async(req:Request,res:Response)=>{

    const {id} =req.params;
    const Usuarioes= await inactivarUsuario(parseInt(id));

    res.json(Usuarioes);
};

const actualizarUsuario=async(req:Request,res:Response)=>{

    const {id} =req.params;
    
    const Usuarioes= await editarUsuario(parseInt(id),req.body);

    res.json(Usuarioes);
};

const obtenerUsuario=async(req:Request,res:Response)=>{

    const {id} =req.params;
    
    const Usuarioes= await obtenerUsuarioId(parseInt(id));

    res.json(Usuarioes);
};

export {creaUsuario,listaUsuarioes,inactivarUsuarioes,actualizarUsuario,obtenerUsuario,autenticaUsuario};