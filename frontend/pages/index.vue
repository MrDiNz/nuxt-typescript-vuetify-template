<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="2">
        test
        <v-icon>fas fa-bars</v-icon>
      </v-col>
      <v-col cols="2">
        test
        <v-icon>fas fa-bars</v-icon>
      </v-col>
    </v-row>
    <v-color-picker></v-color-picker>
    <Card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import Card from "~/components/Card.vue";

@Component({
  components: { Card }
})
export default class index extends Vue {}
</script>

<style scoped></style>
