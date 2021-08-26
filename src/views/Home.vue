<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="row py-5 juegos">
        <div class="col-12 col-md-6 col-lg-4 juego" v-for="(juego, i) in juegos" :key="i">
          <Card :juego="juego" />
        </div>
      </div>
    </div>
    <Modal />
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import { mapState} from 'vuex';

export default {
  name: "Home",
  data() {
    return {
      show: false,
    }
  },
  components: {
    Header,
    Card,
    Modal,
  },
  computed:{
    ...mapState(['juegos']),
  },
  methods: {
  }
};
</script>


<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  @media screen and (max-width: 992px) {
      width: 90%;
  }
}
.modal__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
}
.modal__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
}
   
.modal__close {
    width: 30px;
    height: 30px;
}
.modal__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.modal__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.modal__footer {
    padding: 10px 20px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>