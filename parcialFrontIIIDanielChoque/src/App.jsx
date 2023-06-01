import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import Error from './components/Error'

function App() {
  const [cancion, setCancion] = useState({
    nombre: '',
    genero: ''
  })

  const [styles, setStyles] = useState({
    backgound: 'transparent',
    color: 'white'
  })

  const[show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(cancion.nombre.trim().length >= 3 && cancion.genero.length >= 6){
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
    <Form handleSubmit= {handleSubmit} setCancion={setCancion} setStyles={setStyles}/>

    {show && <Card cancion = {cancion} styles={styles}/>}
    {error && <Error/>}
    </>
  )
}

export default App
