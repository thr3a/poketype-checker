<template>
  <div>
    <div class="rival-types">
      <rival-type
        v-for="(type, index) in types"
        :key="index"
        :type="type"
        :score="scores[type]"
      />
    </div>
    <div class="my-types">
      <my-type
        v-for="(type, index) in types"
        :key="index"
        :type="type"
        :is-active="isActive(type)"
        @toggleType="chengedType"
      />
      <my-type
        :type="reset"
        @resetType="resetType"
      />
    </div>
  </div>
</template>

<script>
import rivalType from '~/components/rivalType.vue'
import myType from '~/components/myType.vue'
const pokeTypes = require('poke-types')

export default {
  components: {
    rivalType,
    myType
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
      reset: 'reset',
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
    isActive (type) {
      return this.activeTypes.includes(type)
    }
  }
}
</script>
