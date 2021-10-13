<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- content goes here -->
      <h1 class="text-center">content goes here</h1>
      <div>
        <b-form-input
          v-model="info.goodsname"
          placeholder="Enter goodsname"
        required></b-form-input>
      </div>
      <div>
        <b-form-input
          v-model="info.price"
          placeholder="Enter price"
         class="my-3" required></b-form-input>
        
    </div>
     <b-button variant="outline-success " >Create</b-button>
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
  methods:{
      handleSubnitForm(){}
  }
};
</script>

<style>
</style>