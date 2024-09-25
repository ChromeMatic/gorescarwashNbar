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
     class="w-full lg:h-[30rem] h-[48rem] flex lg:flex-row flex-col lg:space-x-2
     space-x-0 space-y-2 lg:space-y-0 lg:p-2 p-4 rounded-md transition-all ease-in-out duration-700"
     :class="isDark ? 'bg-innerDark'
     :''"
    >
        <div
          class="w-full lg:h-full h-[8rem] flex justify-center items-center rounded-md overflow-hidden lg:p-0 p-2"
          :class="isDark ? 'bg-teal-950 text-white'
          :'bg-[#F1F1F1]'"
        >
          <h1
              class=" text-center lg:text-8xl text-4xl"
          >
            Gore's Car Wash & Bar 🍻
          </h1>
        </div>

       <div class="lg:h-full  w-full grid grid-cols-10 grid-rows-6 gap-2">

        <div class="lg:col-span-5 col-span-7 lg:row-span-4 row-span-2">
          <NuxtImg
              class="w-full lg:h-full mds:h-1/4 overflow-hidden rounded-2xl object-cover"
              src="/images/PXL_20240915_191158392.jpg"
              loading="lazy"
          />
        </div>

        <div class="lg:col-span-5 col-span-3 lg:row-span-3 row-span-2">
          <NuxtImg
              class="w-full h-full overflow-hidden rounded-2xl object-cover"
              src="/images/lucas-clarysse-iu-cLlLPFcY-unsplash.jpg"
              loading="lazy"
          />
        </div>

        <div class="lg:col-span-5 col-span-4 lg:row-span-4 row-span-3">
          <NuxtImg
              class="w-full h-full overflow-hidden rounded-2xl object-cover"
              src="/images/PXL_20240915_191143993.MP.jpg"
              loading="lazy"
          />
        </div>

        <div class="lg:col-span-5 col-span-6 lg:row-span-3 row-span-4">
          <NuxtImg
              class="w-full h-full overflow-hidden rounded-2xl object-cover"
              src="/images/PXL_20240915_191223017.jpg"
              loading="lazy"
          />
        </div>

      </div>
    </div>

  </section>
</template>