<template>
  <div class="rival-type-container">
    <div :class="type" class="type">
      <span class="label">{{ localedType }}</span>
    </div>
    <div class="effectiveness">
      {{ score }}
    </div>
  </div>
</template>
<script>
import typeLocale from './typeLocale.js'

export default {
  props: {
    type: String,
    score: String
  },
  computed: {
    localedType () {
      return typeLocale[this.type]
    }
  }
}
</script>

<style scoped>
@import "./type.scss";

.rival-type-container {
  text-align: center;
  width: 30%;
  margin-bottom: 10px;
}
.effectiveness {
  display:inline-block;
  font-size: 16px;
  line-height: 15px;
}
.type {
  margin-left: auto;
  margin-right: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
</style>
