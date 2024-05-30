<template>
    <!-- <link rel="stylesheet" href="src/assets/css/layout.css"> -->

    <!-- 头 -->
    <div class="head">
        <div class="logo"><img :src="logo" alt=""></div>
    </div>

    <!-- cover -->
    <div class="cover">
        <ul v-infinite-scroll="load(dataBlocks)" class="infinite-list" style="overflow: auto">
            <li v-for="i in dataBlocks" :key="i.id" class="infinite-list-item" @click="goToDetails(i.id, i.title)">
                <p>{{ i.title }}</p>
                <h6>{{ i.detail }}</h6>
            </li>
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
        <p>Powered by <a href="#"><span>KGIO Team</span></a></p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { type Data, dataBlocks } from "@/res/dataModel"
import logo from "@/assets/icons/logo.png"
import router from '@/router';


const goToDetails = (id: number, title: string) => {
    router.push({ name: 'Details', params: { id, title } });
};

const load = (dataBlocks: Data[]) => {
    if (dataBlocks == null) {
        return
    }
}

</script>

<style scoped>
@import "/src/assets/css/layout.css";

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

    align-items: center;
    flex-direction: column;
    height: 240px;
    width: 290px;
    background: var(--root-white);
    margin: 10px;
    border-radius: 5px;
    transition: all 0.5s;
}

.cover .infinite-list .infinite-list-item:hover {
    background-color: #ffe3f0;
}

.cover .infinite-list .infinite-list-item:active {
    background-color: #ffaed4;
}

.cover .infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}

.cover .infinite-list-item p {
    color: var(--root-basic-pink);
    font-size: 27px;
    font-weight: 300;
}

.cover .infinite-list-item span {
    margin-top: 30px;
}

.cover .infinite-list-item h6 {
    margin-top: 30px;
}
</style>