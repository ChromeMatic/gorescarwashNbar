<script lang="ts" setup>
 const theme = useThemeStore()
 let isDark = computed<boolean>(()=>{ return theme.get_theme })
</script>

<template>
  <section
    v-motion="page_animation"
    class="w-full h-full flex flex-col space-y-2 font-Nunito p-1 rounded-md"
    :class="isDark ? 'bg-teal-950 text-white'
    :'bg-white text-teal-700'"
  >


    <div
     class="w-full lg:h-[30rem] h-[26rem] flex lg:flex-row flex-col lg:space-x-2
     space-x-0 space-y-1 lg:space-y-0 p-1.5 rounded-md
      transition-all ease-in-out duration-700"
     :class="isDark ? 'bg-innerDark'
     :''"
    >
        <div
            class="w-full h-full flex justify-center items-center bg-main rounded-md lg:p-0 p-6"
            :class="isDark ? 'bg-night':'bg-main text-white'"
        >
          <h2 class="text-3xl font-medium">
            Gore's car wash and bar
          </h2>
        </div>

        <div class="h-full w-full grid grid-cols-10 grid-rows-6 gap-2">

          <div class="lg:col-span-5 col-span-7 lg:row-span-4 row-span-2">
              <img
                  class="w-full h-full overflow-hidden rounded-3xl object-cover"
                  src="/images/PXL_20240915_191158392.jpg"
                  alt=""
              >
          </div>

          <div class="lg:col-span-5 col-span-3 lg:row-span-3 row-span-2">
            <img
                class="w-full h-full overflow-hidden rounded-3xl object-cover"
                src="/images/lucas-clarysse-iu-cLlLPFcY-unsplash.jpg"
                alt=""
            >
          </div>

          <div class="lg:col-span-5 col-span-4 lg:row-span-4 row-span-3">
            <img
                class="w-full h-full overflow-hidden rounded-3xl object-cover"
                src="/images/PXL_20240915_191143993.MP.jpg"
                alt=""
            >
          </div>

          <div class="lg:col-span-5 col-span-6 lg:row-span-3 row-span-2">
            <img
                class="w-full h-full overflow-hidden rounded-3xl object-cover"
                src="/images/PXL_20240915_191223017.jpg"
                alt=""
            >
          </div>

        </div>
    </div>



  </section>
</template>