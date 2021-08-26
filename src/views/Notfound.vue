<template>
    <div class="ventana">
        <header class="masthead" style="background-image: url('/assets/img/404.PNG');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading text-center">
              <h2><strong>La página que busca no existe</strong></h2>
              <br>
              <br>    
              <br>    
              <br>    
              <br>    
              <a href="/" class="boton">Volver al inicio</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.boton{
    text-decoration: none;
    background-color: bisque;
    color: #000;
    padding: 15px;
    border-radius: 5px;
}
.masthead{
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
.ventana{
    background:#aa94fc;
    position: relative;
    top: 0;
    bottom: 0;
    height: 100vh;
}
</style>