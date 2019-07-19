<template>
  <div class="login">
    <SignupEmail/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupEmail from '@/components/SignupEmail.vue'

export default {
  name: 'login',
  components: {
    SignupEmail
  }
}
</script>