import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { dbpostgre } from '../connections/configpostgre.connection';

//const sequelize = new Sequelize('sqlite::memory:');
import generico from './generico.db';


export interface ProductoAttributes extends generico {
  id?: number;
  Nombre: string;
  FechaCducidad: Date;
  Precio?:string ;

}



export class Producto extends Model<ProductoAttributes,generico> implements ProductoAttributes {
  public id!: number;
  public Nombre!: string;
  public FechaCducidad!: Date;
  public Precio!: string;


}



Producto.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
 

  Nombre: {
    type: DataTypes.STRING

  },
  FechaCducidad: {
    type: DataTypes.DATE
  },
 
  Precio: {
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
  modelName: 'Producto',
  tableName:'Producto'
});



/* Usuario.belongsTo(Empresa);
Usuario.belongsTo(Rol); */

/*
Usuario.belongsTo(Rol,{foreignKey:'UsuRol'});
Usuario.belongsTo(Empresa,{foreignKey:'UsuRol'}) */


//Usuario.sync();


