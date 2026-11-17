<template>
  <div>
    <!-- V-if -->
    <!-- V-if nếu giá trị sai thì sẽ xóa element HTML hoàn toàn khỏi DOM -->
    <!-- V-if thích hợp cho việc render các element không thường xuyên thay đổi -->
    <h1>Conditional Rendering</h1>
    <div v-if="isLogin">
      <p>You are Login</p>
    </div>
    <!-- v-show -->
    <!-- v-show nếu giá trị sai thì sẽ ẩn element HTML khỏi DOM bằng CSS, nhưng element vẫn còn trong DOM -->
    <!-- V-show thích hợp cho việc ẩn/hiện các element thường xuyên thay đổi -->
    <div v-show="isLogin">
      <p>You are Login</p>
    </div>

    <!-- <div v-if="age >= 18">
      <p>You are an adult</p>
    </div>
    <div v-else-if="age >= 13">
      <p>You are a teenager</p>
    </div>
    <div v-else>
      <p>You are a child</p>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLogin = ref(true);
// const age = ref(20);
</script>

<style scoped></style>
