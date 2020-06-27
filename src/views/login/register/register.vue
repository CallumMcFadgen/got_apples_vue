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
        <router-link
          v-else-if="login_status == true"
          class="login_style"
          to="/dashboard"
          >DASH</router-link
        >
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
        <h1 class="page_heading_txt">Register</h1>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- REGISTER FORM -->
    <b-row class="form_row_style">
      <b-col xs="8" sm="8" md="8" lg="8" xl="8">
        <b-form class="login_form_style">
          <br />
          <h2>Create your account</h2>
          <br />
          <b-form-group class="login_input_style">
            <b-form-input
              id="first_name"
              type="text"
              maxlength="50"
              required
              placeholder="First name"
              v-model="user.first_name"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="last_name"
              type="text"
              maxlength="50"
              required
              placeholder="Last name"
              v-model="user.last_name"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="username"
              type="text"
              maxlength="50"
              required
              placeholder="Username"
              v-model="user.user_name"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="password"
              type="password"
              maxlength="50"
              required
              placeholder="Password"
              v-model="user.password"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="email"
              type="email"
              maxlength="50"
              required
              placeholder="Email"
              v-model="user.email_address"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="phone_number"
              type="text"
              maxlength="50"
              required
              placeholder="Phone number"
              v-model="user.phone_number"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="address_line_1"
              type="text"
              maxlength="50"
              required
              placeholder="Address line 1"
              v-model="user.address_line_1"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="address_line_2"
              type="text"
              maxlength="50"
              required
              placeholder="Address line 2"
              v-model="user.address_line_2"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="region"
              type="text" 
              maxlength="50"
              required
              placeholder="Region"
              v-model="user.region"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="city"
              type="text"
              maxlength="50"
              required
              placeholder="City"
              v-model="user.city"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="zip_code"
              type="text"
              maxlength="50"
              required
              placeholder="ZIP code"
              v-model="user.zip_code"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox-group>
              <b-form-checkbox>Request membership privilages</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <br />
          <div>
            <b-button 
              class="button_style"
              v-on:click="userValidationAndPosting()"
              >Register</b-button
            >
          </div>
          <br />
        </b-form>
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
  name: "Register",
  components: {},
  data() {
    return {
      username_count: null,
      login_status: null,
      user: {
        first_name: null,
        last_name: null,
        user_name: null,
        password: null,
        email_address: null,
        phone_number: null,
        address_line_1: null,
        address_line_2: null,
        region: null,
        city: null,
        zip_code: null
      },
      breadcrumbs: [
        {
          text: "Home",
          to: { name: "HOME" }
        },
        {
          text: "Register",
          to: { name: "REGISTER" },
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
    // run validation and if successful, authentication
    userValidationAndPosting() {
      console.log("userValidationAndPosting called");
      if (
        this.isFirstNameValid() === true &&
        this.isLastNameValid() === true &&
        this.isUsernameValid() === true &&
        this.isPasswordValid() === true &&
        this.isEmailValid() === true &&
        this.isPhoneValid() === true &&
        this.isAddress1Valid() === true &&
        this.isAddress2Valid() === true &&
        this.isregionValid() === true &&
        this.isCityValid() === true &&
        this.isZipValid() === true
      ) {
        this.getUsernameCount();
      }
    },
    // Check first name for null or empty
    isFirstNameValid() {
      if (!(!this.user.first_name || this.user.first_name.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid name into the first name field",
          "Empty first name field",
          "error"
        );
      }
    },
    // Check last name for null or empty
    isLastNameValid() {
      if (!(!this.user.last_name || this.user.last_name.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid name into the last name field",
          "Empty last name field",
          "error"
        );
      }
    },
    // Check username for null or empty
    isUsernameValid() {
      if (!(!this.user.user_name || this.user.user_name.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid name into the username field",
          "Empty username field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isPasswordValid() {
      if (!(!this.user.password || this.user.password.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid password into the password field",
          "Empty password field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isEmailValid() {
      if (!(!this.user.email_address || this.user.email_address.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid email address into the email field",
          "Empty email field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isPhoneValid() {
      if (!(!this.user.phone_number || this.user.phone_number.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid phone number into the phone number field",
          "Empty phone number field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isAddress1Valid() {
      if (!(!this.user.address_line_1 || this.user.address_line_1.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid address into the first address field",
          "Empty address field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isAddress2Valid() {
      if (!(!this.user.address_line_2 || this.user.address_line_2.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid address into the second address field",
          "Empty address field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isregionValid() {
      if (!(!this.user.region || this.user.region.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid region into the region field",
          "Empty region field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isCityValid() {
      if (!(!this.user.city || this.user.city.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid city into the City field",
          "Empty city field",
          "error"
        );
      }
    },
    // Check password for null or empty
    isZipValid() {
      if (!(!this.user.zip_code || this.user.zip_code.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid zip code into the Zip code field",
          "Empty Zip Code field",
          "error"
        );
      }
    },
    // Get call for username match response
    getUsernameCount() {
      axios.get("http://localhost:3333/get_username_count/" + this.user.user_name)
        .then(response => {
          this.username_status = response.data;
          if (this.username_status[0].MESSAGE == "AVAILABLE") {
            this.$alert(
              "Your registration attempt was successful, welcome " + this.user.user_name,
              "Registered",
              "success"
            );
            // localStorage.setItem("user_id", this.username);
            // this.$router.push("dashboard");
          } else {
            this.$alert(
              "Your registration attempt was unsuccessful, please try again with a diffrent username",
              "Login Failed",
              "error"
            );

          }
        });
    },

    // POST call to create new user - a bit messy, should just pass an object?
    postUser() {
      const first_name = this.user.first_name;
      const last_name = this.user.last_name;
      const user_name = this.user.user_name;
      const password = this.user.password;
      const email_address = this.user.email_address;
      const phone_number = this.user.phone_number;
      const address_line_1 = this.user.address_line_1;
      const address_line_2 = this.user.address_line_2;
      const region = this.user.region;
      const city = this.user.city;
      const zip_code = this.user.zip_code;
      axios
        .post(
          "http://localhost:3333/post_user/" +
            first_name +
            "/" +
            last_name +
            "/" +
            user_name +
            "/" +
            password +
            "/" +
            email_address +
            "/" +
            phone_number +
            "/" +
            address_line_1 + 
            "/" +
            address_line_2 +
            "/" +
            region +
            "/" +
            city +
            "/" +
            zip_code
        )
        .then(response => {
          console.log(response);
        });
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

// spacing
.spacing_style {
  background-color: #e3e4e6;
}

.login_form_style {
  background-color: white;
  text-align: center;
  padding: none;
}

.login_input_style {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.register_tile_text {
  margin-left: 3%;
  margin-right: 3%;
}

.button_style {
  background-color: #64676c;
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


