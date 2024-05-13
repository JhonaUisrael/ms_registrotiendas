import { Request, Response } from "express";
import {crearAlmacen,obtenerAlmacenes,inactivarAlmacen,editarAlmacen, obtenerAlmacenId} from '../helpers/almacen';


const creaAlmacen=async(req:Request,res:Response)=>{

    const crear= await crearAlmacen(req.body);

    res.status(201).json(crear);
};


const listaAlmacenes=async(req:Request,res:Response)=>{

    const almacenes= await obtenerAlmacenes();

    res.json(almacenes);
};

const inactivarAlmacenes=async(req:Request,res:Response)=>{

    const {id} =req.params;
    const almacenes= await inactivarAlmacen(parseInt(id));

    res.json(almacenes);
};

const actualizarAlmacen=async(req:Request,res:Response)=>{

    const {id} =req.params;
    
    const almacenes= await editarAlmacen(parseInt(id),req.body);

    res.json(almacenes);
};

const obtenerAlmacen=async(req:Request,res:Response)=>{

    const {id} =req.params;
    
    const almacenes= await obtenerAlmacenId(parseInt(id));

    res.json(almacenes);
};

export {creaAlmacen,listaAlmacenes,inactivarAlmacenes,actualizarAlmacen,obtenerAlmacen};