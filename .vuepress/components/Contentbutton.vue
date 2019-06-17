<template>
  <div>
    <input
      class="urlinput"
      type="text"
      placeholder="Create a Post with Preview"
      v-model="urlString"
    >
    <button
      class="urlbutton"
      v-on:click="generatePreview()"
    >SEND URL</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      urlString: null
    }
  },
  methods: {
    generatePreview() {
      const randomKey = "5c32c72da32d9cefe75fadf1111936278f588ade3617c";
      const keyVal = { q: this.urlString, key: randomKey };
      axios.post("https://api.linkpreview.net", keyVal).then(resp => {
        console.log(resp.data);
        // // SAVE
        const localURL = "http://localhost:3000/api/post";
        const saveURL = "https://expressone.herokuapp.com/api/post";
        const optApiUrl = "https://shijiezhou.herokuapp.com/post"
        axios.post(optApiUrl, {
          text: resp.data,
          createdAt: new Date()
        })
          .then(response => {
            axios.get(optApiUrl)
              .then(update => {
                console.log(update);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
  }
}
</script>

<style scoped>
.urlinput {
  width: 100%;
  height: 30px;
}

.urlbutton {
  width: 100%;
  height: 30px;
}
</style>
