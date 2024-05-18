import { Request, Response } from "express";
import { cargarImagen } from '../helpers/multimedia';
import { UploadedFile } from "express-fileupload";


export const cargarImagenCloudynary = async (req: Request, res: Response) => {



    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({ msg: 'No existe ningún archivo cargado' });
        return;
    }
    console.log(req.files);

    if (!Array.isArray(req.files)) {
        const dato = req.files.archivo as UploadedFile;
        const imagencargada = await cargarImagen(dato.tempFilePath);

        res.json(imagencargada);
    }


}