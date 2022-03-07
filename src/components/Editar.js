import React from 'react'
import {useForm} from 'react-hook-form';

const Editar = ({modificarActual, actualizar}) => {

    // console.log(modificarActual);

    const { register, errors, handleSubmit, setValue} = useForm({
        defaultValues: modificarActual
    });

    setValue('nombre', modificarActual.nombre);
    setValue('numero', modificarActual.numero);
    setValue('correo', modificarActual.correo);


    
    const submit = (persona, e) => {
        console.log(persona)

        persona.id = modificarActual.id;

        actualizar(modificarActual.id, persona)

        e.target.reset();
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <input 
            type='text' 
            name='nombre' 
            placeholder='Nombre Completo'
            {...register("nombre", {
                required: "Required",
            })}
        />
        <div>
            {
                errors?.nombre?.message
            }
        </div>
        <br />
        <input 
            type='number' 
            name='numero' 
            placeholder='Número'
            {...register("numero", {
                required: "Required",
            })}
        />
          <div>
            {
                errors?.numero?.message
            }
        </div>
        <br />
        <input 
            type='email' 
            name='correo' 
            placeholder='Email'
            {...register("correo", {
                required: "Required",
            })}
        />
          <div>
            {
                errors?.email?.message
            }
        </div>
        <br />
        <button type='submit'>Editar usuario</button>
    </form>
  )
}

export default Editar