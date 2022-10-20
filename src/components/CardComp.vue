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
    <ImageComp :src="data.img"/>
    <h1>{{data.title}}</h1>
</template>

<style>
h1{
  margin-top: 30px;
  color: #d2001a;
  text-align: center;
}
</style>

