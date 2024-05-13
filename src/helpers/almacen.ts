import {Almacen} from '../database/almacen.db';
import { almacenCrearDTO, almacenEditarDTO, almacenVerDTO } from '../models/almacen.model';




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

const inactivarAlmacen=async(id:number):Promise<almacenVerDTO>=>{
       
    let almacenes:Almacen[]= (await Almacen.update({estado:'I'},{
        where:{id,},
        returning:true
}))[1];

    return almacenes[0];
};

const editarAlmacen=async(id:number,editar:almacenEditarDTO):Promise<almacenVerDTO>=>{
       
    let almacenes:any= await Almacen.update(editar,{
        where:{id}
});

    return almacenes;
};

const obtenerAlmacenId=async(id:number):Promise<Almacen|null>=>{
       
    let almacen= await Almacen.findByPk(id,{
        raw:true
});

    return almacen;
};


export {crearAlmacen,obtenerAlmacenes,inactivarAlmacen,editarAlmacen,obtenerAlmacenId};