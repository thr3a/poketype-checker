<template>
  <div id="app">
    <div class="main">
      <p>1</p>
      <mainView :is="$store.state.view" />
    </div>
    <appFooter />
  </div>
</template>

<script>
import attack from '~/components/attack.vue'
import defence from '~/components/defence.vue'
import appFooter from '~/components/Footer.vue'

export default {
  components: {
    attack,
    defence,
    appFooter
  }
}
</script>
