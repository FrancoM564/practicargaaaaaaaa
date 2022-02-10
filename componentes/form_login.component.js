import { useEffect, useState } from "react";

const FormularioLogin = (props) => {

    const [usuario,setUsuario] = useState("")
    const [pass,setPass] = useState("")

    const cambioUser = (event) =>{
        setUsuario(event.target.value)
    }

    const cambioPass = (event) =>{
        setPass(event.target.value)
    }

    const ConfLog = () =>{
        props.logComprobacion(usuario,pass)
    }

    return <aside className="col-md-4">
        <div className="card">
            <div className="card-body">
                <h3>Login</h3>
                <form>
                    <div>
                        <label for="txt_username">Username</label>
                        <input id="txt_username" 
                            type="text" 
                            className="form-control" 
                            defaultValue={usuario}
                            onChange={cambioUser}/>
                    </div>
                    <div className="mb-3">
                        <label for="txt_password">Password</label>
                        <input id="txt_password" 
                            type="password" 
                            className="form-control" 
                            defaultValue={pass}
                            onChange={cambioPass}/>
                    </div>
                    <button
                        id="butLogin" 
                        className="btn btn-primary mr-4" 
                        type="button"
                        onClick={ConfLog}>Login</button>
                    <button href="" className="btn btn-link-black">Registro</button>
                    {
                        (()=>{
                            if(props.error){
                                return <div className="alert alert-danger mt-2">Fallo de login</div>
                            }
                        })()
                    }
                </form>
            </div>
        </div>
    </aside>
}

export default FormularioLogin