<template>
  <div class="mongoose">
    <transition name="fade">
      <h1 v-if="ShowTitleAnimation">Projects Lists</h1>
    </transition>

    <hr>
    <containerarticle></containerarticle>
    <hr>

    <input class="urlinput" type="text" placeholder="Create a Post with Preview" v-model="urlString">
    <button class="urlbutton" v-on:click="generatePreview()">SEND URL</button>
    <!-- <button v-on:click="analysisData">CLICK TO POST REQUEST</button> -->
    <!-- <button class="btn btn-primary" @click="addItem">Add Item</button> -->

    <!-- <div class="grid-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        <h4 class="text">{{posts[index].text.title}}</h4>
        <h5 class="text">{{posts[index].text.description}}</h5>
        <a v-bind:href="posts[index].text.url" target="_blank">
          <img v-bind:src="posts[index].text.image">
        </a>

        <h6 class="text">{{ formatDate(post.createdAt) }}</h6>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.ShowTitleAnimation = true;
  },
  data() {
    return {
      ShowTitleAnimation: false,
      text: null,
      posts: null,
      urlString: null,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {},
  created() {},
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    generatePreview() {
      const randomKey = "5c32c72da32d9cefe75fadf1111936278f588ade3617c";
      const keyVal = {q: this.urlString,key: randomKey};
      axios.post("https://api.linkpreview.net", keyVal).then(resp => {
          console.log(resp.data);
          // // SAVE
          const localURL = "http://localhost:3000/api/post";
          const saveURL = "https://expressone.herokuapp.com/post";
          axios.post(localURL, {
              text: resp.data,
              createdAt: new Date()
              })
              .then(response => {
              axios.get(localURL)
                .then(update => {
                  // this.contents = update.data;
                  // this.posts = update.data;
                });
            })
            .catch(function(error) {
              console.log(error);
            });
        });
    },
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
      // return `${namedMonth} ${d.getDate()}, ${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    },
    deletePost(idNum) {
      console.log(idNum);
    },
    analysisData() {
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
.list-group-item {
  border: 1px solid;
  margin-bottom: 10px;
}

.text {
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

/*fade animation transition*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.urlinput{
  width: 100%;
  height: 30px;
}

.urlbutton{
  width: 100%;
  height: 30px;
}
</style>
