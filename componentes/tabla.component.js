const TablaProyectos = (props) => {
    if (props.modo == "crud"){
        return <main className="col-md-8">
        <h3>Ranking</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre proyecto</th>
                    <th>Usuario</th>
                    <th>Puntaje</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="btable">
                {
                    props.proyectos.map((p)=>{
                        return <tr key={p.id}>
                            <td>{p.nombre}</td>
                            <td>{p.usuario}</td>
                            <td>{p.rating}</td>
                            <td>
                                <button className="btn btn-success"
                                    onClick={()=>{props.editar(p.id)}}>Editar</button>
                                <button className="btn btn-link-black"
                                    onClick={()=>{props.eliminar(p.id)}}>Eliminar</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </main>
    }else if (props.modo == "show"){
        return <main className="col-md-8">
        <h3>Ranking</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre proyecto</th>
                    <th>Usuario</th>
                    <th>Puntaje</th>
                </tr>
            </thead>
            <tbody id="btable">
                {
                    props.proyectos.map((p)=>{
                        return <tr key={p.id}>
                            <td>{p.nombre}</td>
                            <td>{p.usuario}</td>
                            <td>{p.rating}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </main>
    }
}

export default TablaProyectos
