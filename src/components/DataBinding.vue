<template>
    <div>
        <h1>Data Binding</h1>
        <p>Message: {{ message }}</p>
        <input class="border border-gray-300 rounded-md p-2"  type="text" v-model="message" />

        <h2>V-bind</h2>
        <!--  Viêt tắt :src -->
        <img :src="imageUrl" alt="Random Image" />
        <!-- <img v-bind:src="imageUrl" alt="Random Image" /> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
// 1 chiều từ lấy dữ liệu message từ model(script) -> view(template)
// 2 chiều từ view cụ thể ô input (template) -> model(script) biến message
// => Two way binding
const message = ref('Hello')

// V-bind: Truyền dữ liệu vào thuộc tính của thẻ HTML
// dữ liệu: giá trị của thuộc tính
// Thuộc tính: class, style, src, alt, href, id, name, value, disabled, checked
const imageUrl = ref('https://picsum.photos/200/300')

</script>

<style lang="scss" scoped>

</style>