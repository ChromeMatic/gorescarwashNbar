<script lang="ts" setup>
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme})
</script>

<template>
  <section
   class="scroll-smooth transition-all ease-in-out duration-1000 lg:overflow-hidden flex flex-col"
   :class="isDark ? 'bg-innerDark text-white'
   :'bg-indigo-50 text-teal-800'"
  >

    <header class="sticky top-0 z-30">
      <navbar/>
    </header>

    <div class="p-1" >
      <slot/>
    </div>

  </section>
</template>