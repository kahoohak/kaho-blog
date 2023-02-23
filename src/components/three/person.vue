<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { onMounted } from "vue";

// const scene = new THREE.Scene();

// const loader = new GLTFLoader();

// loader.load(
//     "/model-with-animations.glb",
//     (gltf) => {
//         scene.add(gltf.scene);
//     },
//     undefined,
//     undefined
// );

const glbViewer = (id: string) => {
    let elem = document.getElementById(id) as HTMLElement;
    console.log(elem)
    let camera = new THREE.PerspectiveCamera(70, elem.clientWidth / elem.clientHeight, 1, 1000);

    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(elem.clientWidth, elem.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    elem.appendChild(renderer.domElement);

    window.addEventListener(
        "resize",
        function () {
            renderer.setSize(elem.clientWidth, elem.clientHeight);
            camera.aspect = elem.clientWidth / elem.clientHeight;
            camera.updateProjectionMatrix();
        },
        false
    );

    var scene = new THREE.Scene();

    scene.background = new THREE.Color(0xffffff);

    // const loader = new THREE.GLTFLoader().setPath("assets/models/"); //根据你放的模型或者图片的位置决定是否要使用setPath
    const loader = new GLTFLoader();
    loader.load("/model-with-animations.glb", function (gltf) {
        camera.position.set(4, 0.3, -1.2);
        gltf.scene.position.y = -1.8;
        scene.add(gltf.scene);
    });
};

onMounted(() => {
    console.log('onMounted')
    glbViewer('container')
})
</script>

<template>
    <div id="container" style="width: 600px;height: 600px;"></div>
</template>

<style lang="scss" scoped></style>
