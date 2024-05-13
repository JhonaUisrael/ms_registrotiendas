
import {AlmacenAttributes} from '../database/almacen.db';

interface almacenCrearDTO extends Pick<AlmacenAttributes,'Direccion'|'Latitud'|'Nombre'|'Longitud'>{

}

interface almacenEditarDTO extends Pick<AlmacenAttributes,'estado'>{}

interface almacenVerDTO extends AlmacenAttributes{

}

export {almacenCrearDTO,almacenVerDTO,almacenEditarDTO};