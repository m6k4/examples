<template>
  <div class="home">
    <Parent :app-name="'Nazwa aplikacji'"
            :app-version="'2.0'"
            :app-description="'Opis aplikacji'"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Parent from "@/components/Parent";

export default {
  name: "NextTicView",
  components: {
    Parent
  }
};
</script>
