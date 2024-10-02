<script lang="ts" setup>
 const theme = useThemeStore()
 let isDark = computed<boolean>(()=>{ return theme.get_theme })
</script>

<template>
  <section
    v-motion="page_animation"
    class="w-full h-full flex flex-col flex-grow space-y-2 font-Nunito p-1 rounded-md"
    :class="isDark ? 'bg-Dark text-white'
    :'bg-white text-teal-700'"
  >

    <div
     class="w-full lg:h-[30rem]  flex lg:flex-row flex-col lg:space-x-2
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

       <div class="lg:h-full w-full grid grid-cols-10 grid-rows-6 gap-2">

        <div
          v-motion="stagger_effect(525,-25,0)"
          class="lg:col-span-5 col-span-5 lg:row-span-4 row-span-2
          bg-image_1 bg-cover rounded-md lg:h-full h-72"
        ></div>

        <div
         v-motion="stagger_effect(575,-25,0)"
         class="lg:col-span-5 col-span-5 lg:row-span-3 row-span-2
          bg-image_2 bg-cover rounded-md lg:h-full h-72"
        ></div>

        <div
          v-motion="stagger_effect(625,-25,0)"
          class="lg:col-span-5 col-span-5 lg:row-span-4 row-span-3
          bg-image_3 bg-cover rounded-md lg:h-full h-72"
        ></div>

        <div
          v-motion="stagger_effect(675,-25,0)"
          class="lg:col-span-5 col-span-5 lg:row-span-3 row-span-3
          bg-image_4 bg-cover rounded-md"
        ></div>

      </div>

    </div>

    <div
        v-motion="stagger_effect(825,25,0)"
     class="w-full rounded-md border-2 flex flex-col space-y-2 flex-grow p-8 border-dashed"
     :class="isDark ? 'border-teal-900 bg-innerDark'
     :'bg-indigo-50'"
    >
      <div class="w-full flex justify-center items-center">
         <h2 class="text-4xl overline font-smeibold">
           Wash
         </h2>
      </div>

      <div class="w-full flex space-x-2">

          <div>
            <NuxtImg
                class="rounded-md"
               src="https://images.unsplash.com/photo-1618056255948-815057f89f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          <div class="flex items-center justify-center w-full text-center text-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet
              delectus explicabo in incidunt mollitia nihil praesentium quibusdam repellat sit?
              Aliquid at excepturi quae.
            </p>
          </div>

      </div>
    </div>

  </section>
</template>