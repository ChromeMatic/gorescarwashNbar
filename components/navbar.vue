<script lang="ts" setup>
 const motions = useMotions()
 const theme = useThemeStore()
 let isDark = computed(()=>{ return theme.get_theme })

 let options:Links[] = [
    {
      path:'/',
      name:'home'
    },
    {
      path:'/services',
      name:'our services'
    },
    {
      path:'/contact',
      name:'contact us'
    },
  ]
 let show = ref<boolean>(false)
</script>

<template>
  <section
   class="w-full flex flex-col space-y-2 justify-center items-center p-1"
   :class="isDark ? 'bg-Dark'
   :'bg-indigo-50'"
  >
    <nav
     class="w-full rounded-md flex px-4 py-1.5 justify-between items-center border-2"
     :class="isDark ? 'bg-innerDark border-dashed border-teal-900':'bg-white border-indigo-100'"
    >

      <img src="assets/vehicle.png" class="w-[2rem]" alt="logo"/>

      <div class="hidden  md:flex justify-center items-center space-x-4">
        <nuxt-link
         v-for="opt in options"
         :key="opt.name"
         :to="opt.path"
         class="p-1 lg:w-[8rem] flex justify-center items-center rounded-md border-2 capitalize transition-all ease-in-out duration-700
         hover:scale-110 font-semibold"
         :class="isDark ?
         'bg-teal-950 border-teal-900 hover:text-indigo-500 hover:bg-indigo-500/20 hover:border-indigo-500'
         :'hover:text-indigo-400 hover:border-indigo-500 hover:bg-indigo-500/10'"
        >
          <h2>{{ opt.name }}</h2>
        </nuxt-link>
      </div>

      <button
       @click="show = !show"
       class="border-2 rounded-md md:hidden mds:hidden flex justify-center items-center p-1"
       :class="isDark ? 'border-teal-900 bg-teal-950 text-teal-400'
       :''"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>

      </button>

      <button
        @click="theme.change_theme()"
        class="border-2 rounded-md p-1.5 flex justify-center items-center transitions-all ease-in-out
        duration-700"
        :class="isDark ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500'
        :''"
      >

        <svg
            v-if="isDark === true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>

        <svg
            v-if="isDark === false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
        >
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
        </svg>

      </button>

    </nav>

    <Transition
        :css="false"
        @leave="( _:any , done:any) => motions.div.leave(done)"
    >
      <div
       v-if="show"
       v-motion="'div'"
       :initial="drop_down_menu.initial"
       :enter="drop_down_menu.enter"
       :leave="drop_down_menu.leave"
       class="w-full md:hidden mds:hidden flex flex-col space-y-4 rounded-md p-2"
       :class="isDark ? 'bg-innerDark':'bg-white'"
      >
        <nuxt-link
         v-for="opt in options"
         :key="opt.name"
         :to="opt.path"
         class="p-2 rounded-md border-2 capitalize flex justify-center items-center"
         :class="isDark ?
         'bg-teal-950 border-teal-900 hover:text-indigo-500 hover:bg-indigo-500/20 hover:border-indigo-500'
         :''"
        >
          <h2>{{ opt.name }}</h2>
        </nuxt-link>
      </div>
    </Transition>
  </section>
</template>