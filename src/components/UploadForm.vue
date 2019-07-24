<template>
  <div class="file-dropper">
    <input
      type="file"
      multiple
      accept="image/*"
      @change="uploadImages($event.target.files)"
    />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',

  methods: {
    ...mapActions(['uploadImages'])
  }
};
</script>

<style scoped>
  .file-dropper {
    height: 30vh;
    padding: 10px;
    border: 2px solid #666;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .file-dropper:hover {
    background-color: #eee;
  }

  input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
</style>
