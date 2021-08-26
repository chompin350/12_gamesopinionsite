<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import { mapActions } from "vuex"

export default {
  name: "App",
  components:{
    Navbar
  },
  methods:{
    ...mapActions(["get_juegos"])
    
  },
  mounted(){
    this.get_juegos()
  }
};
</script>

<style>
a,
a:hover {
  text-decoration: none;
  color: white;
}

ul {
  list-style: none;
}
</style>
