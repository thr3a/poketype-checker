<template>
  <div class="footer">
    <div class="menus">
      <nuxt-link to="/" class="menu" exact>
        <span id="label">攻撃</span>
      </nuxt-link>
      <nuxt-link to="/defence" class="menu">
        <span id="label">防御</span>
      </nuxt-link>
    </div>
  </div>
</template>

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
  &.nuxt-link-active {
    background-color: #87cefa;
  }
}
</style>
