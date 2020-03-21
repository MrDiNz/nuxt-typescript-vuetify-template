<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <v-btn @click="testCLick" class="error">test</v-btn>
    <v-icon>fas fa-bar</v-icon>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {
  testCLick() {
    this.$router.push("/testRoute");
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
