const guardarP = (nombreP,user,rat) =>{
    const proyecto ={
        id:1,
        nombre:nombreP,
        usuario:user,
        rating:rat
    }

    const proyectosStr = localStorage.getItem("proyectos")
    console.log(proyectosStr)

    if (proyectosStr != null){
        const proyectos = JSON.parse(proyectosStr)
        if (proyectos.length != 0){
            const lastid = proyectos[proyectos.length - 1].id
            proyecto.id = lastid+1
        }
        proyectos.push(proyecto)
        localStorage.setItem("proyectos",JSON.stringify(proyectos))
    }else{
        const proyectos = [proyecto]
        localStorage.setItem("proyectos",JSON.stringify(proyectos))
    }
}

const obtenerP = () =>{
    const proyectosStr = localStorage.getItem("proyectos")
    if(proyectosStr != null){
        return JSON.parse(proyectosStr)
    }else{
        return []
    }
}

const eliminarP = (id) =>{
    const proyectosStr = localStorage.getItem("proyectos")
    if(proyectosStr!= null){
        const proyectos = JSON.parse(proyectosStr)
        let pos = 0
        let posEnc = -1
        for(let p of proyectos){
            if(p.id == id){
                posEnc = pos
                break
            }
            pos++
        }
        if(posEnc>=0){
            proyectos.splice(posEnc,1)
            localStorage.setItem("proyectos",JSON.stringify(proyectos))
        }
    }
}

const obtenerProyectoEsp = (id) =>{
    const proyectosStr = localStorage.getItem("proyectos")
    if (proyectosStr!=null){
        const proyectos = JSON.parse(proyectosStr)
        for (let proyecto of proyectos){
            if(id == proyecto.id){
                return proyecto
            }
        }
    }
    return null
}

const modificarP = (proyecto) =>{
    const proyectosStr = localStorage.getItem("proyectos")
    if (proyectosStr!=null){
        const proyectos = JSON.parse(proyectosStr)
        for (let proy of proyectos){
            if(proy.id == proyecto.id){
                proy.nombre = proyecto.nombre
                proy.usuario = proyecto.usuario
                proy.rating = proyecto.rating
                break
            }
        }
        localStorage.setItem("proyectos",JSON.stringify(proyectos))
    }
}

export {guardarP,obtenerP,eliminarP,modificarP,obtenerProyectoEsp}