import { exportAllDeclaration } from '@babel/types'
import { createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './mocks/store-config'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(storeConfig)

describe("Test de vue", () => {
  
   const registro = [];
      registro.correlativo=1;
      registro.fecha='';
      registro.id=4200;
      registro.name='';
      registro.nombre='Luis';
      registro.open=false;
      registro.opinion='texto opinion';
 

  it('Accion para agregar una opinion', () => {
    expect(store.state.opinion).toHaveLength(0)
    // store.dispatch('addToOpinion', registro)
    // expect(store.state.opinion).toEqual([registro]) //certifica que el primer elemento sea el mismo ingresado 
  })

  // it('Accion para aumentar la cantidad de una pizza en el carrito', () => {
  //   store.dispatch('plus',pizza.id)
  //   expect(store.state.carrito[0].cant).toBe(2) //certifica que la cantidad del primer elemento sea 2
  // })

})