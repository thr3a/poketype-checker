<template>
  <div class="footer">
    <div class="menus">
      <div class="menu">
        <nuxt-link to="/">
          <span id="label">攻撃</span>
        </nuxt-link>
      </div>
      <div class="menu">
        <nuxt-link to="/defence">
          <span id="label">防御</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
}
.menus {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.menu {
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
</style>
