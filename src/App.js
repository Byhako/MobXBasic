import React from 'react';
import { Provider } from 'mobx-react'
import ArepaStore from './stores/ArepaStore'

import Menu from './Menu'

function App() {
  return (
    <Provider ArepaStore={ArepaStore}>
      <Menu />
    </Provider>
  )
}


export default App;
