<template>
  <div>
    <h1>List Rendering</h1>
    <ul>
      <!-- key dùng để xác định duy nhất mỗi phần tử trong danh sách, giúp Vue
      theo dõi các phần tử khi chúng thay đổi -->
      <li v-for="food in foods" :key="food">
        {{ food }}
      </li>
      <!-- Nếu muốn lấy ra index -->
      <li v-for="(food, index) in foods" :key="food">
        {{ index }}: {{ food }}
      </li>
      <!-- V-for với Mảng chứa đối tượng áp dụng destructuring -->
      <li v-for="{ id, name, age } in students" :key="id">
        {{ id }}: {{ name }}, {{ age }}
      </li>
      <!-- V-for với object -->
      <li v-for="(value, key) in user" :key="key">
        {{ key }}: {{ value }}
      </li>

    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const foods = reactive(["Pizza", "Burger", "Pasta", "Salad"]);

const students = reactive([
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 21 },
]);
const user = reactive({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
});
</script>

<style lang="scss" scoped></style>
