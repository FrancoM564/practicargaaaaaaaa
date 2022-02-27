import { fallback_application_name } from "pg/lib/defaults";

//import db from "../sequelize/models"
const db = require("../sequelize/models");

const guardarP = async (nombre,usuario,rating) =>{
    //Insercion
    const proyectoGuardado = await db.Proyecto.create({
        nombre:nombre,
        rating:rating
    })

    return proyectoGuardado
}

const obtenerP = async () =>{
    //Query
    const proyectos = await db.Proyecto.findAll({
        order:[
            ["id","DESC"]
        ]
    })
    return proyectos
}

const eliminarP = async (id) =>{
    await db.Proyecto.destroy({
        where: {
            id:id
        }
    })
}

const obtenerProyectoEsp = async (id) =>{
    const proyecto = await db.Proyecto.findOne({
        where:{
            id:id
        }
    })

    return proyecto
}
const modificarP = async (proyecto) =>{
    const proyMod = await obtenerProyectoEsp(proyecto.id)
    proyMod.nombre = proyecto.nombre
    proyMod.rating = proyecto.rating
    
    await proyMod.save()
}

export {guardarP,obtenerP,eliminarP,obtenerProyectoEsp,modificarP}