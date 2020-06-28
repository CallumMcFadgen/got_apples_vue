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
        <h1 class="page_heading_txt">View Auctions</h1>
      </b-col>
    </b-row>

    <template v-if="auctions.length > 0">
      <div v-for="(auction, index) in auctions" :key="`auction-${index}`">
        <!-- SPACING -->
        <b-row class="row_style">
          <b-col xs="12" sm="12" md="12" lg="12" xl="12">
            <br />
          </b-col>
        </b-row>
        <!-- AUCTION INFORMATION -->
        <b-row class="form_row_style">
          <b-col xs="8" sm="8" md="8" lg="8" xl="8">
            <div class="account_form_style">
              <br />
              <h4>Auction Number {{ auction.auction_number }} </h4>
              <b-list-group>
                <b-list-group-item class="account_text_style"
                  ><b>Title : </b> {{ auction.title }}
                </b-list-group-item>
                <b-list-group-item class="account_text_style"
                  ><b>Description : </b> {{ auction.description }}
                </b-list-group-item>
                <b-list-group-item class="account_text_style"
                  ><b>Start Date : </b> {{ auction.start_date | moment("DD/MM/YYYY") }}
                </b-list-group-item>
                <b-list-group-item class="account_text_style"
                  ><b>End Date : </b> {{ auction.end_date | moment("DD/MM/YYYY") }}
                </b-list-group-item>
                <b-list-group-item class="account_text_style"
                  ><b>Variety : </b> {{ auction.variety_name }}
                </b-list-group-item>
                <b-list-group-item class="account_text_style"
                  ><b>Weight : </b> {{ auction.weight }}kg
                </b-list-group-item>
                <b-list-group-item class="account_text_style"
                  ><b>Reserve Amount : </b> ${{ auction.reserve_amount }}
                </b-list-group-item>
                <template v-if="auction.buy_now > 0" >
                  <b-list-group-item v-if="auction.buy_now > 0" class="account_text_style"
                    ><b>Buy Now :</b> available
                  </b-list-group-item>
                  <b-list-group-item class="account_text_style"
                    ><b>Buy Now Amount :</b> ${{ auction.buy_now_amount}}
                  </b-list-group-item>
                </template>
                <b-list-group-item v-else-if="auction.buy_now === 0" class="account_text_style"
                  ><b>Buy now :</b> unavailable
                </b-list-group-item>
                <template v-if="auction.delivery > 0">
                  <b-list-group-item class="account_text_style"
                    ><b>Delivery :</b> available
                  </b-list-group-item>
                  <b-list-group-item class="account_text_style"
                    ><b>Delivery Amount :</b> ${{ auction.delivery_amount}}
                  </b-list-group-item>
                </template>
                <b-list-group-item v-if="auction.sold > 0" class="account_text_style"
                  ><b>Current status :</b> Sold
                </b-list-group-item>
                <b-list-group-item v-else-if="auction.sold === 0" class="account_text_style"
                  ><b>Current status :</b> Unsold
                </b-list-group-item>
              </b-list-group>
              <br />
            </div>
          </b-col>
        </b-row>
      </div>
    </template>

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
  name: "Dashboard",
  components: {},
  data() {
    return {
      login_status: null,
      user_id: null,
      auctions: [],
      breadcrumbs: [
        {
          text: "Home",
          to: { name: "HOME" }
        },
        {
          text: "Dash",
          to: { name: "DASHBOARD" }
        },
        {
          text: "View Auctions",
          to: { name: "VIEWAUCTIONS" },
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
    },
    // Check for a user_id if none, boot to login
    authCheck() {
      if (localStorage.getItem("user_id") === null || undefined) {
        this.$router.push("login");
      }
    },
    // GET call for auctions array
    getAuctions() {
      this.user_id = localStorage.getItem("user_id");
      axios.get("http://localhost:3333/get_grower_auctions/" + this.user_id)
        .then(response => {
          this.auctions = response.data;
          console.log(this.auctions);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  // run on page mount
  mounted: function() {
    this.loggedInCheck();
    this.authCheck();
    this.getAuctions();
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
  color: #fff;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  font-size: 3vw;
  font-weight: 400;
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

// styling for the login/dash button
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
.breadcrumbs_style {
  background-color: transparent;
  text-align: left;
}

// navigation breadcrumb style
.breadcrumb_style {
  text-decoration: none;
  background-color: transparent;
  font-size: 1.5vh;
  color: black !important;
  text-align: left;
}

// padding for nav breadcrumbs
.crumb_padding {
  min-height: 0.5vh;
}

// margins for a form row
.form_row_style {
  //margin-right: 50% !important;
  margin-left: 25% !important;
}

// spacing
.spacing_style {
  background-color: #e3e4e6;
}

// margins for a row
.row_style {
  margin-right: 7% !important;
  margin-left: 7% !important;
}

.account_form_style {
  background-color: white;
  text-align: center;
  padding: none;
}

.account_text_style {
  width: 90%;
  margin-left: 5%;
  //margin-right: ;
}

.register_tile_text {
  margin-left: 3%;
  margin-right: 3%;
}

.button_style {
  color: white !important;
  background-color: 64676c !important;
  border: medium #2a6f03 solid !important;
}

// FOOTER ////////////////////////////////////////////////

// overall styling for page footer
.page_footer_style {
  padding-top: 1vh;
  padding-bottom: 1vh;
  background: #64676c;
  color: #ffffff;
}

// styling for the affilate links in the footer
.affiliate_link_style {
  text-align: center;
  border: thin, white, solid;
}

// styling for the page footer heading
.footer_logo_style {
  text-align: center;
}

// styling for the social media links in the footer
.social_media_link_style {
  text-align: center;
  border: thin, white, solid;
}

// over all styling for the page sub footer
.sub_footer_style {
  height: 3vh;
  background: #2a6f03;
}
</style>
