<template>
  <section
       class="scroll-smooth min-h-screen transition-all ease-in-out duration-1000 lg:overflow-hidden
       flex flex-col"
  >

    <header class="sticky top-0 z-50">
      <navbar/>
    </header>

    <div>
      <slot/>
    </div>


  </section>
</template>