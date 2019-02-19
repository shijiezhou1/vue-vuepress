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
    deletePost(idNum) {
      console.log(idNum);
    }
  }
};
</script>
<style scoped>
/*fade animation transition*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
