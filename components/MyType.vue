<template>
  <div class="my-type-container">
    <div @click="changeType(type)" :class="type" class="type">
      <span class="label">{{ type }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: String
  },
  methods: {
    changeType (type) {
      this.$emit('changedMyType', type)
    }
  }
}
</script>

<style>
.my-type-container {
  width: 100%;
}
.type {
  text-align: center;
  padding: 10px;
  color: white;
}
.fire {
  background-color: #ee4e32
}
.water {
  background-color: #71aaff
}
.grass {
  background-color: #a5d839
}
</style>
