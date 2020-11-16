<template>
  <div class="rival-type-container">
    <div :class="type" class="type">
      <span>{{ localedType }}</span>
    </div>
    <div :class="scoreClass" class="effectiveness">
      {{ localedScore }}
    </div>
  </div>
</template>
<script>
import typeLocale from './typeLocale.js'

export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    score: {
      type: Number,
      default: -1
    }
  },
  computed: {
    localedType () {
      return typeLocale[this.type]
    },
    scoreClass () {
      if (this.score > 1) {
        return 'ultra'
      } else {
        return ''
      }
    },
    localedScore () {
      switch (this.score) {
        case 0:
          return '効果なし'
        case 1:
          return ''
        case 2:
          return 'x 2.0'
        case 4:
          return 'x 4.0'
        case 0.25:
          return 'x 0.25'
        case 0.5:
          return 'x 0.5'
      }
      return '' // 初期
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./type.scss";

.rival-type-container {
  text-align: center;
  width: 30%;
  height: 9vh;
}
.effectiveness {
  display:inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #383e56;
  &.weak {
    color: #05dfd7;
  }
  &.ultra {
    color: #fa26a0;
  }
}
.type {
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
</style>
