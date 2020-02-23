<template>
  <div class="form-1">
    <h1>Sign up</h1>

    <input 
      type="email" 
      name="email"
      v-model="email" 
      placeholder="email"/>
    <br>
    <input 
      type="password" 
      name="password"
      v-model="password"
      placeholder="password"/>
    <br>
    <input 
      type="text" 
      name="username"
      v-model="username"
      placeholder="username"/>
    <br>
    <input 
      type="text" 
      name="bio"
      v-model="bio"
      placeholder="bio"/>
    <br>
    <button @click="signup">Sign up</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Router from '../router/index'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: '',
      bio: ''
      }
  },
  watch: {

  },
  methods: {
    async signup() {
        const response = await AuthenticationService.signup({
          email: this.email,
          password: this.password,
          username: this.username,
          bio: this.bio,
        }).then((response) => {
          this.error = '',
          localStorage.setItem('user-token', response.data.token),
          localStorage.setItem('user-id', response.data.id)
          Router.push({name: 'getUserById'});
        })
        .catch((error) => alert(error.response.data.error))
    }
  }
}
</script>
<style scoped>
.form-1 input {
  margin-bottom: 3px
}
</style>
