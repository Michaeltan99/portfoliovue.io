<script>
import ImageComp from "./ImageComp.vue";

export default {
  name: "CardComp",
  props: {
    data: Object,
  },
  components: {
    ImageComp,
  },
};
</script>

<template>
  <div class="card">
    <ImageComp :src="data.img" />
    <h1>{{ data.title }}</h1>
  </div>
</template>

<style>
h1 {
  margin-top: 30px;
  color: #d2001a;
  text-align: center;
}
.card{
  padding: 30px;
}
</style>
