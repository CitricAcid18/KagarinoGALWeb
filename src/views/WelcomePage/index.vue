<template>

    <link rel="stylesheet" href="src/assets/css/welcomePage.css">
    <div class="wrapper">
      <div class="head">
          <div class="logo"><img src="/src/assets/icons/logo.png" alt=""></div>
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
    <div class="head">
        <div class="logo"><img src="/src/assets/icons/logo.png" alt=""></div>
        <div class="buttons">
            <div class="bt1">登录</div>
            <div class="bt2">注册</div>
        </div>
        <div class="introduce-container">
          <h3>关于我们</h3>
          <ul class="introduce-list">
            <li v-for="item in advantages" key = "item.id">
              <img :src="item.imageUrl" alt="photo">
              <span>{{item.content}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <p>版权信息: © xxx</p>
      </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@import "/src/assets/css/welcomePage.css";
</style>