<template>
  <div class="rival-type-container">
    <div :class="type" class="type">
      <span class="label">{{ type }}</span>
    </div>
    <div class="effectiveness">{{ score }}</div>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
    score: Number
  }
}
</script>

<style>
.rival-type-container {
  text-align: center;
}
.effectiveness {
  display:inline-block;
}
.type {
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
