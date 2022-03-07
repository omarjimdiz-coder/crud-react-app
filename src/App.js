import { useState } from 'react';
import './App.css';
import Usuarios from './components/Usuarios';
import Form from './components/Form';
import Editar from './components/Editar';
import { v4 as uuidv4 } from 'uuid'


function App() {
  const personas = [
    {id: uuidv4(), nombre: "Omar", numero: 112333443, correo:"omar@gmail.com"},
    {id: uuidv4(), nombre: "Elizabeth", numero: 2424334, correo:"fernando@gmail.com"}
  ]

  const [datas, setDatas] = useState(personas);

  //Agregar
  const agregar = (persona) => {
    persona.id = uuidv4()
    setDatas([
      ...datas,
      persona
    ])
  }

  //Eliminar
  const eliminar = (id) => {
    const arrayFilter = datas.filter(persona => persona.id !== id)
    setDatas(arrayFilter);
  }

  //Editar
  const [editando, setEditando] = useState(false);
  const [modificarActual, setModificarActual] = useState({
      id: null,
      nombre: '',
      numero: '',
      correo: ''
  });

  const editarRow = (persona) => {
    setEditando(true);
    setModificarActual({
      id: persona.id, 
      nombre: persona.nombre,
      numero: persona.numero,
      correo: persona.correo
    })
  }

  const actualizar = (id, actulizacionPersona) => {
    setEditando(false);
    setDatas(datas.map(data => (data.id === id ? actulizacionPersona : data)))
  }


  return (
    <div className='app'>
      <div>
        {
          editando ? (
            <>
              <h2>Editar usuario</h2>
              <Editar 
                modificarActual={modificarActual} 
                actualizar={actualizar}  
              />
            </>
          ) :
          (
            <>
              <h2>Agregar usuario</h2>
              <Form agregar={agregar} />
            </>
          )
        }
      </div>
      <div className="personas">
          <h2>Usuarios</h2>
          <Usuarios 
            datas={datas} 
            eliminar={eliminar}
            editarRow={editarRow}
          />
      </div>
    </div>
  );
}

export default App;
