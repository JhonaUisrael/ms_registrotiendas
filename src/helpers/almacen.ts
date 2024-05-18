import { Almacen } from '../database/almacen.db';
import { almacenCrearDTO, almacenEditarDTO, almacenVerDTO } from '../models/almacen.model';
import { respuestaGenerica } from '../models/respuesta.model';




const crearAlmacen = async (crear: almacenCrearDTO): Promise<respuestaGenerica> => {

    let almacencreado: Almacen = await Almacen.create(crear, {
        raw: true
    })

    return {
        mensaje: 'Almacen creado correctamente',
        satisfatorio: true,
        datos: almacencreado
    };
};


const obtenerAlmacenes = async (): Promise<respuestaGenerica> => {

    let almacenes: almacenVerDTO[] = await Almacen.findAll({
        where: {
            estado: 'A'
        }
    })

    return {
        mensaje: 'Almacenes recuperados correctamente',
        satisfatorio: true,
        datos: almacenes
    };
};

const inactivarAlmacen = async (id: number): Promise<respuestaGenerica> => {

    let almacenes: Almacen[] = (await Almacen.update({ estado: 'I' }, {
        where: { id, },
        returning: true
    }))[1];

    return {
        mensaje: 'Almacen inactivado correctamente',
        satisfatorio: true,
        datos: almacenes[0]
    };
};

const editarAlmacen = async (id: number, editar: almacenEditarDTO): Promise<respuestaGenerica> => {

    let almacenes: any = await Almacen.update(editar, {
        where: { id }
    });

    return {
        mensaje: 'Almacen editado correctamente',
        satisfatorio: true,
        datos: almacenes
    };
};

const obtenerAlmacenId = async (id: number): Promise<respuestaGenerica> => {

    let almacen = await Almacen.findByPk(id, {
        raw: true
    });

    return {
        mensaje: 'Almacen obtenido correctamente',
        satisfatorio: true,
        datos: almacen
    };
};



export { crearAlmacen, obtenerAlmacenes, inactivarAlmacen, editarAlmacen, obtenerAlmacenId };