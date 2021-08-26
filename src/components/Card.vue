<template>
  <div class="card w-100 mt-4">
    <img class="card-img-top img" :src="juego.background_image" />
    <div class="card-body">
      <h4 class="card-title text-capitalize">{{juego.name}}</h4>
      <hr />
      <h3>Rating : {{ juego.rating}}</h3>
      <hr />
      <h3>Released : {{ juego.released}}</h3>
      <hr />
      <h3>Updated : {{ juego.update}}</h3>
      <hr />
      <div class="justify-content-center col-12 d-flex">
          <button class="btn btn-primary text-white" @click="muestraJuego(juego)">
            Opinar
          </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "Card",
  components: {},
  data() {
    return {}
  },
  props: ["juego"],
  methods: {
    ...mapActions(["addToCart","muestraJuego"]),
  },
};
</script>

<style scoped>
.img{
  height: 200px;
}

.btn{
  padding: .9rem 1rem;
}
</style>