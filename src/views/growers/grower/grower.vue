<template>
  <b-container fluid class="container_style">
    <!-- NAVIGATION BREADCRUMBS -->
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="10" offsetlg="1" xl="10" offsetxl="1">
        <b-breadcrumb
          class="breadcrumb_style"
          :items="breadcrumbs"
        ></b-breadcrumb>
      </b-col>
    </b-row>

    <!-- PAGE HEADING -->
    <b-row>
      <b-col
        xs="12"
        sm="12"
        md="10"
        offsetMd="1"
        lg="10"
        offsetlg="1"
        xl="10"
        offsetxl="1"
      >
        <img
          src="@/assets/images/heading_backgrounds/home.png"
          class="img-fluid"
          alt="heading background"
        />
        <h1 class="page_heading_txt">About</h1>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="spacing_style">
      <b-col
        xs="12"
        sm="12"
        md="10"
        offsetMd="1"
        lg="10"
        offsetlg="1"
        xl="10"
        offsetxl="1"
      ></b-col>
    </b-row>

    <!-- STATEMENT -->
    <b-row>
      <b-col
        xs="12"
        sm="12"
        md="10"
        offsetMd="1"
        lg="10"
        offsetlg="2"
        xl="10"
        offsetxl="2"
      >
        <div class="statement_style">
          <h2 class="statement_heading_style">
            Our mission
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
        </div>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="spacing_style_2">
      <b-col
        xs="12"
        sm="12"
        md="10"
        offsetMd="1"
        lg="10"
        offsetlg="1"
        xl="10"
        offsetxl="1"
      ></b-col>
    </b-row>


    <b-card class="text-left">
      <h1>Grower information from API GET request</h1>
      <div v-for="(user, index) in users" :key="`user-${index}`">
        <div v-if="user.got_apples_member === 1">
          <br />
          <h2>User : {{ user.user_name }}</h2>
          <b-card-text>
            <b>First name</b>
            <br />
            {{ user.first_name }}



            </b-card-text>
          <p>{{ user.first_name }}</p>
          <P><b>Last name</b></P>
          <p>{{ user.last_name }}</p>
          <P><b>Phone number</b></P>
          <p>{{ user.phone_number }}</p>
          <P><b>Email address</b></P>
          <p>{{ user.email_address }}</p>
          <br />
        </div>
      </div>
    </b-card>

    <!-- SPACING -->
    <b-row class="spacing_style_2">
      <b-col
        xs="12"
        sm="12"
        md="10"
        offsetMd="1"
        lg="10"
        offsetlg="1"
        xl="10"
        offsetxl="1"
      ></b-col>
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
    </b-row>


    <!-- SUBFOOTER -->
    <b-row class="sub_footer_style">
      <b-col
        xs="12"
        sm="12"
        md="10"
        offsetMd="1"
        lg="10"
        offsetlg="1"
        xl="10"
        offsetxl="1"
      >
        <span class="subfooter_text_style">© Got Apples Limited 2020</span>
      </b-col>
    </b-row>
  </b-container>
</template>

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
  font-size: 4.6vw;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// PAGE STYLE ////////////////////////////////////////////////

// background color
.container_style {
  background-color: #e3e4e6;
}

.no_padding {
  padding: 0;
}

// navigation breadcrumbs style
.breadcrumb_style {
  background-color: #e3e4e6 !important;
  position: relative;
  font-size: 100% !important;
  left: 0;
  margin-left: 8vw;
  align-items: center;
}

// spacing
.spacing_style {
  background-color: #e3e4e6;
  min-height: 5vh;
}

.spacing_style_2 {
  background-color: #e3e4e6;
  min-height: 3vh;
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
  font-style: italic;
  color: #3d3d3d;
  font-size: 1.05vw;
  padding-left: 5vh;
  padding-right: 5vh;
  padding-bottom: 2.5vh;
}

// padding for the tile row
// .tile_row_style {
//   padding-left: 14vh;
//   padding-right: 14vh;
// }

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
}

// styling for the tile image
.tile_image_style {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
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
  padding-left: 5vh;
  padding-right: 5vh;
  padding-bottom: 2.5vh;
}

// FOOTER ////////////////////////////////////////////////

// overall styling for page footer
.footer_style {
  align-items: center;
  background: #64676c;
  color: #ffffff;
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
  padding-top: 0.5vh;
}

// styling for the header icons
.footer_icons_style {
  align-items: center;
  display: flex;
  margin-left: 10vw;
}

// styling for a header icon
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

<script>
// @ is an alias to /src
export default {
  name: "Grower",
  components: {}, 
    breadcrumbs: [
    {
      text: "Home",
      to: { name: "HOME" }
    },
    {
      text: "Growers",
      to: { name: "GROWERS" },
    },
    {
      text: "Grower",
      to: { name: "GROWERS" },
      active: true
    }
  ]
};
</script>