<script lang="ts" setup>
 const theme = useThemeStore()
 let isDark = computed<boolean>(()=>{ return theme.get_theme })
</script>

<template>
  <section
    v-motion="page_animation"
    class="w-full h-full flex flex-col justify-center items-center font-Nunito p-1 rounded-md space-y-4"
    :class="isDark ? 'bg-teal-950 text-white'
    :'bg-white text-teal-700'"
  >
      <div
          v-motion="stagger_effect(775,25,0)"
          class="w-full flex flex-col space-y-4 lg:py-8 py-4 justify-center items-center px-4 text-center text-lg"
          :class="useIsDark() ? 'bg-innerDark'
          :''"
      >
        <h2
            v-motion="stagger_effect(825,-25,0)"
            class="text-3xl overline"
        >
          About Us
        </h2>
        <p
            v-motion="stagger_effect(875,25,0)"
        >
          At Gore's Car Wash & Bar, located in the heart of Portmore, we combine quality car care with a unique,
          laid-back atmosphere. Our mission is simple: provide top-notch car wash services while offering a space
          for our customers to unwind. Whether you're looking to give your vehicle a sparkling clean or just want
          to relax with a refreshing Red Stripe beer, we've got it all. At Gore’s, we believe in creating a friendly
          and enjoyable experience for both you and your car. Stop by and experience Portmore’s one-of-a-kind car wash
          and bar!
        </p>
      </div>
      <div
          v-motion="stagger_effect(975,-25,0)"
          class="w-full flex flex-col justify-center items-center space-y-6 px-4 py-8 rounded-md border"
          :class="useIsDark() ? 'bg-indigo-500/10 border-indigo-500'
          :'border-indigo-300 bg-indigo-50 border-2'"
      >
        <h1
          class="overline text-3xl"
          v-motion="stagger_effect(1275,-25,0)"
        >
          Our Location
        </h1>

        <iframe
         class="rounded-md border-2"
         v-motion="stagger_effect(1475,25,0)"
         src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3795.7115033149375!2d-76.90073!3d17.945605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU2JzQ0LjIiTiA3NsKwNTQnMDIuNiJX!5e0!3m2!1sen!2sjm!4v1728256442401!5m2!1sen!2sjm"
         width="100%"
         height="375"
         style="border:0;"
         allowfullscreen=""
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  </section>
</template>