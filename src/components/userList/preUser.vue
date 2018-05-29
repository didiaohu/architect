<template>
  <div style="font-size:16px">
    <p>通用用户列表组件</p>
    <span>传入子组件值为</span>
    <ul>
      <li v-for="(user,$index) in users" :key="$index">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['users']
};
</script>