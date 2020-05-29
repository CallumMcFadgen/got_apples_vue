<template>
  <div id="app">
    <!-- LOGO/TITLE -->
    <div class="header_style">
      <h1 class="header_logo_style">Got Apples!</h1>
    </div>

    <!-- NAVBAR -->
    <div id="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/growers">GROWERS</router-link>
      <router-link to="/auctions">AUCTIONS</router-link>
      <router-link to="/varieties">VARIETIES</router-link>
      <router-link to="/news">NEWS</router-link>
      <router-link to="/contact">CONTACT</router-link>
      <router-link to="/login">LOGIN</router-link>
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
// APP STYLE /////////////////////////////////////////
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// HEADER STYLE /////////////////////////////////////

// overall styling for the page header
.header_style {
  display: flex;
  align-items: center;
  background: #2a6f03;
  border: thin, black, solid;
  min-height: 6.5vh;
}

// styling for the header logo
.header_logo_style {
  font-size: 250%;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-around;
  float: left;
  margin-left: 1%;
}

// NAV BAR STYLE ////////////////////////////////////
#nav {
  background: #64676c;
  align-items: center;
  min-height: 5.5vh;

  a {
    padding-top: 1.25vh;
    padding-bottom: 1.25vh;
    padding-left: 1vh;
    padding-right: 1vh;
    color: white;
    background: #64676c;
    font-size: 1.8vh;
    font-weight: 500;
    float: left;

    &.router-link-exact-active {
      font-weight: 650;
    }
  }
}
</style>
