<script lang="ts" setup>
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme})
</script>

<template>
  <section
   class="flex flex-col lg:space-y-0.5 space-y-2 min-h-screen scroll-smooth transition-all ease-in-out duration-1000 lg:overflow-hidden "
   :class="isDark ? 'bg-innerDark text-white'
   :'bg-indigo-50 text-teal-800'"
  >

    <div class="sticky top-0 z-40">
      <navbar/>
    </div>

    <div class="p-1 h-full">
      <slot/>
    </div>

  </section>
</template>