<template>
  <div class="user">
    <h4 style="font-size:20px">页面引入通用组件</h4>
    <pre-user :users="users"></pre-user>
  </div>
</template>
<script>
import preUser from '@/components/userList/preUser'
import * as user from '@/service/api/user';
export default {
  components: {preUser},
  data(){
    return{users:''};
  },
  created(){
    user.getUser(users => {
      console.log(users)
      this.users=users.data.list;
      // commit('setUser', users);
    });
  }
};
</script>