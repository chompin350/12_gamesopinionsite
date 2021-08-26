<template>
    <div id="">
        <div class="container">
            <div v-if="!opinion.name">
                <div class="alert alert-danger" role="alert">
                    Opinion buscada no existe intente nuevamente...!
                </div>
                <div class="text-center col-12">
                    <router-link :to="{ name: 'Administracion'}" class="btn btn-primary">Volver</router-link>
                </div>
            </div>
            <div v-if="opinion.name">
                <div class="text-center">
                    <h3>Editando la opinión de: <span v-text="opinion.name"></span></h3>
                </div>
                <div class="m-1">
                    <table class="col-12">
                    <tr>
                        <td><input type="text"  v-model="opinion.id" class="d-none"></td>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                    </tr>
                    <tr>
                        <input v-model="opinion.nombre" class="form-control w-100">     
                    </tr>
                    <tr>
                        Opiniones:
                    </tr>
                    <tr>
                        <textarea v-model="opinion.opinion" class="form-control" placeholder="Tu opinion debe ir aqui..."></textarea>     
                    </tr>
                    </table>
                </div>
                <div class="pt-2">
                    <router-link :to="{ name: 'Administracion'}" class="btn btn-primary">Volver</router-link>
                    <button class="btn btn-info" @click="updateOpinion(opinion)">Guardar</button>
                </div>
            </div>
        </div>
        <!-- {{ findById(id) }} -->
    </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: "Opinion",
    data(){
        return{}
    },
    props:["id"],
    computed:{
        ...mapState(['opinion']),
        ...mapGetters(["findById"]),
    },
    created(){
        this.findById(this.id);
    },
    methods:{
       ...mapActions(['updateOpinion']),
    },
}

</script>


<style scope>
    
    .container{
        padding: 1rem;
    }
    .btn-info{
    margin-left: .5rem;
    }   
</style>
