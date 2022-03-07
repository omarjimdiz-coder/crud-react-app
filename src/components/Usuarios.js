import React from 'react'


const Usuarios = ({datas, eliminar, setEditando, editarRow}) => {
  return (
    <>
        {
            datas.length > 0 ?
            datas.map((data) => {
                return (
                    <div className="box" key={data.id}>
                        <p>Nombre: {data.nombre}</p>
                        <p>Numero: {data.numero}</p>
                        <p>Email: {data.correo}</p>

                        <button onClick={() => {editarRow(data)}}>Editar</button>
                        <button onClick={() => {eliminar(data.id)}}>Eliminar</button>
                    </div>
                )
            }) : (
                <div>
                    <h3>No hay usuarios registrados</h3>
                </div>
            )

        }
    </>
  )
}

export default Usuarios