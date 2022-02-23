import { useEffect, useState } from "react";
import Footer from "../componentes/footer.component";
import FormularioLogin from "../componentes/form_login.component";
import BarraNav from "../componentes/nav.component";
import Slider from "../componentes/slideImg.component";
import TablaProyectos from "../componentes/tabla.component";

export default function Home() {

  const [errorLogin, setErrorLogin] = useState(false)
  const [listaImagenes, setlistaImagenes] = useState([])
  const [listaProyectos, setlistaProyectos] = useState([])

  const comprobarLogin = (usuario, password) => {
    if (usuario == "1234" && password == "1234") {
      location.href="/main"
      setErrorLogin(false)
    } else {
      setErrorLogin(true)
    }
  }

  useEffect(async () => {
    let response = await fetch("/api/proyectos")
    const datosProy = await response.json()
    setlistaProyectos(datosProy.proyectos)

    response = await fetch("/api/imagenes")
    const datosImg = await response.json()
    setlistaImagenes(datosImg.images)
  }, [])

  return <div>
    <div>
      <header className="mt-4 mb-2">
        <h1>Gaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
      </header>
      <BarraNav />
    </div>
    <div className="mt-2 mb-4">
      <Slider imagenes={listaImagenes} />
      <div className="row mt-4">
        <TablaProyectos proyectos={listaProyectos} modo={"show"} />
        <FormularioLogin logComprobacion={comprobarLogin}
          error={errorLogin} />
      </div>
    </div>
    <Footer />
  </div>
}
