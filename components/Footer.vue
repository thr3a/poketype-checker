<template>
  <div class="footer">
    <div class="menus">
      <button :class="{active: $store.state.view == 'defence'}" class="menu" @click="setView('defence')">
        防御
      </button>
      <button :class="{active: $store.state.view == 'attack'}" class="menu" @click="setView('attack')">
        攻撃
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setView (val) {
      this.$store.commit('setView', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  a {
    text-decoration: none;
  }
}
.menus {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.menu {
  color: #000;
  height: 50px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: #d1d1d1;
  border: 1px solid #8c8c8c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  background:#87cefa;
}
</style>
