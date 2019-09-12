import { decorate, observable, action, computed, reaction } from 'mobx'

class ArepaStore {
  constructor() {
    this.arepas = []
    const localArepas = localStorage.getItem('arepas')
    if (localArepas) {
      this.arepas = JSON.parse(localArepas)
    }
  }

  agregarArepa = arepa => this.arepas.push(arepa)

  borrarArepa = index => this.arepas.splice(index, 1)

  get numeroArepas() {
    return this.arepas.length
  }
}

decorate(ArepaStore, {
  arepas: observable,
  agregarArepa: action,
  numeroArepas: computed,
})

const arepaStore = new ArepaStore()

// cuando lo que cambia en la primer función se ejecuta la segunda
reaction(
  () => JSON.stringify(arepaStore.arepas),
  (arepaStr) => {
    localStorage.setItem('arepas', arepaStr)
  }
)

export default arepaStore
