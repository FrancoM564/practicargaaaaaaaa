import db from "../sequelize/models"

const guardarP = async (nombre,usuario,rating) =>{
    //Insercion
    const proyectoGuardado = await db.proyecto.create({
        nombre:nombre,
        rating:rating
    })
}

const obtenerP = () =>{

}

const eliminarP = (iu) =>{

}

const obtenerProyectoEsp = (id) =>{

}
const modificarP = (proyecto) =>{

}

export {guardarP,obtenerP,eliminarP,obtenerProyectoEsp,modificarP}