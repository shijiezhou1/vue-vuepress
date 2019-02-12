<template>
  <div class="mongoose">
    <transition name="fade">
      <h1 v-if="ShowTitleAnimation">Projects Lists</h1>
    </transition>
    <containerarticle></containerarticle>
    <hr>
    <contentbutton></contentbutton>
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
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {},
  created() { },
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
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
        .catch(function (error) {
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

/*fade animation transition*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
