<template>
  <b-container fluid class="container_style">
    <!-- HEADER -->
    <b-row class="header_style">
      <b-col class="">
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
      </b-col>
    </b-row>

    <!-- NAVBAR -->
    <b-row id="nav">
      <b-col>
        <router-link to="/">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/growers">GROWERS</router-link>
        <router-link to="/auctions">AUCTIONS</router-link>
        <router-link to="/varieties">VARIETIES</router-link>
        <router-link to="/news">NEWS</router-link>
        <router-link to="/contact">CONTACT</router-link>
        <router-link
          v-if="login_status == false"
          class="login_style"
          to="/login"
          >LOGIN</router-link
        >
        <template v-else-if="login_status == true">
        <router-link
          to="/dashboard"
          >DASH</router-link
        >
        <b-button 
        v-on:click="logout()"
        class="log_out_button_style"
        variant="link"
        >LOGOUT</b-button>
        </template>
      </b-col>
    </b-row>

    <!-- BREADCRUMBS -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-col>
    </b-row>

    <!-- PAGE HEADING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <img
          src="@/assets/images/heading_backgrounds/home.png"
          class="img-fluid"
          alt="heading background"
        />
        <h1 class="page_heading_txt">Welcome!</h1>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- SLIDER -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <div>
          <b-carousel :interval="4000">
            <b-carousel-slide class="slide_style">
              <template v-slot:img>
                <img
                  class="slide_image_style"
                  src="@/assets/images/home_page_slider/slide_1.png"
                />
                <div>
                  <h3 class="slide_heading_style">Slide 1 Heading</h3>
                  <p class="slide_text_style">
                    Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona
                    tuakana ki te hii ika. I te hokinga mai o ona tuakana ki
                    tatahi, ka kii atu a Maui, “ka taea e au te haramai i to
                    koutou na taha ki te hii ika?” Engari, ko te whakautu o ona
                    tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore
                    he wahi mau kei te waka nei, na reira me noho tau ki tatahi
                    ke”.
                  </p>
                </div>
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="slide_style">
              <template v-slot:img>
                <img
                  class="slide_image_style"
                  src="@/assets/images/home_page_slider/slide_2.png"
                />
                <div>
                  <h3 class="slide_heading_style">Slide 2 Heading</h3>
                  <p class="slide_text_style">
                    Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona
                    tuakana ki te hii ika. I te hokinga mai o ona tuakana ki
                    tatahi, ka kii atu a Maui, “ka taea e au te haramai i to
                    koutou na taha ki te hii ika?” Engari, ko te whakautu o ona
                    tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore
                    he wahi mau kei te waka nei, na reira me noho tau ki tatahi
                    ke”.
                  </p>
                </div>
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="slide_style">
              <template v-slot:img>
                <img
                  class="slide_image_style"
                  src="@/assets/images/home_page_slider/slide_3.png"
                />
                <div>
                  <h3 class="slide_heading_style">Slide 3 Heading</h3>
                  <p class="slide_text_style">
                    Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona
                    tuakana ki te hii ika. I te hokinga mai o ona tuakana ki
                    tatahi, ka kii atu a Maui, “ka taea e au te haramai i to
                    koutou na taha ki te hii ika?” Engari, ko te whakautu o ona
                    tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore
                    he wahi mau kei te waka nei, na reira me noho tau ki tatahi
                    ke”.
                  </p>
                </div>
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="slide_style">
              <template v-slot:img>
                <img
                  class="slide_image_style"
                  src="@/assets/images/home_page_slider/slide_4.png"
                />
                <div>
                  <h3 class="slide_heading_style">Slide 4 Heading</h3>
                  <p class="slide_text_style">
                    Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona
                    tuakana ki te hii ika. I te hokinga mai o ona tuakana ki
                    tatahi, ka kii atu a Maui, “ka taea e au te haramai i to
                    koutou na taha ki te hii ika?” Engari, ko te whakautu o ona
                    tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore
                    he wahi mau kei te waka nei, na reira me noho tau ki tatahi
                    ke”.
                  </p>
                </div>
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="slide_style">
              <template v-slot:img>
                <img
                  class="slide_image_style"
                  src="@/assets/images/home_page_slider/slide_5.png"
                />
                <div>
                  <h3 class="slide_heading_style">Slide 5 Heading</h3>
                  <p class="slide_text_style">
                    Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona
                    tuakana ki te hii ika. I te hokinga mai o ona tuakana ki
                    tatahi, ka kii atu a Maui, “ka taea e au te haramai i to
                    koutou na taha ki te hii ika?” Engari, ko te whakautu o ona
                    tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore
                    he wahi mau kei te waka nei, na reira me noho tau ki tatahi
                    ke”.
                  </p>
                </div>
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="slide_style">
              <template v-slot:img>
                <img
                  class="slide_image_style"
                  src="@/assets/images/home_page_slider/slide_6.png"
                />
                <div>
                  <h3 class="slide_heading_style">Slide 6 Heading</h3>
                  <p class="slide_text_style">
                    Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona
                    tuakana ki te hii ika. I te hokinga mai o ona tuakana ki
                    tatahi, ka kii atu a Maui, “ka taea e au te haramai i to
                    koutou na taha ki te hii ika?” Engari, ko te whakautu o ona
                    tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore
                    he wahi mau kei te waka nei, na reira me noho tau ki tatahi
                    ke”.
                  </p>
                </div>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- STATEMENT -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <b-card class="statement_style">
          <h2 class="statement_heading_style">
            Heritage apples direct from the grower
          </h2>
          <p class="statement_text_style">
            Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i
            ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea
            e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te
            hii-ika. I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki
            te rarangahia he rakau hii-ika. Ko te moemoea a Maui kia haere
            ngatahi ai ratou ko ona tuakana ki te hii ika. I te hokinga mai o
            ona tuakana ki tatahi, ka kii atu a Maui, “ka taea e au te haramai i
            koutou na taha ki te hii ika?” Engari, ko te whakautu o ona “Kao, he
            rangatahi noa iho koe. Kaore he wahi mau kei te waka te te waka nei,
            na reira me noho tau ki tatahi ke”.
          </p>
        </b-card>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- TILES -->
    <b-row class="row_style">
      <b-col cols="4">
        <b-card class="tile_style">
          <h4 class="title_heading_style">Intresting new ways to use apples</h4>
          <img
            class="tile_image_style"
            src="@/assets/images/home_page_tiles/tile_1.png"
          />
          <b-card-text class="tile_text_style">
            Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i
            ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea
            e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te
            hii-ika. I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki
            te rarangahia he rakau hii-ika.
            <br />
            <br />Click <router-link to="news">here</router-link> to view more
            articles
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card class="tile_style">
          <h4 class="title_heading_style">Supporting local growers</h4>
          <img
            class="tile_image_style"
            src="@/assets/images/home_page_tiles/tile_2.png"
          />
          <b-card-text class="tile_text_style">
            Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i
            ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea
            e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te
            hii-ika. I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki
            te rarangahia he rakau hii-ika.
            <br />
            <br />Click <router-link to="growers">here</router-link> to meet our
            growers
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card class="tile_style">
          <h4 class="title_heading_style">Grab a great deal on apples</h4>
          <img
            class="tile_image_style"
            src="@/assets/images/home_page_tiles/tile_3.png"
          />
          <b-card-text class="tile_text_style">
            Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i
            ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea
            e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te
            hii-ika. I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki
            te rarangahia he rakau hii-ika.
            <br />
            <br />Click <router-link to="auctions">here</router-link> to view our
            apple auctions
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- FOOTER -->
    <b-row class="footer_style">
      <b-col cols="4">
        <div class="footer_affiliate_style">
          <span>Affiliate Link</span>
          <br />
          <span>Affiliate Link</span>
          <br />
          <span>Affiliate Link</span>
        </div>
      </b-col>
      <b-col class="footer_logo_style" cols="4">
        <div>
          <p>Got Apples!</p>
        </div>
      </b-col>
      <b-col cols="4">
        <div class="footer_icons_style">
          <a href="https://www.facebook.com/">
            <img
              src="@/assets/images/social_media_icons/facebook.png"
              class="footer_icon_style"
            />
          </a>
          <a href="https://www.twitter.com/">
            <img
              src="@/assets/images/social_media_icons/twitter.png"
              class="footer_icon_style"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="@/assets/images/social_media_icons/instagram.png"
              class="footer_icon_style"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="@/assets/images/social_media_icons/linkedin.png"
              class="footer_icon_style"
            />
          </a>
          <img
            src="@/assets/images/social_media_icons/phone.png"
            class="footer_icon_style"
          />
        </div>
      </b-col>
      <b-col cols="12" class="sub_footer_style">
        <span class="subfooter_text_style">© Got Apples Limited 2020</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      login_status: null,
      breadcrumbs: [
        {
          text: "Home",
          to: { name: "HOME" },
          active: true
        }
      ]
    };
  },
  methods: {
    // Check for a user_id for nav modification
    loggedInCheck() {
      if (localStorage.getItem("user_id")) {
        this.login_status = true;
      } else {
        this.login_status = false;
      }
    },
    // clear user_id and refresh page and show message
    logout() {
      localStorage.removeItem("user_id");
      window.location.reload();
    }
  },
  // run on launch
  mounted: function() {
    this.loggedInCheck();
  }
};
</script>

<style lang="scss">
// HEADING STYLE /////////////////////////////////////////////

//sizing for a heading image
.heading_img_style {
  width: 100%;
  height: auto;
}

//page heading text
.page_heading_txt {
  font-family: Lato;
  color: #fff;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  font-size: 8vw;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// OVERALL STYLE ////////////////////////////////////////////////

// background color
.container_style {
  background-color: #e3e4e6;
}

// HEADER STYLE /////////////////////////////////////////////

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

// styling for a header icon
.header_icon_style {
  padding: 0.5vh;
}

// styling for the header icons
.header_icons_style {
  position: absolute;
  right: 0;
  margin-right: 1vw;
}

// NAV BAR STYLE ////////////////////////////////////////
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

// margins for a row
.nav_row_style {
  margin-right: 0% !important;
  margin-left: 0% !important;
}

// styling for the login button
.login_style {
  float: right !important;
}

.log_out_button_style {
  float: right !important;
  color: white !important;
  padding-top: 1.25vh;
  padding-bottom: 1.25vh !important;
  padding-left: 1vh !important;
  padding-right: 1vh !important;
  color: white !important;
  background: #64676c !important;
  font-size: 1vw !important;
  font-weight: 500 !important;
  font-family: Lato !important;
}

// CONTENT STYLE ///////////////////////////////////////

// breadcrumbs style
.breadcrumb {
  background-color: #e3e4e6 !important;
  position: relative;
  font-size: 100% !important;
}

//styling for slides
.slide_style {
  text-align: center;
  background-color: white;
  border-radius: 3px;
}

//styling for the slide headings
.slide_heading_style {
  font: Lato;
  font-size: 1.25vw;
  font-weight: bold;
  color: black;
  padding-top: 0.7vh;
}

//styling for the slide text
.slide_text_style {
  font: Merriweather;
  color: #3d3d3d;
  font-size: 0.9vw;
  padding-left: 5vh;
  padding-right: 5vh;
}

// styling for the slide images
.slide_image_style {
  width: 100%;
}

// styling for the statment
.statement_style {
  background-color: white;
}

// styling for the statment heading
.statement_heading_style {
  text-align: center;
  font: Lato;
  font-size: 2vw;
  font-weight: bold;
  color: black;
  padding-top: 1vh;
}

// styling for the statment heading
.statement_text_style {
  font: Merriweather;
  color: #3d3d3d;
  font-size: 1.05vw;
  padding-left: 5vh;
  padding-right: 5vh;
  padding-bottom: 2.5vh;
}

// margins for a row
.row_style {
  margin-right: 7% !important;
  margin-left: 7% !important;
}

// styling for the tile
.tile_style {
  background-color: white;
}

// styling for the tile heading
.title_heading_style {
  font: Lato;
  font-size: 1.5vw;
  text-align: center;
  font-weight: semi-bold;
  color: black;
  padding-bottom: 1vh;
}

// styling for the tile image
.tile_image_style {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  border: thin black solid;
  border-radius: 3px;
}

// styling for the tile text
.tile_text_style {
  font: Merriweather;
  color: #3d3d3d;
  font-size: 1vw;
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 2.5vh;
}

// styling for the tile link
.tile_link_style {
  font: Merriweather;
  color: #3d3d3d;
  font-size: 1vw;
}

// FOOTER ////////////////////////////////////////////////

// overall styling for page footer
.footer_style {
  align-items: center;
  background: #64676c;
  color: #ffffff;
  bottom: 0px;
}

// styling for the affilate links in the footer
.footer_affiliate_style {
  font: Merriweather;
  font-size: 0.8vw;
  text-align: center;
  border: thin, white, solid;
}

// styling for the page footer heading
.footer_logo_style {
  text-align: center;
  font-family: Lato;
  font-size: 1.8vw;
  font-weight: bold;
  color: white;
}

// styling for the header icons
.footer_icons_style {
  align-items: center;
  display: flex;
  margin-left: 10vw;
}

// styling for a footer icon
.footer_icon_style {
  padding: 0.5vh;
}

// over all styling for the page sub footer
.sub_footer_style {
  height: 3vh;
  background: #2a6f03;
  align-items: center;
}

// styling for the copyright text
.sub_footer_style {
  padding: 0;
  font-size: 1.5vh;
  text-align: center;
  color: white;
  font-family: Lato;
}
</style>
