<template>
  <b-container fluid class="container_style">
  <!-- NAVIGATION BREADCRUMBS -->
  <b-row>
    <b-col xs="12" sm="12" md="10" offsetMd="1" lg="10" offsetlg="1" xl="10" offsetxl="1">
      <div class="breadcrumbs_style">
        <router-link class="breadcrumb_style" to="/">Home</router-link>
          &nbsp;
          <span class="breadcrumb_style">></span>
          &nbsp;
        <router-link class="breadcrumb_style" to="login">Login</router-link>
          &nbsp;
          <span class="breadcrumb_style">></span>
          &nbsp;
        <router-link class="breadcrumb_style" to="register">Register</router-link>
      </div>
      <div class="crumb_padding"></div>
    </b-col>
  </b-row>

    <!-- PAGE HEADING -->
    <b-row>
      <b-col xs="12" sm="12" md="10" offsetMd="1" lg="10" offsetlg="1" xl="10" offsetxl="1">
        <img
          src="@/assets/images/heading_backgrounds/home.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <h1 class="page_heading_txt">Register</h1>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="spacing_style">
      <b-col xs="12" sm="12" md="10" offsetMd="1" lg="10" offsetlg="1" xl="10" offsetxl="1">
        <br />
      </b-col>
    </b-row>

    <!-- REGISTER FORM -->
    <b-row>
      <b-col xs="12" sm="12" md="6" offsetMd="3" lg="6" offsetlg="3" xl="6" offsetxl="3">
        <b-form class="login_form_style">
            <br />
            <h2>Create your account</h2>
            <br />
          <b-form-group class="login_input_style">
            <b-form-input
            id="first_name"
            type="text"
            required
            placeholder="First name">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="last_name"
            type="text"
            required
            placeholder="Last name">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="username"
            type="text"
            required
            placeholder="Username">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="password"
            type="password"
            required
            placeholder="Password">
            </b-form-input>
           </b-form-group> 
          <b-form-group class="login_input_style">
            <b-form-input
            id="email"
            type="email"
            required
            placeholder="Email">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="phone_number"
            type="text"
            required
            placeholder="Phone number">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="address_line_1"
            type="text"
            required
            placeholder="Address line 1">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="address_line_2"
            type="text"
            required
            placeholder="Address line 2">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="region"
            type="text"
            required
            placeholder="Region">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="city"
            type="text"
            required
            placeholder="City">
            </b-form-input>
          </b-form-group>
          <b-form-group class="login_input_style">
            <b-form-input
            id="zip_code"
            type="text"
            required
            placeholder="ZIP code">
            </b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox-group>
              <b-form-checkbox>Request membership privilages</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <br />
          <div>
            <router-link to="dashboard">
              <b-button class="button_style" type="submit">Register</b-button>
            </router-link>
          </div>
          <br />
        </b-form>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="spacing_style">
      <b-col xs="12" sm="12" md="10" offsetMd="1" lg="10" offsetlg="1" xl="10" offsetxl="1">
        <br />
      </b-col>
    </b-row>

    <!-- FOOTER -->
    <b-row class="page_footer_style">
      <b-col class="affiliate_link_style" xs="4" sm="4" md="4" lg="4" xl="4">
        <div>
          Links
          <br />Here
        </div>
      </b-col>
      <b-col class="footer_logo_style" xs="4" sm="4" md="4" lg="4" xl="4">
        <div>
          Logo
          <br />Here
        </div>
      </b-col>
      <b-col class="social_media_link_style" xs="4" sm="4" md="4" lg="4" xl="4">
        <div>
          Social Media
          <br />Here
        </div>
      </b-col>
    </b-row>

    <!-- SUBFOOTER -->
    <b-row class="sub_footer_style">
      <b-col xs="12" sm="12" md="10" offsetMd="1" lg="10" offsetlg="1" xl="10" offsetxl="1">
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


<script>
export default {
  name: "Register",
  components: {}
};
</script>
