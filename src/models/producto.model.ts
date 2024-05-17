import {ProductoAttributes} from '../database/producto.db';


interface ProductoCrearDTO extends Pick<ProductoAttributes,'AlmacenId'|'Imagen'|'Nombre'|'Precio'|'FechaCducidad'>{

}

interface ProductoEditarDTO extends Pick<ProductoAttributes,'estado'>{}

interface ProductoVerDTO extends ProductoAttributes{

}

export {ProductoCrearDTO,ProductoEditarDTO,ProductoVerDTO};