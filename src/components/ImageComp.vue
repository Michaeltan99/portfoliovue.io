<script setup>
const props = defineProps(['src']);
const imageUrl = new URL(`/src/assets/img/${props.src}`, import.meta.url).href;
</script>

<template>
    <img :src="imageUrl" alt="" class="gambar">
</template>

<style>
.gambar {
  width: 300px;
  height: 300px;
}
</style>