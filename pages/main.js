import { useEffect, useState } from "react";
import Footer from "../componentes/footer.component";
import VentanaModal from "../componentes/modal.component";
import BarraNav from "../componentes/nav.component";
import TablaProyectos from "../componentes/tabla.component";
import {guardarP,obtenerP,eliminarP,modificarP,obtenerProyectoEsp} from "../dao/proyectosmodal";

export default function Main() {

    const [listaProyectos,setlistaProyectos] = useState([])
    const [mostrar,setMostrar] = useState(false)
    const [modoM,setmodoM] = useState("nuevo")
    const [proyectoaCambiar,setproyecto] = useState(null) 

    useEffect(()=>{
        setlistaProyectos(obtenerP())
    },[])

    const guardarProyecto = (n,u,r) =>{
        guardarP(n,u,r)
        setlistaProyectos(obtenerP())
        setMostrar(false)
    }

    const ocultarModal =() =>{
        setMostrar(false)
    }

    const mostrarModal = () =>{
        setmodoM("nuevo")
        setMostrar(true)
    }

    const eliminarProyecto = (id) =>{
        eliminarP(id)
        setlistaProyectos(obtenerP())
    }

    const mostrarEdyObtenerID = (id) =>{
        setmodoM("editar")
        setMostrar(true)
        setproyecto(obtenerProyectoEsp(id))
    }

    const edicionProyecto = (nombre,user,rating)=>{
        const nuevoProyecto ={
            id:proyectoaCambiar.id,
            nombre:nombre,
            usuario:user,
            rating:rating
        }
        modificarP(nuevoProyecto)
        setlistaProyectos(obtenerP())
        setMostrar(false)
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
                    editar={edicionProyecto}/>
    </div>
}