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
        <h1 class="page_heading_txt">Dashboard</h1>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- USER INFORMATION -->
    <template v-if="user.length > 0">
      <b-row class="form_row_style">
        <b-col xs="8" sm="8" md="8" lg="8" xl="8">
          <div class="account_form_style">
            <br />
            <h4>Account details</h4>
            <b-list-group>
              <b-list-group-item class="account_text_style"
                ><b>First name : </b> {{ user[0].first_name }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Last name : </b> {{ user[0].last_name }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Username : </b> {{ user[0].user_name }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Email Address : </b> {{ user[0].email_address }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Phone Number : </b> {{ user[0].phone_number }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Address Line 1 : </b> {{ user[0].address_line_1 }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Address Line 2 : </b> {{ user[0].address_line_2 }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Region : </b> {{ user[0].region }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>City : </b> {{ user[0].city }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Zip Code : </b> {{ user[0].zip_code }}
              </b-list-group-item>
              <b-list-group-item
                v-if="user[0].got_apples_member > 0"
                class="account_text_style"
                ><b>Got Apples Member</b>
              </b-list-group-item>
            </b-list-group>
            <br />
            <div>
            <b-button 
              class="button_style"
              v-on:click="navToUserEdit()"
              >Edit Account</b-button
            >
            </div>
            <br />
          </div>
        </b-col>
      </b-row>
    </template>

    <template v-if="orchard.length > 0">
      <!-- SPACING -->
      <b-row class="row_style">
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">
          <br />
        </b-col>
      </b-row>

      <!-- ORCHARD INFORMATION -->
      <b-row class="form_row_style">
        <b-col xs="8" sm="8" md="8" lg="8" xl="8">
          <div class="account_form_style">
            <br />
            <h4>Orchard details</h4>
            <b-list-group>
              <b-list-group-item class="account_text_style"
                ><b>Name : </b> {{ orchard[0].orchard_name }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Desc : </b> {{ orchard[0].description }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Variety : </b> {{ orchard[0].variety_name }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Address Line 1 : </b> {{ orchard[0].address_line_1 }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Address Line 2 : </b> {{ orchard[0].address_line_2 }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Region : </b> {{ orchard[0].region }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>City : </b> {{ orchard[0].city }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>Zip Code : </b> {{ orchard[0].zip_code }}
              </b-list-group-item>
              <b-list-group-item class="account_text_style"
                ><b>GST Number : </b> {{ orchard[0].gst_number }}
              </b-list-group-item>
            </b-list-group>
            <br />
            <div>
              <b-button class="button_style">Edit Orchard</b-button>
            </div>
            <br />
          </div>
        </b-col>
      </b-row>
    </template>

    <template v-if="user[0] && user[0].got_apples_member > 0">
      <!-- SPACING -->
      <b-row class="row_style">
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">
          <br />
        </b-col>
      </b-row>

      <!-- CREATE AN AUCTION -->
      <b-row class="form_row_style">
        <b-col xs="8" sm="8" md="8" lg="8" xl="8">
          <div class="account_form_style">
            <br />
            <h4>Add New Auction</h4>
            <div>
              <b-button 
              v-on:click="navToCreateAuction()"
              class="button_style">Create Auction</b-button>
            </div>
            <br />
          </div>
        </b-col>
      </b-row>
    </template>

    <template v-if="auctions.length > 0">
      <!-- SPACING -->
      <b-row class="row_style">
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">
          <br />
        </b-col>
      </b-row>

      <!-- VIEW AUCTIONS -->
      <b-row class="form_row_style">
        <b-col xs="8" sm="8" md="8" lg="8" xl="8">
          <div class="account_form_style">
            <br />
            <h4>View {{ auction_count }} listed auctions</h4>
            <div>
              <b-button 
              v-on:click="navToViewAuctions()"
              class="button_style">View Auctions</b-button>
            </div>
            <br />
          </div>
        </b-col>
      </b-row>
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
      auction_count: null,
      user: [],
      orchard: [],
      auctions: [],
      breadcrumbs: [
        {
          text: "Home",
          to: { name: "HOME" }
        },
        {
          text: "Dash",
          to: { name: "DASHBOARD" },
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
    // GET call for user array
    getUser() {
      this.user_id = localStorage.getItem("user_id");
      axios.get("http://localhost:3333/get_user/" + this.user_id)
        .then(response => {
          this.user = response.data;
          console.log(this.user);
          if (this.user[0].got_apples_member) {
            this.getOrchard();
            this.getAuctions();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // GET call for orchard array
    getOrchard() {
      this.user_id = localStorage.getItem("user_id");
      axios.get("http://localhost:3333/get_orchard/" + this.user_id)
        .then(response => {
          this.orchard = response.data;
          console.log(this.orchard);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // GET call for auctions array
    getAuctions() {
      this.user_id = localStorage.getItem("user_id");
      axios.get("http://localhost:3333/get_grower_auctions/" + this.user_id)
        .then(response => {
          this.auctions = response.data;
          console.log(this.auctions);
          this.auction_count = this.auctions.length;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // Navigate to user edit page
    navToUserEdit() {
      this.$router.push("edit_user");
    },
    // Navigate to create auction page
    navToCreateAuction() {
      this.$router.push("create_auction");
    },
    // Navigate to view auctions page
    navToViewAuctions() {
      this.$router.push("view_auctions");
    }
  },
  // run on page mount
  mounted: function() {
    this.loggedInCheck();
    this.authCheck();
    this.getUser();
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
