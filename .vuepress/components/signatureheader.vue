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
    // authit() {
      // var client_id = '12345';
      // var client_secret = 'secret';
      // var data = {
      //   "username": "root",
      //   "password": "r",
      //   "grant_type": "password"      }

      // axios({
      //   method: 'POST',
      //   url: 'http://localhost:3000/token',
      //   data: data,
      //   dataType: 'json',
      //   contentType: 'application/json;charset=utf-8',
      //   headers: {
      //     Authorization: "Bearer " + btoa(client_id + ":" + client_secret)
      //   },
      // })
      //   .then(function (response) {
      //     window.localStorage.setItem('myfucktoken', response.data.access_token);
      //     sessionStorage.setItem("myfucktoken-session", response.data.access_token);
      //     console.log(response.data.access_token);
      //   });
    }
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