<template>
  <span :style="{ color: color }">
    <slot />
  </span>
</template>

<script>
export default {
  props: { color: { type: String, default: "red" } },
};
</script>
