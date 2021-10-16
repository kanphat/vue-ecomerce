<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- content goes here -->

      <div>
        <b-form-input
          v-model="info.goodsname"
          placeholder="Enter goodsname"
          required
        ></b-form-input>
      </div>
      <div>
        <b-form-input
          v-model="info.price"
          placeholder="Enter price"
          class="my-3"
          required
        ></b-form-input>
      </div>
      <b-button variant="outline-success "
        ><i class="fas fa-plus"></i
      ></b-button>
     <router-link  to="/edit/:id" class="btn btn-outline-warning mx-3"><i class="fas fa-pencil"></i></router-link>
    </div>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        goodsname: "",
        price: "",
      },
    };
  },
  methods: {
    handleSubnitForm() {},
  },
};
</script>

<style>
</style>