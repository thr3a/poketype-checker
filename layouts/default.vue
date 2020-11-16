<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: verdana,arial,helvetica,Meiryo,'メイリオ',sans-serif;
}

body {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

* {
  margin: 0;
  padding: 0;
}

.main {
  margin-top: 2px;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.rival-types {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.my-types {
  display: flex;
  flex-wrap: wrap;
}
</style>
