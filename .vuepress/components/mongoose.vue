<template>
  <div class="mongoose">
    <h1>Basic Mongoose Use</h1>
    <button v-on:click="resetDisplay">{{ buttonMsg }}</button><br>
    <input type="text" placeholder="Create a Post" v-model="text">
    <button v-on:click="postone">CLICK TO POST REQUEST</button>
    <hr>
    <div class="post-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        <p class="text">{{ post.text }}</p>
        <p class="text">{{ formatDate(post.createdAt) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    console.log("mounted");
    this.getData();
  },
  data() {
    return {
      buttonMsg: "Click to generate",
      text: null,
      posts: null
    };
  },
  computed: {},
  created() {},
  methods: {
    async getData() {
      console.log("created always run first");
      try {
        const res = await axios.get("https://vue-two.herokuapp.com/api/posts/");
        const data = res.data;
        this.contents = data; //PRINT JSON
        this.posts = data;
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    formatDate(date) {
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
      return `${namedMonth} ${d.getDate()}, ${d.getFullYear()} }`;
    },
    deletePost(idNum) {
      console.log(idNum);
    },
    resetDisplay() {
      this.posts = "";
    },
    postone() {
      // let self = this;
      axios
        .post("https://vue-two.herokuapp.com/api/posts/", {
          text: this.text,
          createdAt: new Date()
        })
        .then(response => {
          axios.get("https://vue-two.herokuapp.com/api/posts/").then(update => {
            this.contents = update.data;
            this.posts = update.data;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.text {
  color: white;
}
.post-container {
  border-radius: 25px;
}
.post {
  margin: 10px;
  padding: 10px;
  background-color: black;
  border-radius: 25px;
}
</style>
