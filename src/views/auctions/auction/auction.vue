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
        <h1 class="page_heading_txt" v-if="auction.length > 0">{{auction[0].weight }}kg of {{auction[0].variety_name}} apples</h1>
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
import axios from "axios";

export default {
  name: "Auction",
  components: {},
  data() {
    return {
      auction_id: null,
      auction: [],
      breadcrumbs: [
        {
          text: "Home",
          to: { name: "HOME" }
        },
        {
          text: "Auctions",
          to: { name: "AUCTIONS" }
        },
        {
          text: "Auction",
          to: { name: "AUCTION" },
          active: true
        }
      ]
    };
  },
  methods: {
    // Get call for growers array
    getAuction() {
      this.auction_id = this.$store.state.auction_id;
      console.log(this.$store.state.auction_id);
      axios
        .get("http://localhost:3333/get_auction/" + this.auction_id)
        .then(response => {
          this.auction = response.data;
          console.log(this.auction);
        });
    }
  },
  // run on page mount
  mounted: function() {
    console.log("test");
    this.getAuction();
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

