<template>
    <!-- 头 -->
    <div class="head">
        <div class="logo"><img :src="logo" alt=""></div>
    </div>
    <div class="cover">
        <!-- 简介 -->
        <div class="introduction">
            <p>{{ title }}</p>
            <span>{{ detail }}</span>
        </div>
        <div class="sp"></div>
        <!-- 信息 -->
        <div class="introduction information">
            <p>信息</p>
            <span>{{ info }}</span>
        </div>
        <div class="sp"></div>
        <!-- 链接 -->
        <div class="introduction link">
            <p>链接</p>
            <span>
                <a href="#">{{ url }}</a>
            </span>
        </div>
    </div>
    <div class="sp"></div>
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
        <p>Powered by <a href="#"><span>KAIO Team</span></a></p>
    </div>
</template>

<script lang="ts" setup>
import logo from '@/assets/icons/logo.png'
import type { Data } from '@/res/dataModel';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = ref(Number(route.params.id))
const title = ref('')
const url = ref('')
const detail = ref('')
const info = ref('')
onMounted(() => {
    const dataBlocks = ref<Data[]>([
        { id: 1, title: "游戏王", url: "https://123.com", detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！", info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw" },
        { id: 2, title: "火鸡在线", url: "https://123.com", detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！", info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw" },
        { id: 3, title: "杀手2", url: "https://123.com", detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！", info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw" },
        { id: 4, title: "辐射4", url: "https://123.com", detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！", info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw" },
        { id: 5, title: "老滚5", url: "https://123.com", detail: "惊为天人！如此构造简直是巧夺天工，妙哉妙哉！", info: "hakwdhajwdbawjbhdhabwbdhabwdbhahbsdbajvhwdhahjvw" },

    ])
    const i = dataBlocks.value.find(d => d.id === id.value)
    if (i) {
        title.value = i.title
        url.value = i.url
        detail.value = i.detail
        info.value = i.info
    }
})
</script>

<style scoped>
@import "@/assets/css/detail.css";
</style>