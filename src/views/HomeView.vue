<script>
import BaseProject from '../views/ProjectView.vue'
import DescView from '../views/DescView.vue'

export default {
  name: "HomePage",
  components:{
    BaseProject,
    DescView,
  },
};
</script>

<template>

  <DescView/>
  <BaseProject/>

</template>
