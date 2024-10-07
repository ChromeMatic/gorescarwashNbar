<script lang="ts" setup>

</script>

<template>
  <section
    v-motion="page_animation"
    class="w-full h-full flex flex-col flex-grow space-y-2 font-Nunito p-1 rounded-md"
    :class="useIsDark() ? 'bg-Dark text-white'
    :'bg-white text-teal-700'"
  >

    <div
     class="w-full lg:h-[30rem]  flex lg:flex-row flex-col lg:space-x-2
     space-x-0 space-y-2 lg:space-y-0 lg:p-2 p-4 rounded-md transition-all ease-in-out duration-700"
     :class="useIsDark() ? 'bg-innerDark'
     :''"
    >
        <div
          class="w-full lg:h-full h-[8rem] flex justify-center items-center rounded-md overflow-hidden lg:p-0 p-2"
          :class="useIsDark() ? 'bg-night bg-cover text-white'
          :'bg-indigo-50'"
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
     :class="useIsDark() ? 'border-teal-900 bg-innerDark'
     :'bg-indigo-50'"
    >
      <div class="w-full flex justify-center items-center space-x-4">

        <img
            loading="lazy"
            class="rounded-md w-full transition-all ease-in-out duration-700 h-14 w-14"
            src="/images/wired-lineal-1698-sponge-hover-pinch.gif"
            alt="sponge"
        />

         <h2 class="text-4xl overline font-smeibold">
           Wash
         </h2>

        <img
            loading="lazy"
            class="rounded-md w-full transition-all ease-in-out duration-700 h-14 w-14"
            src="/images/wired-lineal-1698-sponge-hover-pinch.gif"
            alt="sponge"
        />

      </div>

      <div
        class="w-full flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-4"
        :class="useIsDark() ? '':''"
      >

          <div>
            <img
               loading="lazy"
               class="rounded-md w-full transition-all ease-in-out duration-700"
               :src="useIsDark() ?
               'https://images.unsplash.com/photo-1683728960304-4e0c299359bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
               :'https://images.unsplash.com/photo-1632158433377-f80436214f6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
               alt="rs6"
            />
          </div>

          <div
            class="flex items-center justify-center w-full text-center text-xl p-2 rounded-md border-2"
            :class="useIsDark() ? 'bg-teal-950 border-teal-900':'bg-white'"
          >
            <p>
              Welcome to Gore's Car Wash & Bar, where we take care of your ride while you kick
              back and relax! Enjoy a sparkling clean car and unwind with a cold Red Stripe beer in hand.
              Whether you're here for a quick wash or a laid-back afternoon, we've got you covered.
            </p>
          </div>

      </div>

    </div>

  </section>
</template>