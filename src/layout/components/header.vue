<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const activeIndex = ref("");

const router = useRouter();

router.beforeResolve((to, from, next) => {
    activeIndex.value = to.path.includes("demo") ? "/demo" : to.path;
    next();
});

const handleSelect = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath);
};
</script>

<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        :router="true"
        @select="handleSelect"
    >
        <el-menu-item index="/home">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="/article">Article</el-menu-item>
        <el-menu-item index="/demo">Demo</el-menu-item>
        <el-menu-item index="/aboutMe">About Me</el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
.flex-grow {
    flex-grow: 1;
}
</style>
