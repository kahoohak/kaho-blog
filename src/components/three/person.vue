<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { onMounted, onUnmounted, ref } from "vue";

//模型是否渲染完毕


const glbViewer = (id: string) => {
    let elem = document.getElementById(id) as HTMLElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, elem.clientWidth / elem.clientHeight, 0.1, 1000);

    scene.background = new THREE.Color(0xffffff)
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(elem.clientWidth, elem.clientHeight);

    elem.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);

    const loader = new GLTFLoader();

    loader.load(
        "/model-with-animations.glb",
        function (gltf) {
            scene.add(gltf.scene);

            const mixer = new THREE.AnimationMixer(gltf.scene);
            const animation = mixer.clipAction(gltf.animations[0]);
            animation.play();

            const clock = new THREE.Clock();
            // 渲染
            function render() {
                const time = clock.getDelta();
                if (mixer) {
                    mixer.update(time);
                }

                renderer.render(scene, camera);
                requestAnimationFrame(render);
            }
            render();
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

    window.addEventListener(
        "resize",
        function () {
            renderer.setSize(elem.clientWidth, elem.clientHeight);
            camera.aspect = elem.clientWidth / elem.clientHeight;
            camera.updateProjectionMatrix();
        },
        false
    );
};

onMounted(() => {
    glbViewer("container");
});
</script>

<template>
    <div id="container"></div>
</template>

<style lang="scss" scoped>
#container {
    width: 100%;
    height: calc(100vh - 60px);
}
</style>
