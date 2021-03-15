<template>
  <v-carousel hide-delimiter-background height="400">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height">
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#2e6b23', '#848d01', '#885d06'],
      slides: ['First', 'Second', 'Third'],
    };
  },
};
</script>

<style></style>
