import { Request, Response } from "express";
import {crearAlmacen,obtenerAlmacenes} from '../helpers/almacen';


const creaAlmacen=async(req:Request,res:Response)=>{

    const crear= await crearAlmacen(req.body);

    res.status(201).json(crear);
};


const listaAlmacenes=async(req:Request,res:Response)=>{

    const almacenes= await obtenerAlmacenes();

    res.json(almacenes);
};


export {creaAlmacen,listaAlmacenes};