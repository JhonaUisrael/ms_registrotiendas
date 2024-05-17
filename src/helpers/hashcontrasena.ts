import bcryptjs from 'bcryptjs'


const encriptarcontrasena=async(contrasena:string)=>{
    const saltos=await bcryptjs.genSalt(10);
    const hash=await bcryptjs.hash(contrasena,saltos);

    return hash;
};

const desencriptarcontrasena=async(contrasena:string,contrasenadb:string)=>{

    return await bcryptjs.compare(contrasena,contrasenadb);
}

export{encriptarcontrasena,desencriptarcontrasena};