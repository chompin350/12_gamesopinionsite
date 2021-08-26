<template>
  <div class="m-4">
    <div class="container text-center">
      <h1>Administrando la Lista de Opiniones</h1>
    </div>
    <div class="container">
        <div v-if="allOpiniones.length == 0">
            <div class="alert alert-danger" role="alert">
                No existen opiniones para administrar.
            </div>
        </div>
        <table class="table" v-if="allOpiniones.length !== 0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Persona</th>
                    <th>Juego</th>
                    <th>Opinion</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(opinion,index) in allOpiniones" :key="index">
                    <td>{{opinion.correlativo}}</td>
                    <td>{{opinion.nombre}}</td>
                    <td>{{opinion.name}}</td>
                    <td>{{opinion.opinion}}</td>
                    <td>
                        <button class="btn btn-danger" @click="minus(opinion.correlativo)">Eliminar</button>
                        <router-link :to="{ name: 'Opinion', params: { id: opinion.correlativo }}" class="btn btn-info">Editar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import Opinion from "../views/Opinion.vue";
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    name: "Administracion",
    components:{
      Opinion,
    },
    computed:{
        ...mapState(["allOpiniones"]),
    },
    methods:{
        ...mapActions(["minus"]),
    },

}
</script>

<style scoped>

.alert-danger {
  text-align: left;
  padding: 1rem;
}
.btn-info{
    margin-left: .5rem;
}
</style>