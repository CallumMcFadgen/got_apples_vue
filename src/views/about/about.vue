<template>
  <b-container fluid class="container_style">
    <!-- NAVIGATION BREADCRUMBS -->
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="10" offsetlg="1" xl="10" offsetxl="1">
        <b-breadcrumb class="breadcrumb_style" :items="items"></b-breadcrumb>
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

    <!-- TILES -->
    <b-row class="tile_row_style">
      <b-col 6>
        <b-card class="tile_style">
          <h4 class="title_heading_style">New seasons harvest</h4>
          <img
            class="tile_image_style"
            src="@/assets/images/home_page_tiles/tile_1.png"
          />
          <p class="tile_text_style">
            Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i
            ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea
            e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te
            hii-ika. I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki
            te rarangahia he rakau hii-ika.
          </p>
          <p class="tile_link_style">
            Click
            <router-link to="login">here</router-link>
            to learn more
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="tile_style">
          <h4 class="title_heading_style">Exciting new variety trialed</h4>
          <img
            class="tile_image_style"
            src="@/assets/images/home_page_tiles/tile_2.png"
          />
          <p class="tile_text_style">
            Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i
            ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea
            e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te
            hii-ika. I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki
            te rarangahia he rakau hii-ika.
          </p>
          <p class="tile_link_style">
            Click
            <router-link to="login">here</router-link>
            to learn more
          </p>
        </b-card>
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
      >
        <br />
      </b-col>
    </b-row>

    <!-- FOOTER -->
    <b-row class="footer_style">
      <b-col xs="4" sm="4" md="4" lg="4" xl="4">
        <div class="footer_affiliate_style">
          <span>Affiliate Link</span>
          <br />
          <span>Affiliate Link</span>
          <br />
          <span>Affiliate Link</span>
        </div>
      </b-col>
      <b-col class="footer_logo_style" xs="4" sm="4" md="4" lg="4" xl="4">
        <div>
          <p>Got Apples!</p>
        </div>
      </b-col>
      <b-col xs="4" sm="4" md="4" lg="4" xl="4">
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

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {
      items: [
        {
          text: "Home",
          to: { name: "HOME" }
        },
        {
          text: "Growers",
          to: { name: "ABOUT" },
          active: true
        }
      ]
    };
  }
};
</script>
