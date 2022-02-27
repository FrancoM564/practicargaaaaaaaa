import { useEffect, useState } from "react";
import Footer from "../componentes/footer.component";
import VentanaModal from "../componentes/modal.component";
import BarraNav from "../componentes/nav.component";
import TablaProyectos from "../componentes/tabla.component";

export default function Main() {

    const [listaProyectos,setlistaProyectos] = useState([])
    const [mostrar,setMostrar] = useState(false)
    const [modoM,setmodoM] = useState("nuevo")
    const [proyectoaCambiar,setproyecto] = useState({
        nombre:"",
        usuario:"",
        rating:0
    }) 

    const obtenerProyectoHTTP = async () =>{
        let response = await fetch("/api/proyectos")
        const data = await response.json()
        return data
    }

    useEffect(async ()=>{
        const datosProy = await obtenerProyectoHTTP()
        setlistaProyectos(datosProy.proyectos)
    },[])

    const guardarProyecto = async (n,u,r) =>{
        const proyecto = {
            nombre: n,
            usuario: u,
            rating:r,
        }
        
        //peticion a back end para agregar un nuevo proyecto
        const response = await fetch("/api/proyectos",{
            method : "POST",
            body: JSON.stringify(proyecto)
        });

        const data = await response.json()

        if (data.msg =="nais") {
            setMostrar(false)
            const datosProy = await obtenerProyectoHTTP()
            setlistaProyectos(datosProy.proyectos)
        }
        
    }

    const ocultarModal =() =>{
        setMostrar(false)
    }

    const mostrarModal = () =>{
        setmodoM("nuevo")
        setMostrar(true)
    }

    const eliminarProyecto = async (id) =>{
        //hacer peticion http delete al servidor /api/proyectos/id
        const response = await fetch(`/api/proyectos/${id}`,{
            method : "DELETE"
        })
        const data = await response.json()
        //recargar proyectos
        if (data.msg =="ok") {
            const datosProy = await obtenerProyectoHTTP()
            setlistaProyectos(datosProy.proyectos)
        }
    }

    const mostrarEdyObtenerID = async (id) =>{
        const response = await fetch(`/api/proyectos/${id}`)
        const data = await response.json()
        setproyecto(data.proyecto)
        setmodoM("editar")
        setMostrar(true)
    }

    const edicionProyecto = async (nombre,user,rating)=>{
        const nuevoProyecto =JSON.stringify({
            id:proyectoaCambiar.id,
            nombre:nombre,
            usuario:user,
            rating:rating
        })

        const response = await fetch("/api/proyectos",{
            method:"PUT",
            body:nuevoProyecto
        })

        const data = await response.json()

        if (data.msg =="ok") {
            setMostrar(false)
            const datosProy = await obtenerProyectoHTTP()
            setlistaProyectos(datosProy.proyectos)
            return
        }

        return
    }

    return <div>
        <div>
            <header className="mt-4 mb-2">
                <h1>Main Gaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            </header>
            <BarraNav />
        </div>
        <div className="mt-2 mb-4">
            <div>
                <button className="btn btn-success" onClick={mostrarModal}>Nuevo</button>
            </div>
            <div className="row mt-1">
                <TablaProyectos proyectos={listaProyectos} modo={"crud"}
                            eliminar={eliminarProyecto}
                            editar={mostrarEdyObtenerID}/>
            </div>
        </div>
        <Footer/>
        <VentanaModal mostrar={mostrar}
                    ocultar={ocultarModal}
                    guardar={guardarProyecto}
                    modo = {modoM}
                    editar={edicionProyecto}
                    proyecto={proyectoaCambiar}/>
    </div>
}