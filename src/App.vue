<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-light justify-content-beterween flex-nowarp flex-row">
      <div class="container">
        <router-link class="navbar-brand float-left"  to="/"><strong class=" text-uppercase">MEVN</strong></router-link>
        <ul class="navbar navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link  to="/" class="btn btn-outline-primary mx-3"><i class="fas fa-plus"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link  to="/view" class="btn btn-outline-success"><i class="fas fa-th"></i></router-link>
          </li>

        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
strong{
  color: #42b883;
}
.bg{
background: #35495e;
}

</style>