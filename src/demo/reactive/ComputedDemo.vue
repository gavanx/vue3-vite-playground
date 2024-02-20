<script setup>
import { reactive, computed } from "vue";

const state = reactive({
  message: {
    data: "Hello Vue 3!!",
    age: 0,
  },
});

const double = computed(() => state.message.age * 2);
const clickAdd = () => ++state.message.age;
const clickReduce = () => --state.message.age;
</script>
<template>
  <div>
    <h3>
      {{ double }}
    </h3>
    <button @click="clickAdd">++2</button>
    <button @click="clickReduce">--2</button>
  </div>
</template>
