<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "@/layout/index.vue";
import TransitionFade from "@/components/transitions/fade.vue"

const router = useRouter();
//当前页是否需要layout
const hasLayout = ref(false);

router.beforeEach((to, from, next) => {
    hasLayout.value = to.meta.layout;
    next();
});
</script>

<template>
    <template v-if="hasLayout">
        <Layout>
            <router-view v-slot="{ Component }">
                <TransitionFade>
                    <component :is="Component"></component>
                </TransitionFade>
            </router-view>
        </Layout>
    </template>
    <router-view v-else />
</template>

<style lang="scss" scoped>

</style>
