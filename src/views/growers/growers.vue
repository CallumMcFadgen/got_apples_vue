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
          <h2 class="statement_heading_style">
            Reconnecting with our food producers
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

    <!-- GROWERS -->
    <div v-for="(grower, index) in growers" :key="`grower-${index}`">
      <b-row class="row_style">
        <b-col class="col_style" xs="12" sm="12" md="12" lg="12" xl="12">
          <div class="grower_image_box_style">
            <img class="grower_image_style" :src="'images/' + grower.image" />
          </div>
          <div class="grower_content_box_style">
            <h2 class="grower_heading_style">
              {{ grower.first_name }} {{ grower.last_name }}
            </h2>
            <p class="grower_text_style">
              Ki ta Maui e kii ai, “Kaore au e whakahoha i a koutou, ka noho hei
              karetao noa iho, koinei taku whakapono ki a koutou.” Ko te
              whakautu o te tuakana, “Na to hiroki ka pohehe matou he kai noa
              iho ma nga ika”. Ka riri haere a Maui. “Maku e whai kaha, whai
              mana hei whakamana i ahau ano”, noku te mana hei whakaarahi i oku
              tuakana. Ka whakaritea e Maui he tatai hei whakamanahia i ona ake
              pukenga mo tenei mea te hii-ika. I tetahi po i a Maui e noho tau
              ana, ka timatahia e Maui ki te rarangahia he rakau hii-ika. I a ia
              e rarangahia e waiatatia e Maui tetahi karakia tawhito hei
              whakakaha i te rakau hii-ika.
              <br />
              <br />
              Click
              <b-button
                class="grower_button_style"
                variant="link"
                v-on:click="navToGrower(grower.user_name)"
                >here</b-button
              >
              to learn more
              <br />
            </p>
          </div>
        </b-col>
      </b-row>
    </div>

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
  methods: {
    // Get call for growers array
    getGrowers() {
      axios.get("http://localhost:3333/get_growers").then(response => {
        this.growers = response.data;
        console.log(this.growers);
      });
    },
    // Set a grower_id and navigate to grower page
    navToGrower(id) {
      this.$store.dispatch("addGrowerId", id);
      this.$router.push("grower");
      console.log(this.$store.state.grower_id);
    }
  },
  // run on page mount
  mounted: function() {
    this.getGrowers();
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

.col_style {
  display: inline-block;
  padding: none;
  margin: none;
  display: flex;
}

// styling for the grower image box
.grower_image_box_style {
  padding: none;
  margin: none;
  background-color: white;
  flex: 1.5;
  float: left;
}

// styling for the grower image
.grower_image_style {
  display: flex;
  margin: auto;
  width: 100%;
  border: thin black solid;
  border-radius: 3px;
}


// styling for the auction content box
.grower_content_box_style {
  padding: none;
  margin: none;
  background-color: white;
  float: left;
  flex: 2.5;
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

// styling for the tile text
.grower_text_style {
  font: Merriweather;
  color: #3d3d3d;
  font-size: 1vw;
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 2.5vh;
}

.grower_button_style {
  font: Merriweather !important;
  font-size: 1vw !important;
  padding-left: 0% !important;
  padding-right: 0% !important;
  padding-bottom: 1vh !important;
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

