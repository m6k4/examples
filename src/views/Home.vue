<template>
  <div class="home">
    <ReactivityExample />
    
  </div>
</template>

<script>
// @ is an alias to /src
import ReactivityExample from "@/components/ReactivityExample";


export default {
  name: "Home",
  components: {
    ReactivityExample,
  }
};
</script>
  
<style lang="scss">
.home{
text-align: -webkit-center;
}
</style>