<template>
  <div class="signatureheaderStyle">
    <img
      class="selflogo"
      src="../public/img/newlogo.svg"
      alt=""
    >
    <div class="signatureText">Jay Zhou - Passion in freelance, web developer and processing </div>
    <!-- <div class="awesome" style="background-color: green;" @click="authit()">button signup</div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      auth: ''
    };
  },
  methods: {
  }
}
</script>

<style scoped>
.signatureheaderStyle {
  display: flex;
}
.signatureText {
  margin: 10px 10px;
  font-size: 20px;
}
.selflogo {
  width: 100px;
  height: 100px;
}
</style>