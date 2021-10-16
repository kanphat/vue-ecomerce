<template>
  <b-container fluid>
    <div class="mt-2 table">
        <b-table striped hover :items="items" :fields="fields" class="text-center danger" ></b-table>
      </div>
  </b-container>
  

</template>

<script>
export default {
  data() {
    return {
      items: [
        { no: "1", goods_name: "", price_product: "" },
        { no: "2", first_name: "", last_name: "" },
        { no: "3", first_name: "", last_name: "" },
        { no: "4", first_name: "", last_name: "" },
      ],
    };
  },
};
</script>

<style>
</style>