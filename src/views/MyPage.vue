<template>
  <div class="mypage">
    <MyPageComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyPageComp from '@/components/MyPageComp.vue'

export default {
  name: 'mypage',
  components: {
    MyPageComp
  }
}
</script>