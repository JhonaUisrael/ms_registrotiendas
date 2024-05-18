import cloudinary from 'cloudinary';
import dotenv from 'dotenv'
import { respuestaGenerica } from '../models/respuesta.model';
import { error } from 'console';

dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDY_NAME,
    api_key: process.env.CLOUDY_API,
    api_secret: process.env.CLOUDY_SECRET,
    secure: true,
});



const cargarImagen = async (tempFile: string):Promise<respuestaGenerica> => {

    let upload = await cloudinary.v2.uploader.upload(tempFile, {
        folder: 'mercadista',
    }, (err) => {
        if (err) {
           return {
            mensaje:err.message,
            satisfatorio:false,
            error:err
           }
        }

    });

    return {
        mensaje:'Imagen cargada correctamente',
        satisfatorio:true,
        datos:upload.url,

    } ;

}

export {cargarImagen};