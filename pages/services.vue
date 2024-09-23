<script lang="ts" setup>
const theme = useThemeStore()
let isDark = computed<boolean>(()=>{ return theme.get_theme })
</script>

<template>
  <section
    v-motion="page_animation"
    class="w-full flex justify-center items-center font-Nunito p-2 rounded-md"
    :class="isDark ? 'bg-teal-950 text-white'
    :'bg-white text-teal-700'"
  >
    <h2 class="text-3xl font-medium">
      Services Page
    </h2>
  </section>
</template>