<template>
  <div>
    <h1>Reactive</h1>
    <p>{{ count }}</p>
    <button
      class="text-white bg-blue-500 hover:bg-blue-700 py-1 px-2 rounded-full"
      @click="increment"
    >
      Increment
    </button>
    <h2>Ref</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Price: {{ price }}</p>
    <p>Is Active: {{ isActive }}</p>

    <h2>Reactive</h2>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <p>Is Active: {{ user.isActive }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

let count = ref(0);
// => count = { value: 0 }

const increment = () => {
  count.value++;
  console.log(count.value);
};
// datatype ( kiểu dữ liệu )
// Kiểu dữ liệu tham trị ( string, number, float, boolean)
// Kiểu dữ liệu tham chiếu ( array, object)
// 1.Ref
// Ref có thể dùng cho bất kì kiểu dữ liệu nào
// Lưu ý: Khi ở trong Script muốn đọc, thay đổi dữ liệu thì phải .value
const name = ref("John Doe"); // string
const age = ref(30); // number
const price = ref(9.99); // float
const isActive = ref(true); // Boolean
// 2. Reactive
// Reactive chỉ dùng cho kiểu dữ liệu tham chiếu ( array và object)
const user = reactive({
  // key: value
  name: "John Doe",
  age: 30,
  isActive: true,
});
</script>

<style scoped></style>
