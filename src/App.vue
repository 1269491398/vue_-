<template>
  <div>
      <router-view></router-view>
      <Footer-Guide></Footer-Guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: { FooterGuide },

}
</script>

<style>

</style>