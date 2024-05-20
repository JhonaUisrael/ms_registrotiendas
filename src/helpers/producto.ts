import { Almacen } from '../database/almacen.db';
import { Producto } from '../database/producto.db';
import { ProductoCrearDTO, ProductoVerDTO, ProductoEditarDTO } from '../models/producto.model';




const crearProducto = async (crear: ProductoCrearDTO): Promise<Producto> => {

    let Productocreado: Producto = await Producto.create(crear, {
        raw: true
    })

    return Productocreado;
};


const obtenerProductoes = async (): Promise<ProductoVerDTO[]> => {

    let Productoes: ProductoVerDTO[] = await Producto.findAll({
        where: {
            estado: 'A'
        },
        include: Almacen,

    })

    return Productoes;
};

const inactivarProducto = async (id: number): Promise<ProductoVerDTO> => {

    let Productoes: Producto[] = (await Producto.update({ estado: 'I' }, {
        where: { id, },
        returning: true
    }))[1];

    return Productoes[0];
};

const editarProducto = async (id: number, editar: ProductoEditarDTO): Promise<ProductoVerDTO> => {

    let Productoes: any = await Producto.update(editar, {
        where: { id }
    });

    return Productoes;
};

const obtenerProductoId = async (id: number): Promise<Producto | null> => {

    let producto = await Producto.findByPk(id, {
        raw: true,
    },
   
);

    return producto;
};

const obtenerProductosPorAlmacenId = async (idAlmacen: number): Promise<Producto[] | null> => {

    let productos = await Producto.findAll({
        raw: true,
        where:{
            AlmacenId:idAlmacen,
            estado:'A'
        }
    },
   
);

    return productos;
};


export { crearProducto, obtenerProductoes, inactivarProducto, editarProducto, obtenerProductoId,
    obtenerProductosPorAlmacenId
 };