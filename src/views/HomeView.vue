<script>
import DescView from '../views/DescView.vue'
import BaseProject from '../views/ProjectView.vue'

export default {
  name: "HomePage",
  components:{
    DescView,
    BaseProject
  },
};
</script>

<template>

  <DescView/>
  <BaseProject/>

</template>
