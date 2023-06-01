import React from 'react'
import '../App.css'


const Form = ({setCancion, setStyles, handleSubmit}) => {

  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <label className='form-label'>Cancion favorita: </label>
        <input className='form-input' type="text" onBlur={(e) => setCancion((prevState) => ({...prevState, nombre: e.target.value}))}/>

        <label className='form-label'>Genero: </label>
        <input className='form-input' type="text" onChange={(e) => setCancion((prevState) => ({...prevState, genero: e.target.value}))}/>

        <label className='form-label' >Color de tarjeta: </label>
        <select className='form-select' onChange={(e) => setStyles((prevState) => ({...prevState, background: e.target.value}))}>
            <option value="black">Negro</option>
            <option value="white">Blanco</option>
            <option value="red">Rojo</option>
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
        </select>
        <button className='form-button' type='submit'>Enviar</button>
    </form>
  )
}

export default Form



