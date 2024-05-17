import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { dbpostgre } from '../connections/configpostgre.connection';

//const sequelize = new Sequelize('sqlite::memory:');
import generico from './generico.db';


export interface UsuarioAttributes extends generico {
  id?: number;
  NombreUsuario: string;
  Correo: string;
  Contrasena: string;

}



export class Usuario extends Model<UsuarioAttributes,generico> implements UsuarioAttributes {
  public id!: number;
  public NombreUsuario!: string;
  public Correo!: string;
  public Contrasena!: string;


}



 Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
 

  NombreUsuario: {
    type: DataTypes.STRING

  },
  Correo: {
    type: DataTypes.STRING
  },
  Contrasena: {
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
  modelName: 'Usuario',
  tableName:'Usuario'
});



/* Usuario.belongsTo(Empresa);
Usuario.belongsTo(Rol); */

/*
Usuario.belongsTo(Rol,{foreignKey:'UsuRol'});
Usuario.belongsTo(Empresa,{foreignKey:'UsuRol'}) */


//Usuario.sync();


