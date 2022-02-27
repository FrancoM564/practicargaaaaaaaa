import {guardarP,obtenerP,eliminarP,modificarP,obtenerProyectoEsp} from "../../../dao/proyectos";

const proyectosHandler = async (req, res) => {
    if (req.method == "GET") {
        //consultar base de datos y devolver respuesta
        
        
        const proyectos = await obtenerP()
        res.json({
            proyectos:proyectos,
            msg:""
        })
        return
    }

    if (req.method == "POST"){
        //registrar base de datos
        console.log("guardar en base de datos")
        const data = JSON.parse(req.body)
        console.log(data.nombre)
        await guardarP(data.nombre,"billy",data.rating)
        res.json({
            msg:"nais"
        })
        return
    }

    if (req.method =="PUT"){
        const data = JSON.parse(req.body)
        await modificarP(data)
        res.json({
            msg:"ok"
        })
        return
    }
    
    res.status(400).json({
        msg:"error,gaaaaaaaaaaaaaaaaaa"
    })
}

export default proyectosHandler