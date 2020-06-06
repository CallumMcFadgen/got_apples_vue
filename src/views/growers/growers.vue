<template>
  <b-container fluid class="container_style">
    <!-- NAVIGATION BREADCRUMBS -->
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="10" offsetlg="1" xl="10" offsetxl="1">
        <b-breadcrumb class="breadcrumb_style" :items="items"></b-breadcrumb>
      </b-col>
    </b-row>

    <div class="text-left">
      <h1>Grower information from API GET request</h1>
      <div v-for="(user, index) in users" :key="`user-${index}`">
        <div v-if="user.got_apples_member === 1">
          <br />
          <h2>User : {{ user.user_name }}</h2>
          <P><b>First name</b></P>
          <p>{{ user.first_name }}</p>
          <P><b>Last name</b></P>
          <p>{{ user.last_name }}</p>
          <P><b>Phone number</b></P>
          <p>{{ user.phone_number }}</p>
          <P><b>Email address</b></P>
          <p>{{ user.email_address }}</p>
          <br />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Growers",
  components: {},
  data() {
    return {
      users: []
    };
  },

  // run on launch
  mounted: function() {
    axios.get("http://localhost:3333/get_users").then(response => {
      this.users = response.data;
      console.log(response.data);
    });
  }
};
</script>
