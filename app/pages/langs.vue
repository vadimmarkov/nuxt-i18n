<template>
    <Component1 />
    <Component2 />
</template>

<script setup lang="ts">
const Component1 = defineAsyncComponent(
    () => import('@@/app/Component1/Component1.vue')
);
const Component2 = defineAsyncComponent(
    () => import('@@/app/Component2/Component2.vue')
);
</script>

<style scoped></style>
