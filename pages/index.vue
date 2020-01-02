<template>
  <div class="main">
    <div class="rival-types">
      <rival-type
        :type="type"
        :score="calcScore(type)"
        :key=index
        v-for="(type, index) in types"
      />
    </div>
    <div class="my-types">
      <my-type :type="type" :key=index v-for="(type, index) in types" @changedMyType="setSelected" />
    </div>
    {{ selected }}
  </div>
</template>

<script>
import rivalType from '~/components/RivalType.vue'
import myType from '~/components/MyType.vue'
const pokeTypes = require('poke-types')

export default {
  components: {
    rivalType,
    myType
  },
  data: () => {
    return {
      types: ['fire', 'water', 'grass'],
      // score: 0.5,
      scores: {},
      selected: ''
    }
  },
  methods: {
    setSelected (type) {
      this.selected = type
      this.scores = pokeTypes.getTypeStrengths(type)
    },
    calcScore (rivalType) {
      const score = this.scores[rivalType]
      switch (score) {
        case 0:
          return '効果なし'
        case 1:
          return ' '
        case 2:
          return 'x 2'
        case 4:
          return 'x 4'
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

<style>
.main {
  max-width: 600px;
}
.rival-types {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.my-types {
  display: flex;
  flex-direction: row;
}
</style>
