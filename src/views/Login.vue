<template>
  <div class="login">
    <SigninEmail/>
  </div>
</template>

<script>
// @ is an alias to /src
import SigninEmail from '@/components/SigninEmail.vue'

export default {
  name: 'login',
  components: {
    SigninEmail
  }
}
</script>