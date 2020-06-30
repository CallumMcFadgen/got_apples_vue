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
        <h1 class="page_heading_txt">Create Auction</h1>
      </b-col>
    </b-row>

    <!-- SPACING -->
    <b-row class="row_style">
      <b-col xs="12" sm="12" md="12" lg="12" xl="12">
        <br />
      </b-col>
    </b-row>

    <!-- CREATE AUCTION FORM -->
    <b-row class="form_row_style">
      <b-col xs="8" sm="8" md="8" lg="8" xl="8">
        <b-form class="register_form_style">
          <br />
          <h2>Enter auction details</h2>
          <br />
          <b-form-group class="register_input_style">
            <b-form-input
              id="title"
              type="text"
              maxlength="50"
              required
              placeholder="Title"
              v-model="auction.title"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="register_input_style">
            <b-form-textarea
              id="description"
              type="text"
              maxlength="16,777,215"
              no-resize
              rows="6"
              required
              placeholder="Description"
              v-model="auction.description"
            >
            </b-form-textarea>
          </b-form-group>
          <b-form-group class="register_input_style">
            <b-form-select v-model="auction.variety_name" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group class="register_input_style">
            <b-form-input
              id="weight"
              type="number"
              maxlength="13"
              required
              placeholder="Weight"
              min="0"
              v-model="auction.weight"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="register_input_style">
            <b-form-input
              id="reserve_amount"
              type="number"
              maxlength="13"
              required
              placeholder="Reserve amount"
              min="0"
              v-model="auction.reserve_amount"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="create_auction_checkbox_style">
            <b-form-checkbox-group>
              <b-form-checkbox
                v-model="auction.buy_now"
              >Buy now</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group class="register_input_style">
            <b-form-input
              id="buy_now_amount"
              type="number"
              maxlength="13"
              required
              placeholder="Buy now amount"
              min="0"
              v-model="auction.buy_now_amount"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group class="create_auction_checkbox_style">
            <b-form-checkbox-group>
              <b-form-checkbox
               v-model="auction.delivery"
              >Delivery</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group class="register_input_style">
            <b-form-input
              id="delivery_amount"
              type="number"
              maxlength="13"
              required
              placeholder="Delivery amount"
              min="0"
              v-model="auction.delivery_amount"
            >
            </b-form-input>
          </b-form-group>
          <br />
          <div>
            <b-button 
              class="button_style"
              v-on:click="auctionValidationAndPosting()"
              >Create Auction</b-button
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

    <!-- PRICE CALCULATOR FORM -->
    <b-row class="form_row_style">
      <b-col xs="8" sm="8" md="8" lg="8" xl="8">
        <b-form class="login_form_style">
          <br />
          <h2>Average reserve calculator</h2>
          <br />
          <b-form-group class="register_input_style">
            <b-form-select v-model="calculator.variety_name" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group class="register_input_style">
            <b-form-input
              id="weight"
              type="number"
              maxlength="13"
              required
              placeholder="Weight"
              min="0"
              v-model="calculator.weight"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            class="account_input_style"
            label-cols="7"
            label="Average Reserve:"
          >
            <b-form-input
              id="zip_code"
              type="text"
              maxlength="50"
              readonly
              v-model="calculator.total"
            >
            </b-form-input>
          </b-form-group>
          <br />
          <div>
            <b-button
              class="button_style"
              v-on:click="calculatorValidationAndGet()"
              >Calculate Reserve</b-button
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
  name: "CreateAuction",
  components: {},
  data() {
    return {
      login_status: null,
      calculator: {
        variety_name: null,
        weight: null,
        total: null,
        avg_price: null,
        avg_weight: null
      },
      auction: {
        title: null,
        weight: null,
        start_date: null,
        end_date: null,
        description: null,
        reserve_amount: null,
        buy_now: {
          0: null
        },
        buy_now_amount: null,
        delivery: {
          0: null
      },
        delivery_amount: null,
        user_name: null,
        variety_name: null
      },
      options: [
        { value: null, text: 'Please select a variety' },
        { value: 'Baujade', text: 'Baujade' },
        { value: 'Blenheim Orange', text: 'Blenheim Orange' },
        { value: 'Bramleys Seedling', text: 'Bramleys Seedling' },
        { value: 'Golden Delicious', text: 'Golden Delicious' },
        { value: 'Tydemans Late Orange', text: 'Tydemans Late Orange' },
        { value: 'Worcester Pearmain', text: 'Worcester Pearmain' }
      ],
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
          text: "Create Auction",
          to: { name: "CREATEAUCTION" },
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
    // set Buy Now to correct vars for parsing
    buyNowSetter() {
      if (this.auction.buy_now[0] === true) {
        this.auction.buy_now = "1";
      } else {
        this.auction.buy_now = "0";
      }
    },
    // set Buy Now to correct vars for parsing
    buyNowAmountSetter() {
      if (this.auction.buy_now_amount === null) {
        this.auction.buy_now_amount = "0";
      }
    },
    // set Buy Now to correct vars for parsing
    deliverySetter() {
      if (this.auction.delivery[0] === true) {
        this.auction.delivery = "1";
      } else {
        this.auction.delivery = "0";
      }
    },
    // set Buy Now to correct vars for parsing
    deliveryAmountSetter() {
      if (this.auction.delivery_amount === null) {
        this.auction.delivery_amount = "0";
      }
    },
    // set dates to correct vars for parsing
    dateSetter() {
      this.auction.start_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
      let date = new Date();
      date.setDate(date.getDate() + 7);
      this.auction.end_date = date.toISOString().slice(0, 19).replace('T', ' ');
    },
    // run validation and if successful set some values and call POST
    calculatorValidationAndGet() {
      this.calculator.total = null;
      if (
        this.isCalcVarietyValid() === true &&
        this.isCalcWeightValid() === true
      ) {
        this.getAvgReserve();
      }
    },
    // Check variety for null or empty
    isCalcVarietyValid() {
      if (!(!this.calculator.variety_name || this.calculator.variety_name.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please select a valid variety in the variety selector",
          "Empty variety selector",
          "error"
        );
      }
    },
    // Check weight for null or empty
    isCalcWeightValid() {
      if (!(!this.calculator.weight || this.calculator.weight.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid weight into the weight field",
          "Empty weight field",
          "error"
        );
      }
    },
    // run validation and if successful set some values and call POST
    auctionValidationAndPosting() {
      if (
        this.isTitleValid() === true &&
        this.isDescValid() === true &&
        this.isVarietyValid() === true &&
        this.isWeightValid() === true &&
        this.isReserveValid() === true
      ) {
        this.buyNowSetter();
        this.buyNowAmountSetter();
        this.deliverySetter();
        this.deliveryAmountSetter();
        this.dateSetter();
        this.auction.user_name = localStorage.getItem("user_id");
        this.postAuction();
      }
    },
    // Check title for null or empty
    isTitleValid() {
      if (!(!this.auction.title || this.auction.title.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid title into the title field",
          "Empty title field",
          "error"
        );
      }
    },
    // Check description for null or empty
    isDescValid() {
      if (!(!this.auction.description || this.auction.description.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid description into the description field",
          "Empty description field",
          "error"
        );
      }
    },
    // Check description for null or empty
    isVarietyValid() {
      if (!(!this.auction.variety_name || this.auction.variety_name.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please select a valid variety in the variety selector",
          "Empty variety selector",
          "error"
        );
      }
    },
    // Check weight for null or empty
    isWeightValid() {
      if (!(!this.auction.weight || this.auction.weight.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid weight into the weight field",
          "Empty weight field",
          "error"
        );
      }
    },
    // Check reserve for null or empty
    isReserveValid() {
      if (!(!this.auction.reserve_amount || this.auction.reserve_amount.trim().length === 0)) {
        return true;
      } else {
        this.$alert(
          "Please enter a valid amount into the reserve amount field",
          "Empty reserve field",
          "error"
        );
      }
    },
    // POST call to create new user
    postAuction() {
      console.log("post auction called");
      console.log(this.auction);
      const title = this.auction.title;
      const weight = this.auction.weight;
      const start_date = this.auction.start_date;
      const end_date = this.auction.end_date;
      const description = this.auction.description;
      const reserve_amount = this.auction.reserve_amount;
      const buy_now = this.auction.buy_now;
      const buy_now_amount = this.auction.buy_now_amount;
      const delivery = this.auction.delivery;
      const delivery_amount = this.auction.delivery_amount;
      const user_name = this.auction.user_name;
      const variety_name = this.auction.variety_name;
      axios.post("http://localhost:3333/post_auction/" +
            title +
            "/" +
            weight +
            "/" +
            start_date +
            "/" +
            end_date +
            "/" +
            description +
            "/" +
            reserve_amount +
            "/" +
            buy_now +
            "/" +
            buy_now_amount +
            "/" +
            delivery +
            "/" +
            delivery_amount +
            "/" +
            user_name +
            "/" +
            variety_name
        )
        .then(response => {
          console.log(response);
          this.$alert(
            "Your auction was created successfully",
            "Auction created",
            "success"
          );
          this.$router.push("dashboard");
        })
        .catch(error => {
          console.log(error);
        });
    },
    // Get a price average array based on the variety_name
    getAvgReserve() {
      this.variety_id = this.calculator.variety_name;
      axios.get("http://localhost:3333/get_avg_reserve/"+this.variety_id)
        .then(response => {
          this.calculator.avg_price = response.data;
          this.getAvgWeight();
          console.log(this.calculator.avg_price);
        });
    },
    // Get a price average array based on the variety_name
    getAvgWeight() {
      this.variety_id = this.calculator.variety_name;
      axios.get("http://localhost:3333/get_avg_weight/"+this.variety_id)
        .then(response => {
          this.calculator.avg_weight = response.data;
          console.log(this.calculator.avg_weight);
          this.calculateAvgPrice();
        });
    },
    // check for nulls then reserve / weight * quantity = total
    calculateAvgPrice() {
      if (this.calculator.avg_price[0].reserve !== null || this.calculator.avg_weight[0].weight !== null)
      {
        this.calculator.total = (this.calculator.avg_price[0].reserve / this.calculator.avg_weight[0].weight * this.calculator.weight).toFixed(2);
      }
      else {
      this.calculator.total = "Unavailable"
      }
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

// margins for a form row
.form_row_style {
  //margin-right: 50% !important;
  margin-left: 25% !important;
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

// spacing
.spacing_style {
  background-color: #e3e4e6;
}

.register_form_style {
  background-color: white;
  text-align: center;
  padding: none;
}

.register_input_style {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.create_auction_checkbox_style {
  float: left;
  margin-left: 10%;
}

.create_auction_variety_style {
  color: #707172 !important;
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

