<template>
  <div class="grid-container">
    <div>HERE IS ALL THE LIST</div>
    <div class="text">{{line1}}</div>
    <div class="text">{{line2}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.getCustomerServer();
    this.getCustomerLocalhost();
  },
  data() {
    return {
      line1: "",
      line2: "",
      expressServer: "https://expressone.herokuapp.com/customer/all",
      expressLocalhost: "http://localhost:3000/customer/all"
    };
  },
  methods: {
    getCustomerLocalhost() {
      axios.get(this.expressLocalhost).then(getcustomer => {
        console.log(getcustomer.data);
        this.line1 = getcustomer.data;
      });
    },
    getCustomerServer() {
      axios.get(this.expressLocalhost).then(getcustomer => {
        console.log(getcustomer.data);
        this.line2 = getcustomer.data;
      });
    }
  }
};
</script>

<style lang="">
</style>