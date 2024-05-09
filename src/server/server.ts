import express, { Express, Response } from 'express';
import bodyparser from 'body-parser';
import { dbpostgre } from '../connections/configpostgre.connection';
import { Usuario } from '../database/usuario.db';


export class Server {

  app: express.Express;
  port: string | undefined;

  constructor(app: Express, port: string | undefined) {
    this.app = app;
    this.port = port;

    this.sincronize();
    
    this.ConexionBD();

    this.middlewares();
  }

  //conexiones BD
  async ConexionBD() {

    try {

      await dbpostgre.authenticate();
      console.log('DB online');
      //await dbpostgre.sync();
      // await dbpostgre.drop();


    } catch (error) {
      console.log('Error al tratar de conectarse a la DB ', error);
    }

  }

  async sincronize() {
   
    await Usuario.sync({ alter: true });
    console.log("Modelos sincronizados exitosamente!", dbpostgre.models);

  }

  middlewares() {
    //interpreta todos los datos enviados por el front
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());

    //this.app.use(cors());

    this.app.use(bodyparser.urlencoded({
      extended: true
    }));
    /*  this.app.use(cors({
       origin: '*'
     })); */

    console.log(`Middlewares cargados`)

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando en el puerto:${this.port}`)

    });
  }


}

