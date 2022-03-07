import React from 'react'
import {useForm} from 'react-hook-form';

const Form = ({agregar}) => {


    const { register, errors, handleSubmit} = useForm();
    
    const submit = (persona, e) => {
        agregar(persona);        
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
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form