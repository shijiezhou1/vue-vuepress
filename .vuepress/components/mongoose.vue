<template>
  <div class="mongoose">
    <h1>Basic Mongoose Use</h1>
    <button v-on:click="resetDisplay">{{ buttonMsg }}</button>
    <br />
    <input type="text" placeholder="Create a Post" v-model="text">
    <button v-on:click="postone">CLICK TO POST REQUEST</button>
    <pre class="text">{{ contents }}</pre>
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
      contents: '',
      text: null
    };
  },
  async created(){
    console.log("created always run first");
    try {
      const res = await axios.get('https://vue-two.herokuapp.com/api/posts/');
      const data = res.data;
      console.log(res.data);
      this.contents = data; //PRINT JSON
    } catch (error) {
        console.log(error); 
    }
  },
  methods: {
    resetDisplay() {
      this.contents = '';
    },
    postone(){
      axios.post('https://vue-two.herokuapp.com/api/posts/', {
        text: this.text,
        createdAt: new Date()
      })
      .then(function (response) {
       
        const res = axios.get('https://vue-two.herokuapp.com/api/posts/');
        // console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>
<style scoped>
.text{
  color: white;
}
</style>
