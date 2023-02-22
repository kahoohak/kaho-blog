<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" :router="true" @select="handleSelect">
        <el-menu-item index="/home">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="/article">Article</el-menu-item>
        <el-menu-item index="/demo">Demo</el-menu-item>
        <el-menu-item index="/aboutMe">About Me</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("/home");
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.flex-grow {
    flex-grow: 1;
}
</style>
