import Personas from '../Personas';

export default function Home() {

  let listaPersonas = Personas;
  
  const inputHandler = (props) => {
    listaPersonas = []
    
    Personas.forEach(Persona => {
      if (Persona.nombre.includes(props)) {
        listaPersonas.push(Persona);
      }
    });
  }

  return (
    <div>
      <input type="text" onChange={inputHandler}>Buscar personas</input>
      {listaPersonas.map(Persona => 
      <p key={Persona.id}>{Persona.nombre}</p>
    )} 
    </div>
  )
}
