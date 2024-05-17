import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { dbpostgre } from '../connections/configpostgre.connection';

//const sequelize = new Sequelize('sqlite::memory:');
import generico from './generico.db';
import { Almacen } from './almacen.db';


export interface ProductoAttributes extends generico {
  id?: number;
  AlmacenId?:number|Almacen;
  Nombre: string;
  FechaCducidad: Date;
  Precio?:string ;
  Imagen?:string

}



export class Producto extends Model<ProductoAttributes,generico> implements ProductoAttributes {
  public id!: number;
  public AlmacenId!: number|Almacen;
  public Nombre!: string;
  public FechaCducidad!: Date;
  public Precio!: string;
  public Imagen!: string;


}



Producto.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  AlmacenId:{
    type: DataTypes.INTEGER,
    references:{
      key:'id',
      model:Almacen
    }

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
  Imagen: {
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


Producto.belongsTo(Almacen);


//Usuario.sync();


