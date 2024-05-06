import dotenv from "dotenv";
dotenv.config()
type Connection={
  host:string,
  user:string,
  password:string|undefined,
  database:string,
  port:string
};


export const connectionpostgreSQLString:Connection={

  host     : process.env.POSTGRES_HOST||'',
  user     : process.env.POSTGRES_USER||'',
  password : process.env.POSTGRES_PASSWORD,
  database : process.env.POSTGRES_DB||'',
  port     :process.env.POSTGRES_PORT||'5432',
};
