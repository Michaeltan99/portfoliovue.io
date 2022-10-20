<script>
import imageStore from "../stores/image";
import BaseCard from "../components/CardComp.vue";
import { mapState } from "pinia";

export default {
  name: "ProjectComp",
  props: {
    data: Object,
  },
  components: {
    BaseCard,
  },
  computed: {
    ...mapState(imageStore, ["g$list"]),
  },
};
</script>

<template>
  <div class="project" id="projects">
    <h1 class="title">project</h1>
    <div class="sub-project">
      <template v-for="(img, index) in g$list" :key="index">
        <div class="konten">
          <RouterLink :to="{ name: 'detail', params: { id: img.slug } }">
            <BaseCard class="gambar" :data="img" />
          </RouterLink>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.project {
  border: 1px solid #000000;
  width: 90%;
  margin-left: 5%;
  min-height: 100vh;
  padding-top: 110px;
}
.title {
  text-transform: uppercase;
  text-align: center;
  color: white;
  margin-bottom: 20px;
}
.sub-project {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: auto;
}
.konten:hover {
  box-shadow: 0 2px 2px 0 rgba(239, 43, 43, 0.822),
    0 6px 20px 0 rgba(155, 27, 27, 0.86);
  transition: 0.8s all;
}
.gambar {
  width: 300px;
  height: 300px;
}
</style>
