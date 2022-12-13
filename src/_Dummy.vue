<template>
  <section class="Dummy">
    Dummy works - {{ msg }} {{ count }}
  </section>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

// TODO: Can't do this now.
// Waiting for Vue v3.3
// For now just copy-paste props from the interface file
// defineProps<IDummyProps>();

const count = ref(0);
</script>

