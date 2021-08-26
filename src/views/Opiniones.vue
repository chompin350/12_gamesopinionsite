<template>
  <div class="m-4">
    <div class="container text-center">
      <h1>Lista de Opiniones</h1>
      <div v-if="allOpiniones.length == 0">
        <div class="alert alert-danger" role="alert">
          No existen opiniones para mostrar.
        </div>
      </div>
      <div v-if="allOpiniones">
        <div v-for="(opinion,index) in allOpiniones" :key="index">
            <h3 @click="opinion.open= !opinion.open" class="accordion-button" data-bs-toggle="collapse">
                Opinion Creada por: {{ opinion.nombre }}. Para el juego : {{ opinion.name}}
            </h3>
            <div class="question-reply accordion-collapse accordion-flush" v-show="opinion.open">
                <strong>Opinión:</strong> {{ opinion.opinion}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            open:false,
        }
    },
  name: "Opiniones",
  computed: {
    ...mapState(["allOpiniones"]),
    suma(){
        this.contador=this.contador+1;
    }
  },
   methods : {
        trigger_refered_element : function(){
            this.$refs.open_me.open();
        }
    }
};
</script>

<style scoped>
.alert-danger {
  text-align: left;
  padding: 1rem;
}

.question-reply {
      background-color: #fff;
      padding: 15px;
      text-align: left;
      border-width: 1px 1px 1px 1px;
}
.accordion-button{
    margin-bottom: 0px;
}

</style>