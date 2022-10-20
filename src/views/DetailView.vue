<script>
import imageStore from "../stores/image";
import ImageComp from "../components/ImageComp.vue";
import { mapState } from "pinia";
export default {
  name: "DetailView",
  components: {
    ImageComp,
  },
  computed: {
    ...mapState(imageStore, ["g$detail"]),
    detail() {
      return this.g$detail(this.$route.params.id);
    },
  },
};
</script>

<template>
  <div class="konten-gambar">
    <h2>{{ detail.title }}</h2>
    <ImageComp class="gambar" :src="detail.img" />
  </div>
</template>

<style>
.konten-gambar{
  border: 1px solid black;
  width: 90%;
  margin-left: 5%;
  min-height: 100vh;
  padding-top: 110px;
}
h2 {
  color: #d2001a;
  text-align: center;
  margin-bottom: 30px;
}
.gambar {
  width: 500px;
  height: 500px;
  margin-left: 32%;
}

</style>
