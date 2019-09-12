import React, { useState } from 'react';
import { inject, observer } from 'mobx-react'

function Menu(props) {
  const { ArepaStore } = props

  const [data, setData] = useState({ nombre: '', precio: '' })

  const handleForm = e => {
    e.preventDefault()
    ArepaStore.agregarArepa(data)
    setData({ nombre: '', precio: '' })
    // e.target.reset()
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Menu de Arepas</h1>
      <h3>Tenemos {ArepaStore.numeroArepas} en el momento.</h3>

      <form
        onSubmit={handleForm}
        style={{ justifyContent: 'space-between', display: 'flex', width: '379px' }}
      >
        <input
          type='text'
          placeholder='Nombre de la arepa'
          required
          value={data.nombre}
          onChange={e => setData({ ...data, nombre: e.target.value })}
        />
        <input
          type='text'
          placeholder='Precio de la arepa'
          required
          value={data.precio}
          onChange={e => setData({ ...data, precio: e.target.value })}
        />
        <button
          type='submit'
          style={{ color: 'white', backgroundColor: 'steelblue', cursor: 'pointer' }}
        >Agregar arepa</button>
      </form>

      <ul>
        {ArepaStore.arepas.map((item, index) => (
          <li key={item.nombre} style={{ display: 'flex' }}>
            <h4 style={{ margin: '5px 0px', width: '150px'}}>{item.nombre}</h4>
            <h5 style={{ margin: '5px 15px', color: 'gray' }}>$ {item.precio}</h5>
            <span
              type='button'
              style={{ display: 'flex', alignItems: 'center', color: '#f44336', cursor: 'pointer'}}
              onClick={() => ArepaStore.borrarArepa(index)}
            >X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default inject('ArepaStore')(observer(Menu))
