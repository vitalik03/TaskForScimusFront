<template>
  <div class="form-2">
    <h1> User info </h1>
    <div>
        email =  
        {{email}}
    </div>
    <div>
      password = 
      {{password}}
    </div>
    <div>
      username =
      {{username}}
    </div>
    <div>
      bio =
      {{bio}}
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: '',
      bio: ''
      }
  },
  created() {
    this.getUserById()
  },
  methods: {
    async getUserById() {
      const token = localStorage.getItem('user-token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
      }
      let id = localStorage.getItem('user-id')
      const response = await AuthenticationService.getUserById(id)
        .then((response) => {
          this.email = response.data.email
          this.password = response.data.password
          this.username = response.data.username
          this.bio = response.data.bio
        })
        .catch((error) => alert(error.response.data.error))
      }
  }
}
</script>
<style scoped>
.form-2 {
  text-align: left
}
</style>
