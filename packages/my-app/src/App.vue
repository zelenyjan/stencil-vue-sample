<script setup>
import {ref} from "vue";
import {GreenButton, GreenInput} from "@zelenyjan/stencil-vue-sample-vue";

const value = ref("Default value for H1, button and input")

const setToDefault = (e) => {
  console.log(e)
  value.value = "Default value for H1, button and input"
}
</script>

<template>
  <h1>{{value}}</h1>

  <GreenButton :label="value" @click="setToDefault"></GreenButton>
  <GreenInput v-model="value"></GreenInput>
</template>
