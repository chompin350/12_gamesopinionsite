<template>
  <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <div class="text-white" >
                    <i class="fas fa-headphones-alt"></i> Games Opinion
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link"><router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i> Home</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><router-link :to="{ name: 'Opiniones' }"><i class="fas fa-comments"></i> Opiniones</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><router-link :to="{ name: 'Administracion' }"><i class="fas fa-users-cog"></i> Administracion</router-link></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import utils from '@/utils/functions';
const { formatNumber } = utils;
export default {
  name: "Navbar",
  methods:{
    formatNumber,
  }
};
</script>

<style scoped>
.navbar {
  background: #17a2b8;
}
</style>
