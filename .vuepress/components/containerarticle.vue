<template>
  <div class="grid-container">
    <div class="grid-container">
      <div
        class="post"
        v-for="(post, index) in line1"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
       
        <a v-bind:href="line1[index].text.url" target="_blank">
          <h4 class="text">{{line1[index].text.title}}</h4>
          <h5 class="text">{{line1[index].text.description}}</h5>
          <img v-bind:src=formatImage(line1[index].text.image)>
        </a>
        <h6 class="text">{{ formatDate(post.createdAt) }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import database from '../database';

export default {
  mounted() {
    this.getCustomerServer();
    // this.getCustomerLocalhost();
  },
  data() {
    return {
      line1: "",
      line2: "",
    };
  },
  methods: {
    getCustomerServer() {
      axios.get(database.mongodb.url).then(getcustomer => {
        this.line1 = getcustomer.data;
      });
    },
    getCustomerLocalhost() {
      axios.get(database.localhostdatabase.url).then(getcustomer => {
        this.line1 = getcustomer.data;
      });
    },
    formatImage(imgUrl){
      if(imgUrl){
        return imgUrl;
      }
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YznahbCcaCBgKJ4j6nYvPHTYEt5MX9tAaQlrXnMjPNKtQVS6";
    },
    formatDate(date) {
      // ISO => date, time
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var d = new Date(date);
      var namedMonth = months[d.getMonth()];
      return new Date(date).toLocaleString();
    },
  }
};
</script>

<style>
a{
  color: white;
}
.grid-container {
  border-radius: 25px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 0px;
}
.post {
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 1px 20px;
  background-color: black;
  border-radius: 25px;
  color: white;
  max-width: 280px;
  min-width: 210px;
}
@media (min-width: 710px) and (max-width: 900px) {
  .grid-container {
    border-radius: 25px;
    display: block !important;
  }
}
@media (min-width: 0px) and (max-width: 414px) {
  .grid-container {
    border-radius: 25px;
    display: block !important;
  }
}
</style>