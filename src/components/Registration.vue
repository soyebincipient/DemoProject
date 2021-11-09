<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-5 col-lg-6 col-xl-5">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-12 col-lg-6 col-xl-4 offset-xl-1">
          <ValidationObserver ref="observer" tag="form" v-slot="{ validate }">
            <form @submit.prevent="validate().then(sendCall)">
              <div
                class="
                  d-flex
                  flex-row
                  align-items-center
                  justify-content-center justify-content-lg-start
                "
              >
                <p class="lead fw-normal mb-0 me-3">Register Account</p>
              </div>
              <br />
              <div class="form-outline mb-4">
                <ValidationProvider
                  name="name"
                  ref="name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input
                    type="Name"
                    class="form-control form-control-lg"
                    placeholder="Name"
                    v-model="name"
                    name="name"
                    :class="errors[0] ? 'is-invalid' : ''"
                  />
                  <small
                    class="block text-red-600 text-xs absolute bottom-0 left-0"
                    style="color: #ea5455"
                    >{{ errors[0] }}</small
                  >
                </ValidationProvider>
              </div>
              <!-- Email input -->
              <ValidationProvider
                name="email"
                ref="email"
                rules="required"
                v-slot="{ errors }"
              >
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Email"
                    v-model="email"
                    name="email"
                    :class="errors[0] ? 'is-invalid' : ''"
                  />
                  <small
                    class="block text-red-600 text-xs absolute bottom-0 left-0"
                    style="color: #ea5455"
                    >{{ errors[0] }}</small
                  >
                </div>
              </ValidationProvider>
              <!-- Password input -->
              <ValidationProvider
                name="password"
                ref="password"
                rules="required"
                v-slot="{ errors }"
              >
                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    :class="errors[0] ? 'is-invalid' : ''"
                    v-model="password"
                    name="password"
                  />
                  <small
                    class="block text-red-600 text-xs absolute bottom-0 left-0"
                    style="color: #ea5455"
                    >{{ errors[0] }}</small
                  >
                </div>
              </ValidationProvider>

              <!-- <div class="d-flex justify-content-between align-items-center">
              <a href="#!" class="text-body">Forgot password?</a>
            </div> -->

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                >
                  Register
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?
                  <router-link to="/"
                    ><a href="#!" class="link-danger">Login</a></router-link
                  >
                </p>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    sendCall() {
      console.log("clicked");
    },
  },
};
</script>

<style>
</style>