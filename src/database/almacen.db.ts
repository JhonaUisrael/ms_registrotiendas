import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { dbpostgre } from '../connections/configpostgre.connection';

//const sequelize = new Sequelize('sqlite::memory:');
import generico from './generico.db';


export interface AlmacenAttributes extends generico {
  id?: number;
  Nombre: string;
  Direccion: string;
  Latitud?: string;
  Longitud?: string;

}



export class Almacen extends Model<AlmacenAttributes,generico> implements AlmacenAttributes {
  public id!: number;
  public Nombre!: string;
  public Direccion!: string;
  public Latitud!: string;
  public Longitud!: string;


}



Almacen.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
 

  Nombre: {
    type: DataTypes.STRING

  },
  Direccion: {
    type: DataTypes.STRING
  },
 
  Latitud: {
    type:DataTypes.STRING,

  },
  Longitud: {
    type:DataTypes.STRING,

  },
  estado: {
    type:DataTypes.CHAR(1),
    defaultValue:'A'

  },
  createdAt:{
    type:DataTypes.DATE
  },
  updatedAt:{
    type:DataTypes.DATE
  }
}, {
  sequelize: dbpostgre,
  modelName: 'Almacen',
  tableName:'Almacen'
});



/* Usuario.belongsTo(Empresa);
Usuario.belongsTo(Rol); */

/*
Usuario.belongsTo(Rol,{foreignKey:'UsuRol'});
Usuario.belongsTo(Empresa,{foreignKey:'UsuRol'}) */


//Usuario.sync();


