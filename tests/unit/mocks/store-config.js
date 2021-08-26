export default {
  state: {
    juegos:[],
    allOpiniones: [],
    isVisible:false,
    contador:0,
    // datos de opinion
    opinion:{
      id:'',
      name:'',
      opinion:'',
      nombre:'',
      fecha:'',
      correlativo:'',
      open:false,
    }
  },
  mutations: {

    GET_JUEGOS(state, juegos){
      state.juegos = juegos.results;
    },

    UPDATE_STATEMODAL(state){
      state.isVisible = !state.isVisible;
    },

    LLENA_OPINION(state,juego){
      state.opinion.id  = juego.id;
      state.opinion.name = juego.name;
      state.opinion.opinion = juego.opinion;
      state.opinion.nombre  = juego.nombre;
      state.opinion.fecha = fechaactual();
      state.opinion.open=false,
      state.isVisible = true;
    },

    LIMPIA_OPINION(state){
      state.opinion.id  = '';
      state.opinion.name = '';
      state.opinion.opinion = '';
      state.opinion.nombre  = '';
      state.opinion.fecha = '';
      state.opinion.open = false;
      state.isVisible=false;
    },

    ADD_TO_OPINION(state, juego){
      state.allOpiniones.push(juego);
    },

    ADD_CONTADOR(state){
      state.contador=state.contador+1;
    },

    UPDATE_JUEGOS(state,juegosnew){
      state.allOpiniones= juegosnew;
    },

  },

  actions: {

    //CARGA 
    async get_juegos({commit}){
      const { data: juegos} = await axios.get("https://api.rawg.io/api/games?key=85d81e1029ad4302b704f85cee681e24");
      commit("GET_JUEGOS", juegos);
    },

    //Cambio estado de modal
    stateModal({commit}){
      commit("UPDATE_STATEMODAL");
    },

    //LLENA ARREGLO DE OPINION EN MODAL
    muestraJuego({state, commit}, juego){
      commit("LLENA_OPINION", juego);
    },

    //AGREGA OPINION A ARREGLO
    addToOpinion({ commit, dispatch, state }, opinion){
      const Juego = state.juegos.find((p) => p.id == opinion.id);
      commit('ADD_CONTADOR');
      const nuevo = {...Juego, fecha: fechaactual(), nombre: opinion.nombre, opinion: opinion.opinion, correlativo: state.contador, open: opinion.open };
      commit("ADD_TO_OPINION", nuevo);
      alert("Opinion agregada exitosamente..");
      commit("UPDATE_STATEMODAL");
    },

    //BORRA OPINION DE ARREGLO
    minus({state, commit}, correlativo){
      let juegonew;
      juegonew = state.allOpiniones.filter((p) => p.correlativo !== correlativo);
      commit("UPDATE_JUEGOS", juegonew);
      alert("Opinion borrada exitosamente..");
    },
    updateOpinion({state, commit},opinion){
      let juegonew;
      juegonew = state.allOpiniones.filter((p) => p.correlativo !== opinion.correlativo);
      commit("UPDATE_JUEGOS", juegonew);
      const Juego = state.juegos.find((p) => p.id == opinion.id);
      const nuevo = {...Juego, fecha: fechaactual(), nombre: opinion.nombre, opinion: opinion.opinion, correlativo: opinion.correlativo, open: opinion.open };
      commit("ADD_TO_OPINION", nuevo);
      alert("Opinion actualizada exitosamente..");
    },

  },

  getters:{

    acumula: (state) => (opinion) => {
      return {...allOpiniones, nombre: opinion.nombre, opinion: opinion.opinion, opinionfecha: fechaactual, open: opinion.open}
    },

    findById: (state) => (correlativo) => {
      state.allOpiniones.forEach((value, i) => {
        if (value['correlativo']==correlativo){
          state.opinion.id  = value['id']
          state.opinion.name = value['name']
          state.opinion.opinion = value['opinion']
          state.opinion.nombre  = value['nombre']
          state.opinion.fecha = '';
          state.opinion.open=false,
          state.opinion.correlativo=value['correlativo'];
          state.isVisible = false;
          console.log(value);
        }
       });
    },
  }

}