<template>
  <div class="Forlogin">
    <h1> Login </h1>
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
    <button @click="login" >Login</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Router from '../router/index'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        }).then((response) => {
          localStorage.setItem('user-token', response.data.token),
          localStorage.setItem('user-id', response.data.id),
          Router.push({name: 'getUserById'})
        })
        .catch((error) => alert(error.response.data.error))
    },
  }
}
</script>
<style scoped>
.Forlogin input {
  margin-bottom: 3px;
}
</style>
