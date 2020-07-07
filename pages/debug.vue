<template>
  <div class="container">
    <button @click="increment">
      increment
    </button>
    <button @click="decrement">
      decrement
    </button>
    {{ $store.state.counter }}
  </div>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>
