import { Request, Response } from "express";
import {crearProducto,obtenerProductoId,inactivarProducto,editarProducto, obtenerProductoes, obtenerProductosPorAlmacenId} from '../helpers/producto';


const creaProducto=async(req:Request,res:Response)=>{

    const crear= await crearProducto(req.body);

    res.status(201).json(crear);
};


const listaProductoes=async(req:Request,res:Response)=>{

    const Productoes= await obtenerProductoes();

    res.json(Productoes);
};

const listaProductosAlmacen=async(req:Request,res:Response)=>{

    const {id}=req.params;
    const ProductosAlmacen= await obtenerProductosPorAlmacenId(parseInt(id));

    res.json(ProductosAlmacen);
};

const inactivarProductoes=async(req:Request,res:Response)=>{

    const {id} =req.params;
    const Productoes= await inactivarProducto(parseInt(id));

    res.json(Productoes);
};

const actualizarProducto=async(req:Request,res:Response)=>{

    const {id} =req.params;
    
    const Productoes= await editarProducto(parseInt(id),req.body);

    res.json(Productoes);
};

const obtenerProducto=async(req:Request,res:Response)=>{

    const {id} =req.params;
    
    const Productoes= await obtenerProductoId(parseInt(id));

    res.json(Productoes);
};

export {creaProducto,listaProductoes,inactivarProductoes,actualizarProducto,obtenerProducto,listaProductosAlmacen};