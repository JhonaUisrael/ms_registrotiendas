
import {AlmacenAttributes} from '../database/almacen.db';

interface almacenCrearDTO extends Pick<AlmacenAttributes,'Direccion'|'Latitud'|'Nombre'|'Longitud'>{

}

interface almacenVerDTO extends AlmacenAttributes{

}

export {almacenCrearDTO,almacenVerDTO};