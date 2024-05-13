import {Almacen} from '../database/almacen.db';
import { almacenCrearDTO, almacenVerDTO } from '../models/almacen.model';




const crearAlmacen=async(crear:almacenCrearDTO):Promise<Almacen>=>{

    let almacencreado:Almacen=await Almacen.create(crear,{
        raw:true
    })

    return almacencreado;
};


const obtenerAlmacenes=async():Promise<almacenVerDTO[]>=>{

    let almacenes:almacenVerDTO[]= await Almacen.findAll({
        where:{
            estado:'A'
        }
    })

    return almacenes;
};



export {crearAlmacen,obtenerAlmacenes};