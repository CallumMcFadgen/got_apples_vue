<template>
  <b-container fluid class="container_style">
    <!-- NAVIGATION BREADCRUMBS -->
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="10" offsetlg="1" xl="10" offsetxl="1">
        <b-breadcrumb class="breadcrumb_style" :items="items"></b-breadcrumb>
      </b-col>
    </b-row>

    <div>
      <h1>This is the auctions page</h1>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Auctions",
  components: {}
};
</script>
