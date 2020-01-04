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
.normal {
  background-color: #c5c0a6;
}
.grass {
  background-color: #a5d839;
}
.fire {
  background-color: #ee4e32;
}
.water {
  background-color: #71aaff;
}
.fighting {
  background-color: #b85f3b;
}
.flying {
  background-color: #88a6ff;
}
.poison {
  background-color: #a75d9d;
}
.ground {
  background-color: #f3ce42;
}
.rock {
  background-color: #d8bb67;
}
.bug {
  background-color: #ccd700;
}
.ghost {
  background-color: #8379d0;
}
.electric {
  background-color: #fae528;
}
.psychic {
  background-color: #e762af;
}
.ice {
  background-color: #b0edfc;
}
.dragon {
  background-color: #8b71ff;
}
.dark {
  background-color: #8c6b48;
}
.steel {
  background-color: #c9c1c9;
}
.fairy {
  background-color: #f2a9f6;
}
</style>
