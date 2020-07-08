<template>
  <div class="my-type-container">
    <div
      @click="toggleType(type)"
      :class="[type, {border: isActive}]"
      class="type"
    >
      <span class="label">{{ localedType }}</span>
    </div>
  </div>
</template>
<script>
import typeLocale from './typeLocale.js'
export default {
  props: {
    type: String,
    isActive: Boolean
  },
  computed: {
    localedType () {
      return typeLocale[this.type]
    }
  },
  methods: {
    toggleType (type) {
      if (type === 'reset') {
        this.$emit('resetType')
      } else {
        this.$emit('toggleType', type)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./type.scss";

.my-type-container {
  width: 20%;
  text-align: center;
}
.type {
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  &.border {
    border: 4px solid #404040;
  }
}
</style>
