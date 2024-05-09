import {Sequelize} from 'sequelize';
import { connectionpostgreSQLString } from './connectionpostgre';

const {database,host,user,password,port}=connectionpostgreSQLString;
  //console.log(connectionpostgreSQLString);
export const dbpostgre=new Sequelize(database,user,password,{
  host:host,
  dialect:'postgres',
  timezone:'-05:00',
  logging: false,
  port:parseInt(port),
  //Detener la pluralización automática realizada por Sequelize
  define:{
    freezeTableName:true
  },

  dialectOptions:{Option: {encript: false, enableArithAbort: false} }

});

