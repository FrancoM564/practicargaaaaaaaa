import { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"

const VentanaModal = (props) => {

    const [nombre,setNombre] = useState("")
    const [usuario,setUser] = useState("")
    const [r,setR] = useState(0)

    const nombreOC =(event)=>{
        setNombre(event.target.value)
    }

    const usuarioOC =(event)=>{
        setUser(event.target.value)
    }

    const ratingOC =(event)=>{
        setR(event.target.value)
    }

    const guardarOC = () =>{
        props.guardar(nombre,usuario,r)
    }

    const editarOC = () =>{
        props.editar(nombre,usuario,r)
    }

if(props.modo =="nuevo"){
    return <Modal show={props.mostrar}
                    onHide={props.ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Nuevo Proyecto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <label className="form-label">Nombre del proyecto</label>
                <input type="text" className="form-control" defaultValue={nombre} 
                        onChange={nombreOC}></input>

                <label className="form-label mt-2">Usuario</label>
                <input type="text" className="form-control" defaultValue={usuario} 
                        onChange={usuarioOC}></input>

                <label className="form-label mt-2">Rating</label>
                <input type="number" className="form-control" defaultValue={r} 
                        onChange={ratingOC}></input>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary"
                onClick={guardarOC}>Guardar</Button>
        </Modal.Footer>
    </Modal>
}else if (props.modo =="editar"){
    return <Modal show={props.mostrar}
                    onHide={props.ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <label className="form-label">Nombre del proyecto</label>
                <input type="text" className="form-control" defaultValue={nombre} 
                        onChange={nombreOC}></input>

                <label className="form-label mt-2">Usuario</label>
                <input type="text" className="form-control" defaultValue={usuario} 
                        onChange={usuarioOC}></input>

                <label className="form-label mt-2">Rating</label>
                <input type="number" className="form-control" defaultValue={r} 
                        onChange={ratingOC}></input>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary"
                onClick={editarOC}>Guardar cambios</Button>
        </Modal.Footer>
    </Modal>
}

    
}

export default VentanaModal