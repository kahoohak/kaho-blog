<script setup lang="ts">
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
// defineProps<{ msg: string }>();
</script>

<template>
    <el-container>
        <el-header class="header"> <Header /></el-header>
        <el-main class="main"><slot>Main</slot></el-main>
        <el-footer class="footer"><Footer /></el-footer>
    </el-container>
</template>

<style lang="scss" scoped>
.header,
.main {
    padding: 0;
}

.header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
}

.main {
    min-height: 100vh;
    padding-top: 60px;
}
</style>
