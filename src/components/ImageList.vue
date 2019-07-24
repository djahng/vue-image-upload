<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="image in allImages" :src="image.link" />
    </div>

    <div v-else>
      <h2>Please log in to get started</h2>

      <div class="image-container">
        <img src="//i.imgur.com/6XCftbM.jpg" />
        <img src="//i.imgur.com/KN2EGZ3.jpg" />
        <img src="//i.imgur.com/PLehguA.jpg" />
        <img src="//i.imgur.com/j7NIQVi.png" />
        <img src="//i.imgur.com/Iu5ZWcR.jpg" />
        <img src="//i.imgur.com/9PmJ68D.jpg" />
        <img src="//i.imgur.com/TSg3ftj.jpg" />
        <img src="//i.imgur.com/GMY8lAx.jpg" />
        <img src="//i.imgur.com/O00On9N.jpg" />
        <img src="//i.imgur.com/1ScWiCU.jpg" />
        <img src="//i.imgur.com/Ehwb9aj.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',

  created() {
    this.fetchImages();
  },

  methods: {
    ...mapActions(['fetchImages'])
  },

  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  }
};
</script>

<style scoped>
  .image-container {
    column-count: 3;
    column-gap: 0;
  }

  img {
    max-width: 100%;
    padding: 5px;
  }
</style>
