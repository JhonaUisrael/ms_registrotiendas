import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { dbpostgre } from '../connections/configpostgre.connection';

//const sequelize = new Sequelize('sqlite::memory:');
import generico from './generico.db';


export interface UsuarioAttributes extends generico {
  id?: number;
  Usuname: string;
  UsuEmail: string;
  UsuEstado?: string;

}



export class Usuario extends Model<UsuarioAttributes,generico> implements UsuarioAttributes {
  public id!: number;
  public Usuname!: string;
  public UsuEmail!: string;
  public UsuEstado!: string;


}



 Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
 

  Usuname: {
    type: DataTypes.STRING

  },
  UsuEmail: {
    type: DataTypes.STRING
  },
 
  UsuEstado: {
    type:DataTypes.CHAR(1),

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


