<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --primary-color: #8B008B;
  --secondary-color: #FF69B4;
  --dark-color: #4B0082;
}

.bg-primary-custom {
  background-color: var(--primary-color) !important;
}

.text-primary-custom {
  color: var(--primary-color) !important;
}

.btn-primary-custom {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-primary-custom:hover {
  background-color: var(--dark-color);
  border-color: var(--dark-color);
}
</style>