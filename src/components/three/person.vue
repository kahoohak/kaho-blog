<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load(
    "/model-with-animations.glb",
    (gltf) => {
        scene.add(gltf.scene);
    },
    undefined,
    undefined
);

console.log(scene);
</script>

<template></template>

<style lang="scss" scoped></style>
