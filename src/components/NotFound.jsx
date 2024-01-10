import { NavLink } from "react-router-dom"

const NotFound = () => (
    <div className="text-center text-white my-5">
        <h1>404 - Pagina non Trovata</h1>
        <NavLink to="/" className="btn btn-light" >Torna alla Home</NavLink>
    </div>
)

export default NotFound