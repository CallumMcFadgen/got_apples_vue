<template>
  <div class="text-left">
    <h1>Grower information from API GET request</h1>
    <div v-for="(user, index) in users" :key="`fruit-${index}`">
      <di v-if="user.got_apples_member === 1">
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
      </di>
    </div>
  </div>
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
    });
  }
};
</script>
