<template>
  <div class="mongoose">
    <h1>Basic Mongoose Use</h1>
    <button v-on:click="get">{{ buttonMsg }}</button>
    <p class="text">{{ contents }}</p>
  </div>
</template>

<script>
import axios from 'axios';
   
export default {
  mounted() {
    console.log("mounted");
 
  },
  data() {
    return {
      buttonMsg: "Click to generate",
      contents: ''
    };
  },
  async created(){
    console.log("created");
    // try {
    //   const res = await axios.get('https://vue-two.herokuapp.com/api/posts/');
    //   const data = res.data;
    //   console.log(res.data);
    //   this.contents = data;
    // } catch (error) {
        
    // }
  },
  methods: {
    connect() {
      
    },
    get() {
      this.contents = '';
    }
  }
};
</script>
<style scoped>
</style>
