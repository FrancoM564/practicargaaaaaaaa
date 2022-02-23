const proyectosHandler = (req, res) => {
    if (req.method == "GET") {
        const proyectos = [
            {"id" : 1, "nombre": "Proyecto de Prueba A", "usuario" : "billy", "rating" : 4.7},
            {"id" : 2, "nombre": "Proyecto B", "usuario" : "lionel", "rating" : 4.5}
        ]
        res.json({
            proyectos:proyectos,
            msg:""
        })
        return
    }
    
    res.status(400).json({
        msg:"error,gaaaaaaaaaaaaaaaaaa"
    })
}

export default proyectosHandler