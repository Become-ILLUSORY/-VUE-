<template>
    <div class="pic-container">
        <div class="total">
            <!-- 原有的非跳转图片保持不变 -->
            <img src="https://img.picui.cn/free/2024/06/12/66698df60ebb6.jpg">
            <div class="spacer"></div>
            <img src="https://img.picui.cn/free/2024/06/12/66698df4076db.jpg">
            <div class="spacer"></div>
        </div>
        <div class="list">
            <!-- 对列表中的每个图片也做类似的替换 -->
            <ClickableImage v-for="(item, index) in listImages" :key="index" :imageUrl="item.url" :topUrl="item.topUrl"
                :bottomUrl="item.bottomUrl" />
        </div>
    </div>
</template>

<script>
import ClickableImage from '@/components/ClickableImage.vue';

export default {
    components: {
        ClickableImage,
    },
    data() {
        return {
            // 假设你有一个数组来存储图片信息，包括URL和跳转链接
            listImages: [
                { url: 'https://img.picui.cn/free/2024/06/12/66698df404c3c.jpg', topUrl: 'https://you.ctrip.com/sight/luoyang198/8865.html', bottomUrl: 'https://you.ctrip.com/sight/luanchuan1930/9348.html' },
                { url: 'https://img.picui.cn/free/2024/06/12/66698df90e07a.jpg', topUrl: 'https://you.ctrip.com/sight/luoyang198/8940.html', bottomUrl: 'https://you.ctrip.com/sight/luoyang198/77546.html' },
                { url: 'https://img.picui.cn/free/2024/06/12/66698df404db5.jpg', topUrl: 'https://you.ctrip.com/sight/luoyang198/2509137.html#ctm_ref=www_hp_bs_lst', bottomUrl: 'https://you.ctrip.com/sight/luoyang198/47076.html' },
                { url: 'https://img.picui.cn/free/2024/06/12/66698df4057a8.jpg', topUrl: 'https://you.ctrip.com/sight/luanchuan1930/57632.html#ctm_ref=www_hp_bs_lst', bottomUrl: 'https://you.ctrip.com/sight/xinan2315/135601.html#ctm_ref=www_hp_bs_lst' },
                { url: 'https://img.picui.cn/free/2024/06/12/66698df266358.jpg', topUrl: 'https://you.ctrip.com/sight/songcounty1445115/9324.html#ctm_ref=www_hp_bs_lst', bottomUrl: 'https://you.ctrip.com/sight/luoyang198/5253398.html#ctm_ref=www_hp_bs_lst' },
                // ... 其他图片数据
            ],
        };
    },
};
</script>

<style scoped>
/* 原样式保持不变，但注意检查ClickableImage组件内部是否有可能影响这些样式的CSS */
.pic-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.total,
.list {
    display: flex;
    /* 根据需要调整justify-content */
}

.spacer {
    width: 2%;
}

.total img {
    width: 18%;
    height: auto;
    /* 删除或调整padding-left，具体依据设计需求 */
    /* padding-left: 130px; */
    margin-left: 310px;
    border-radius: 30px;
}

.list :imageUrl {
    width: 18%;
    height: auto;
    /* 删除或调整padding-left，具体依据设计需求 */
    /* padding-left: 130px; */
    margin-left: 80px;
    margin-top: 60px;
    border-radius: 30px;
}

.ClickableImage img {
    /* 添加这一行，以确保ClickableImage内部的图片也受到样式控制 */
    width: 18%;
    height: auto;
    /* 删除或调整padding-left，具体依据设计需求 */
    /* padding-left: 130px; */
    margin-left: 80px;
    margin-top: 60px;
    border-radius: 30px;
}

.ClickableImage img {
    /* 确保列表项和ClickableImage组件中的图片有相同的顶部外边距 */
    width: 18%;
    height: auto;
    /* 删除或调整padding-left，具体依据设计需求 */
    /* padding-left: 130px; */
    margin-left: 80px;
    margin-top: 60px;
    border-radius: 30px;
}
</style>
