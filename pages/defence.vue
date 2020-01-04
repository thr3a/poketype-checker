<template>
  <div id="app">
    <div class="main">
      <div class="rival-types">
        <rival-type
          :type="type"
          :score="calcScore(type)"
          :key="index"
          v-for="(type, index) in types"
        />
      </div>
      <div class="my-types">
        <my-type
          :type="type"
          :isActive="isActive(type)"
          :key="index"
          v-for="(type, index) in types"
          @toggleType="chengedType"
        />
        <my-type
          :type="aaa"
          @resetType="resetType"
        />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import rivalType from '~/components/RivalType.vue'
import myType from '~/components/MyType.vue'
import AppFooter from '~/components/Footer.vue'
const pokeTypes = require('poke-types')

export default {
  components: {
    rivalType,
    myType,
    AppFooter
  },
  data: () => {
    return {
      types: [
        'normal',
        'fire',
        'water',
        'electric',
        'grass',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dragon',
        'dark',
        'steel',
        'fairy'
      ],
      aaa: 'reset',
      scores: {},
      activeTypes: []
    }
  },
  methods: {
    chengedType (type) {
      if (this.activeTypes.includes(type)) {
        this.activeTypes = this.activeTypes.filter(e => e !== type)
      } else if (this.activeTypes.length === 2) {
        this.activeTypes = [this.activeTypes[1], type]
      } else {
        this.activeTypes.push(type)
      }
      if (this.activeTypes.length === 1) {
        this.scores = pokeTypes.getTypeWeaknesses(this.activeTypes[0])
      }
      if (this.activeTypes.length === 0) {
        this.scores = {}
      }
      if (this.activeTypes.length === 2) {
        this.scores = pokeTypes.getTypeWeaknesses(this.activeTypes[0], this.activeTypes[1])
      }
    },
    resetType () {
      this.activeTypes = []
      this.scores = {}
    },
    calcScore (rivalType) {
      const score = this.scores[rivalType]
      switch (score) {
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
    },
    isActive (type) {
      return this.activeTypes.includes(type)
    }
  }
}
</script>

<style lang="scss">
@import "../components/common.scss";
</style>
