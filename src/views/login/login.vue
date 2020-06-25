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
        <h1 class="page_heading_txt">Login</h1>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- LOGIN FORM -->
    <b-row class="form_row_style">
      <b-col xs="8" sm="8" md="8" lg="8" xl="8">
        <b-form class="login_form_style">
          <br />
          <h2>Enter your user login</h2>
          <br />
          <b-form-group class="login_input_style">
            <b-form-input
              id="username"
              type="text"
              required
              placeholder="Username"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
              id="password"
              type="password"
              required
              placeholder="Password"
            >
            </b-form-input>
          </b-form-group>
          <br />
          <div>
            <router-link to="dashboard">
              <b-button class="button_style" type="submit">Login</b-button>
            </router-link>
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

    <!-- REGISTER TILE -->
    <b-row class="form_row_style">
      <b-col xs="8" sm="8" md="8" lg="8" xl="8">
        <div class="login_form_style">
          <br />
          <h2>Not a member yet?</h2>
          <br />
          <p class="register_tile_text">
            Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tuakana ki te
            hii ika. I te hokinga mai o ona tuakana ki tatahi, ka kii atu a
            Maui, “ka taea e au te haramai i to koutou na taha ki te hii ika?”
            Engari, ko te whakautu o ona tuakana ki a ia ano
          </p>
          <br />
          <div>
            <router-link to="register">
              <b-button class="button_style" type="submit">Register</b-button>
            </router-link>
          </div>
          <br />
        </div>
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
  name: "Login",
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      breadcrumbs: [
        {
          text: "Home",
          to: { name: "HOME" },
        },
        {
          text: "Login",
          to: { name: "LOGIN" },
          active: true
        }
      ]
    };
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

// PAGE STYLE ////////////////////////////////////////////////

// background color
.container_style {
  background-color: #e3e4e6;
}

// navigation breadcrumbs style
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


