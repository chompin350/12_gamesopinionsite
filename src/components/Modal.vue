<template>
    <div>
        <transition name="modal">
          <div v-if="isVisible" class="overlay"> 
            <div class="modal col-sm-12 col-md-8 col-lg-6">
              <div class="d-flex items-center justify-content-between p-3 font-bold">
                <h3>{{ opinion.name }} </h3>
                <a @click.prevent="stateModal" class="text-rigth">x</a>
              </div>
              <hr>
              <div class="p-3">
                <div class="m-1">
                  <table class="col-12">
                    <tr>
                      <td><input type="text"  v-model="opinion.id" class="d-none"></td>
                    </tr>
                    <tr>
                      <td>Nombre</td>
                    </tr>
                    <tr>
                      <input type="text" v-model="opinion.nombre" class="form-control w-100">     
                    </tr>
                    <tr>
                      Opiniones:
                    </tr>
                    <tr>
                      <textarea v-model="opinion.opinion" class="form-control" placeholder="Tu opinion debe ir aqui..."></textarea>     
                    </tr>
                  </table>
                </div>
              </div>
              <hr>
               <div class="d-flex justify-content-end pb-2">
                  <button @click.prevent="stateModal" class="btn btn-secondary m-1">Cerrar</button> 
                  <button @click.prevent="addToOpinion(opinion)" class="btn btn-primary m-1" v-if="opinion.nombre">Grabar</button>
                </div>
            </div>

          </div>
      </transition>
    </div>
</template>

<script>
  import { mapActions, mapState} from 'vuex';
  export default {
    name: 'Modal',
    data(){
      return {}
    },
    props: ["juego"],
    computed:{
      ...mapState(['isVisible','opinion']),
    },
    methods:{
      ...mapActions(["stateModal",'addToOpinion']),     
    }

  }
</script>

<style scoped>

.overlay{
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(187, 178, 178, 0.8);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal{
  width: 600px; 
  border-radius: 4px;
  display: block;
  background-color: white;
  top:auto;
  left:auto;
  height: auto;
  color: #000;
 

}

a{
  cursor: pointer;
  color: black;
  font-size: 25px;
}
tr{
  width: 100%;
}
button{
  padding: .9rem 1rem;
}
</style>
