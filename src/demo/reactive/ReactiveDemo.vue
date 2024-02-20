<script setup>
import { reactive, effect, onMounted } from "vue";
import { dataEffectDemo } from "./func";
import ComputedDemo from "./ComputedDemo.vue";

onMounted(() => {
  // dataEffectDemo();
});
</script>

<template>
  <h1>reactive</h1>
  <ComputedDemo />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
