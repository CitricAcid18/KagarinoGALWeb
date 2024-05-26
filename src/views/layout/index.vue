<template>
    <link rel="stylesheet" href="src/assets/css/layout.css">

    <!-- 头 -->
    <div class="head">
        <div class="logo"><img src="/src/assets//icons/logo.png" alt=""></div>
        <div class="buttons">
            <div class="bt1">登录</div>
            <div class="bt2">注册</div>
        </div>
    </div>

    <!-- cover -->
    <div class="cover">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
        </ul>
    </div>
    <!-- under -->

    <div class="under">
        <div class="box">
            <div class="information">
                <h2>站点信息</h2>
                <ul>
                    <li><a href="#">意见反馈</a></li>
                    <li><a href="#">免责声明</a></li>
                    <li><a href="#">关于我们</a></li>
                </ul>
            </div>
            <div class="friends">
                <h2>友情链接</h2>
                <ul>
                    <li><a href="#">xx</a></li>
                    <li><a href="#">xx</a></li>
                    <li><a href="#">xxx</a></li>
                </ul>
            </div>
            <div class="uwants">
                <h2>讨论区</h2>
                <ul>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">参与贡献</a></li>
                </ul>
            </div>
        </div>
        <p>Powered by <a href="#"><span>KAIO Team</span><br></a> <a href="#"><span>ICP备案 12345678</span></a><a href="#"><span>公网安备 12345678</span></a></p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import xx from 'element-plus';
const count = ref(0)
const load = () => {
    if (count.value > 10){
        return
    }
    count.value += 2
    
}

</script>

<style>
.cover {
    display: flex;
    justify-content: center;
    align-items: center;
}
.cover .infinite-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1px 1px;
    height: 100vh;
    width: 90vw;
}

.cover .infinite-list .infinite-list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 240px;
    width: 290px;
    background: var(--root-white);
    margin: 10px;
    color: var(--el-color-primary);
}

.cover .infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}
</style>