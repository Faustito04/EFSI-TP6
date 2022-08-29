import Personas from '../Personas';
import {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [query, setQuery] = useState("")
  let navigate = useNavigate();

  return (
  <div className="w-screen grid place-content-center mt-24">
  <input className="w-[300px] text-center mb-5" placeholder="Ingrese el nombre de la persona" onChange={event => setQuery(event.target.value)} />
    <div className='grid grid-cols-4'>
      {
  Personas.filter(Persona => {
    if (query === '') {
      return Persona;
    } else if (Persona.nombre.toLowerCase().includes(query.toLowerCase())) {
      return Persona;
    }
  }).map((Persona) => (
    <div  key={Persona.id} onClick={() => navigate(`/detalle/${Persona.id}`)}>
      <div className='fit text-center'>{Persona.nombre}</div>
    </div>
  ))
}
    </div>
  </div>
  )
}
