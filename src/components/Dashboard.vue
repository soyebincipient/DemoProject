<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Demo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
            <img :src="getProfile.image_url" alt="" border="0" height="50" width="65" style="max-width: 130px;">  <b-dropdown right :text="getProfile.email">
                <b-dropdown-item @click="logout()">Sign out</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    getProfile() {
      return this.$store.getters.profileData;
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    logout() {
      console.log("clicked");
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
/* Fixes dropdown menus placed on the right side */
.ml-auto {
  left: auto !important;
  right: 0px;
}
</style>