<template>
  <label class="text-reader">
    Upload a .json!
    <input type="file" @change="loadTextFromFile">
  </label>
</template>

<script>
    import Vue from 'vue'

    export default {        
    methods: {
        
        loadTextFromFile(ev) {
            const file = ev.target.files[0];
            const reader = new FileReader();

            reader.onload = e => this.$emit("load", e.target.result);
            reader.readAsText(file);
        }
    }
    };
</script>

<style>
.text-reader {
  background-color: white;
  border: 5px double black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>