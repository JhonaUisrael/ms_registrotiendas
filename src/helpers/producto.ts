import {Producto} from '../database/producto.db';
import { ProductoCrearDTO, ProductoVerDTO, ProductoEditarDTO } from '../models/producto.model';
import { respuestaGenerica } from '../models/respuesta.model';




const crearProducto=async(crear:ProductoCrearDTO):Promise<respuestaGenerica>=>{

    let Productocreado:Producto=await Producto.create(crear,{
        raw:true
    })

    return {

        mensaje:'Producto creado correctamente',
        satisfatorio:true,
        datos: Productocreado
    };
};


const obtenerProductoes=async():Promise<respuestaGenerica>=>{

    let Productoes:ProductoVerDTO[]= await Producto.findAll({
        where:{
            estado:'A'
        }
    })

    return{

        mensaje:'Productos Obtenidos exitosamente',
        satisfatorio: true,
        datos: Productoes

    };
};

const inactivarProducto=async(id:number):Promise<respuestaGenerica>=>{
       
    let Productoes:Producto[]= (await Producto.update({estado:'I'},{
        where:{id,},
        returning:true
}))[1];

    return {
        mensaje:'Producto inactivado exitosamente',
        satisfatorio: true,
        datos: Productoes[0]
    };
};

const editarProducto=async(id:number,editar:ProductoEditarDTO):Promise<respuestaGenerica>=>{
       
    let Productoes:any= await Producto.update(editar,{
        where:{id}
});

    return {
        mensaje:'Productos editado exitosamente',
        satisfatorio: true,
        datos: Productoes
    };
};

const obtenerProductoId=async(id:number):Promise<respuestaGenerica>=>{
       
    let producto= await Producto.findByPk(id,{
        raw:true
});

    return {
        mensaje:'Producto obtenido exitosamente',
        satisfatorio: true,
        datos: producto
    };
};


export {crearProducto,obtenerProductoes,inactivarProducto,editarProducto,obtenerProductoId};