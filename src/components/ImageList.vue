<template>
  <div>
    <img v-for="image in allImages" :src="image.link" />
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
    ...mapGetters(['allImages'])
  }
};
</script>
