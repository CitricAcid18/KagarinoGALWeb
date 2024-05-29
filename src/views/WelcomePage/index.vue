<template>
    <div class="wrapper">
        <div class="head">
            <div class="logo"><img :src="logo" alt=""></div>
            <div class="buttons">
                <div class="bt1">登录</div>
                <div class="bt2">注册</div>
            </div>
        </div>
        <div class="body">
            <div class="image-container">
                <img :src="images[currentImage]" alt="image">
                <div class="image-buttons">
                    <button @click="prevImage" class="image-button prev">&lt;</button>
                    <button @click="nextImage" class="image-button next">&gt;</button>
                </div>
            </div>
        </div>

        <div class="introduce-container">
            <h3>关于我们</h3>
            <ul class="introduce-list">
                <li v-for="item in advantages" key="item.id">
                    <img :src="item.imageUrl" alt="photo">
                    <span>{{ item.content }}</span>
                </li>
            </ul>
        </div>
        <div class="footer">
            <p>CopyRight @KGIO 团队</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import logo from "@/assets/icons/logo.png"
import game1 from "@/assets/photos/game1.jpg"
import game2 from "@/assets/photos/game2.jpg"
import game3 from "@/assets/photos/game3.jpg"

import img1 from "@/assets/photos/img1.jpg"
import img2 from "@/assets/photos/img2.jpg"
import img3 from "@/assets/photos/img3.jpg"

const currentImage = ref(0)
const images = [
    game1,
    game2,
    game3
]

const advantages = [
    {
        id: 1,
        content: "我们网站提供了大量的galgame资源，包括经典作品、新作推荐以及独家内容。用户可以在这里找到他们感兴趣的游戏，并与其他玩家分享游戏体验。",
        imageUrl: img1
    },
    {
        id: 2,
        content: "我们网站拥有一个活跃的社区，玩家可以在这里发表评论、分享游戏截图、交流游戏心得。这种互动性不仅增加了用户粘性，也为玩家提供了一个互相学习和交流的平台。",
        imageUrl: img2
    },
    {
        id: 3,
        content: "我们网站会定期更新和维护网站内容，确保用户始终能够获得最新的游戏资源、评测和推荐。同时，网站也会及时处理用户反馈和问题，不断提升用户体验和满意度。",
        imageUrl: img3
    }
]
const nextImage = () => {
    currentImage.value = (currentImage.value + 1) % images.length
}
const prevImage = () => {
    images.length - 1
    currentImage.value = currentImage.value === 0 ? images.length - 1 : currentImage.value - 1
}
</script>

<style scoped>
@import "/src/assets/css/welcomePage.css";
</style>