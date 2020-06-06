<template>
  <div id="app">
    <!-- LOGO/TITLE -->
    <div class="header_style">
      <h1 class="header_logo_style">Got Apples!</h1>
      <div class="header_icons_style">
        <a href="https://www.facebook.com/">
          <img
            src="@/assets/images/social_media_icons/facebook.png"
            class="header_icon_style"
          />
        </a>
        <a href="https://www.twitter.com/">
          <img
            src="@/assets/images/social_media_icons/twitter.png"
            class="header_icon_style"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            src="@/assets/images/social_media_icons/instagram.png"
            class="header_icon_style"
          />
        </a>
        <a href="https://www.linkedin.com/">
          <img
            src="@/assets/images/social_media_icons/linkedin.png"
            class="header_icon_style"
          />
        </a>
        <img
          src="@/assets/images/social_media_icons/phone.png"
          class="header_icon_style"
        />
      </div>
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
  color: #2c3e50;
}

// HEADER STYLE /////////////////////////////////////

// overall styling for the page header
.header_style {
  display: flex;
  align-items: center;
  background: #2a6f03;
  border: thin, black, solid;
  min-height: 9vh;
}

// styling for the header logo
.header_logo_style {
  font-family: Lato;
  font-size: 2.25vw;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-around;
  float: left;
  margin-left: 1%;
}

// styling for the header icons
.header_icons_style {
  position: absolute;
  right: 0;
  margin-right: 1vw;
}

// styling for a header icon
.header_icon_style {
  padding: 0.5vh;
}

// NAV BAR STYLE ////////////////////////////////////
#nav {
  background: #64676c;
  align-items: center;
  min-height: 5.8vh;

  a {
    padding-top: 1.25vh;
    padding-bottom: 1.25vh;
    padding-left: 1vh;
    padding-right: 1vh;
    color: white;
    background: #64676c;
    font-size: 1vw;
    font-weight: 500;
    font-family: Lato;
    float: left;

    &.router-link-exact-active {
      font-weight: 650;
    }
  }
}
</style>
