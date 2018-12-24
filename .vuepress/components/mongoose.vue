<template>
  <div class="mongoose">
    <h1>Basic Mongoose Use</h1>
    <button v-on:click="connect">{{ buttonMsg }}</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted");
    // const mongoose = require('mongoose');
    // const result = mongoose.connect('mongodb+srv://abc1234:abc1234@cluster0-7lnqj.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
  },
  data() {
    return {
      buttonMsg: "Click to generate"
    };
  },
  methods: {
    connect() {},
    get() {
      console.log("okok");
    }
  }
};
</script>
<style scoped>
</style>
