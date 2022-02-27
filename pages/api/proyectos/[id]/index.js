//path: /api/proyectos/[id]

import { eliminarP, obtenerP, obtenerProyectoEsp } from "../../../../dao/proyectos"

const proyectosIdHandler = async (request,response) =>{
    if (request.method == "DELETE"){
        const data = request.query
        console.log("Se eliminara el proyecto con id: "+data.id)
        await eliminarP(data.id)
        response.json({
            msg:"ok"
        })
        
        return
    }

    if (request.method == "GET"){
        const data = request.query
        console.log("Se editara el proyecto con id: "+data.id)
        const proyecto = await obtenerProyectoEsp(data.id)

        response.json({
            msg:"ok",
            proyecto:proyecto
        })
        return
    }
}

export default proyectosIdHandler