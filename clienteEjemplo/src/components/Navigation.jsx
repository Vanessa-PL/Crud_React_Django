import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>

        <Link to="/tasks" ><h3>Ver</h3></Link>
        <Link to="/tasks-create" >Crear</Link>

    </div>
  )
}
