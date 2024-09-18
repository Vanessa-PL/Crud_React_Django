import { Link } from "react-router-dom";

export function Navegation() {
  return (
    <div>
      <Link to="/tasks" > <h3>Ver</h3></Link>
      <Link to="/tasks-create" > <h3>Crear</h3></Link>
    </div>
  );
}
