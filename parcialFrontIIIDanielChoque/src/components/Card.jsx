import React from 'react'

const Card = ({cancion, styles}) => {

return (
    <div className='card' style ={{backgroundColor: styles.background, color: styles.color}}>
        <h3>Tu cancion favorita es: {cancion.nombre}</h3>
        <h3>El genero de tu cancion favorita es: {cancion.genero}</h3>
        <h2>Gracias por completar el formulario!</h2>
    </div>
)
}

export default Card