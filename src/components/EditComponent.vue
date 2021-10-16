<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- update content goes here -->
      <div>
        <b-form-input
          v-model="text"
          placeholder=""
        class="my-3"></b-form-input>
      </div>
      <div>
        <b-form-input
          v-model="text"
          placeholder=""
        ></b-form-input>
      </div>
       <b-button variant="outline-success mt-2"
        ><i class="fas fa-check"></i
      ></b-button>
      <router-link  to="/" class="btn btn-outline-primary mx-3"><i class="fas fa-arrow-right"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>