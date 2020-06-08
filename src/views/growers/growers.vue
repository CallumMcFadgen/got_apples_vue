<template>
  <b-container fluid class="container_style">
    <!-- NAVIGATION BREADCRUMBS -->
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
        <h1 class="page_heading_txt">Growers</h1>
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
          <h2 class="statement_heading_style">Reconnecting with our food producers</h2>
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

    <!-- GROWER ROW/CARD -->
    <b-row class="row_style">
      <b-col
        v-for="(grower, index) in growers" :key="`grower-${index}`" 
        xs="12" sm="12" md="12" lg="6" xl="6">
        <b-card>
          <img
            class="grower_image_style"
            src="@/assets/images/user/callum_mcfadgen.png"
          />

          <!-- <img v-bind:src="require('@/assets/images/user/' + user.image_url)" /> -->
          <!-- <img :src="require(`@/assets/images/user/${user.image_url}`)" /> -->
          <!-- <img :src="'@/assets/images/user/' + user.image_url" /> -->
          <!-- <img :src="'@/assets/images/user/'`${user.image_url}`" /> -->

          <h2 class="grower_heading_style">
            {{ grower.first_name }} {{ grower.last_name }}
          </h2>
          <b-card-text class="grower_text_style">
            Ka tohea ki uta te waka e nga tuakana, engari ahua rereke te ahua o
            te waka. Ka kii mai, “Kei te ahua taumaha te waka nei, kei te hoe
            tahi tatou, kao ranei?” Ka kii atu tetahi, “na to kaha kai i nga
            kumara te take” Ka kii atu tetahi ano, “Katia to korua mahi
            whakatoi”. I to ratou taenga atu ki te wahi taunga ika, ka puta mai
            a Maui, aue ko te ohorere o ona tuakana! “He aha.” “He aha tau?” “To
            mahi hianga e Maui.” “Ko koe te take e kore ai matou e whiwhi ika
            ana, ko koe ke”
            <br />
            <br />
            Click <router-link to="login">here</router-link> to learn more
          </b-card-text>
        </b-card>
        <br />
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
            <img src="@/assets/images/social_media_icons/facebook.png" class="footer_icon_style" />
          </a>
          <a href="https://www.twitter.com/">
            <img src="@/assets/images/social_media_icons/twitter.png" class="footer_icon_style" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="@/assets/images/social_media_icons/instagram.png" class="footer_icon_style" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="@/assets/images/social_media_icons/linkedin.png" class="footer_icon_style" />
          </a>
          <img src="@/assets/images/social_media_icons/phone.png" class="footer_icon_style" />
        </div>
      </b-col>
    </b-row>

    <!-- SUBFOOTER -->
    <b-row class="sub_footer_style">
      <b-col cols="12">
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
  font-size: 10vw;
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

// navigation breadcrumbs style
.breadcrumb {
  background-color: #e3e4e6 !important;
  position: relative;
  font-size: 100% !important;
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

// margins for a row
.row_style {
  margin-right: 7% !important;
  margin-left: 7% !important;
}

// styling for the grower heading
.grower_heading_style {
  font: Lato;
  font-size: 1.5vw;
  text-align: center;
  font-weight: semi-bold;
  color: black;
  padding-top: 3%;
}

// styling for the grower image
.grower_image_style {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 98%;
  border: thin black solid;
  border-radius: 3px;
}

// styling for the tile text
.grower_text_style {
  font: Merriweather;
  color: #3d3d3d;
  font-size: 1vw;
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 2.5vh;
}

// styling for the tile link
.grower_link_style {
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
import axios from "axios";

export default {
  name: "Growers",
  components: {},
  data() {
    return {
      growers: [],
      breadcrumbs: [
        {
          text: "Home",
          to: { name: "HOME" }
        },
        {
          text: "Growers",
          to: { name: "GROWERS" },
          active: true
        }
      ]
    };
  },

  // run on launch
  mounted: function() {
    axios.get("http://localhost:3333/get_growers").then(response => {
      this.growers = response.data;
      console.log(response.data);
    });
  }
};
</script>
